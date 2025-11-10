// "use client";
// import React, { useState } from "react";

// const CashOnlineRadio = ({ label = "Payment Method", name = "payment", onChange }) => {
//   const [selected, setSelected] = useState("cash");

//   const handleChange = (value) => {
//     setSelected(value);
//     if (onChange) onChange(value);
//   };

//   return (
//     <div className="bg-[#EFF0F3] flex items-center px-4 py-2 gap-4 rounded-lg border border-[#C1C1C1] text-[#1D1419]/70">
//       <span className="w-auto border-r border-[#C1C1C1] pr-4 whitespace-nowrap text-[#1D1419]/50 font-medium">
//         {label}
//       </span>

//       <div className="flex gap-6">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name={name}
//             value="cash"
//             checked={selected === "cash"}
//             onChange={() => handleChange("cash")}
//             className="cursor-pointer"
//           />
//           <span>Cash</span>
//         </label>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name={name}
//             value="online"
//             checked={selected === "online"}
//             onChange={() => handleChange("online")}
//             className="cursor-pointer"
//           />
//           <span>Online</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default CashOnlineRadio;
const CashOnlineRadio = ({ label = "Payment Method", name = "payment", options = [] }) => {
  return (
    <div className="bg-[#EFF0F3] flex items-center px-4 py-2 gap-4 rounded-lg border border-[#C1C1C1] text-[#1D1419]/70">
      <span className="w-auto border-r border-[#C1C1C1] pr-4 whitespace-nowrap text-[#1D1419]/50 font-medium">
        {label}
      </span>

      <div className="flex gap-4">
        {options.map((opt, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name={name} value={opt.value} className="cursor-pointer" />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CashOnlineRadio;
