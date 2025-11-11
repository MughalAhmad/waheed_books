const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let qrData = "";

const client = new Client({
  authStrategy: new LocalAuth()
});

client.once("qr", qr => {
  qrData = qr;
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("WhatsApp is ready!");
});

// ✅ Auto reply to any message
client.on("message", async (msg) => {
  console.log("Message from:", msg.from, "=>", msg.body);

  await client.sendMessage(
  msg.from, 
  "Thanks for messaging! I am a bot 🤖\nCheck out this link: https://plain-bees-strive.loca.lt/public/whatsappform"
);

});

client.initialize();

app.get("/qr", (req, res) => {
  res.send(qrData);
});

app.listen(3001, () => {
  console.log("Server on port 3001");
});
