"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    items: [""],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, value) => {
    const updated = [...form.items];
    updated[index] = value;
    setForm({ ...form, items: updated });
  };

  const addItem = () => {
    setForm({ ...form, items: [...form.items, ""] });
  };

  const removeItem = (index) => {
    const updated = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items: updated });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted data:", form);

    // ✅ Use your deployed URL as the base
    try {
      const res = await fetch(
        "https://waheed-books-1mqa.vercel.app/api/whatsappclient", // your backend endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log("Server response:", data);
      alert("Form submitted successfully!");
      // setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit form!");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-8 border rounded-2xl shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Waheed Books
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Customer Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            required
            placeholder="Enter customer name"
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={form.phone}
            required
            placeholder="03XX-XXXXXXX"
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={form.address}
            required
            placeholder="Enter address"
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="example@mail.com"
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Items */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Items (Multiple)
          </label>

          {form.items.map((item, index) => (
            <div key={index} className="flex gap-3 mt-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder={`Item ${index + 1}`}
                required
              />

              <button
                type="button"
                onClick={() => removeItem(index)}
                className="px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="mt-3 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            + Add More Items
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-5 w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
