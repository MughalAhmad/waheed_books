"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import SearchBox from "@/components/common/SearchBox";

const PRODUCTS = [
  { id: 'p1', name: 'Product A' },
  { id: 'p2', name: 'Product B' },
  { id: 'p3', name: 'Product C' },
]

function number(v) {
  // Remove commas before parsing
  const cleanValue = typeof v === 'string' ? v.replace(/,/g, '') : v
  const n = parseFloat(cleanValue)
  return Number.isNaN(n) ? 0 : n
}

function formatNumber(n) {
  // Handle empty or invalid input
  if (!n && n !== 0) return ""
  // Remove existing commas and convert to number
  const num = typeof n === 'string' ? parseFloat(n.replace(/,/g, '')) : parseFloat(n)
  // Return empty string if not a valid number
  if (isNaN(num)) return ""
  // Format with commas
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function SaleTable() {
  const router = useRouter()
  const [rows, setRows] = React.useState([
  { id: 1, product: '', qty: 1, rate: 0, discount: 0, tax: 0, total: 0 },
])


  const recalcRow = (r) => {
    const qty = number(r.qty)
    const rate = number(r.rate)
    const discount = number(r.discount)
    const tax = number(r.tax)
    const total = qty * rate - discount + tax
    return { ...r, total }
  }

  const updateRow = (index, patch) => {
    setRows((prev) => {
      const next = [...prev]
      next[index] = recalcRow({ ...next[index], ...patch })
      return next
    })
  }

  const addRow = () => {
  setRows((prev) => {
    const id = prev.length + 1
    return [...prev, { id, product: '', qty: 1, rate: 0, discount: 0, tax: 0, total: 0 }]
      .map((r, i) => ({ ...r, id: i + 1 }))
  })
}


  const removeRow = (index) => {
    setRows((prev) => {
      const next = prev.filter((_, i) => i !== index).map((r, i) => ({ ...r, id: i + 1 }))
      return next.length
  ? next
  : [{ id: 1, product: '', qty: 1, rate: 0, discount: 0, tax: 0, total: 0 }]

    })
  }

  const grandTotal = rows.reduce((s, r) => s + number(r.total), 0)

  return (
    <div className="w-full">
      <div className="w-full border rounded-2xl border-[#EFF0F2] overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border border-[#EFF0F2] w-3">SR</th>
              <th className="p-2 border border-[#EFF0F2]">Product</th>
              <th className="p-2 border border-[#EFF0F2] w-48">Qty</th>
              <th className="p-2 border border-[#EFF0F2] w-48">Rate</th>
              <th className="p-2 border border-[#EFF0F2] w-48">Discount</th>
              <th className="p-2 border border-[#EFF0F2] w-48">Sale Tax</th>
              <th className="p-2 border border-[#EFF0F2] w-48">Total</th>
              <th className="p-2 border border-[#EFF0F2] w-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className=" h-full border border-[#EFF0F2]">
                  <span className="flex justify-center items-center">
                    {row.id}
                  </span>
                </td>
                <td className="border border-[#EFF0F2]">
                  <select
                    value={row.product}
                    onChange={(e) => {
                      updateRow(i, { product: e.target.value });
                      if (i === rows.length - 1) addRow();
                    }}
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  >
                    <option value="">Select product</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-[#EFF0F2]">
                  <input
                    type="text"
                    value={formatNumber(row.qty)}
                    onChange={(e) => updateRow(i, { qty: e.target.value })}
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  />
                </td>
                <td className="border border-[#EFF0F2]">
                  <input
                    type="text"
                    value={formatNumber(row.rate)}
                    onChange={(e) => updateRow(i, { rate: e.target.value })}
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  />
                </td>
                <td className="border border-[#EFF0F2]">
                  <input
                    type="text"
                    value={formatNumber(row.discount)}
                    onChange={(e) => updateRow(i, { discount: e.target.value })}
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  />
                </td>
                <td className="border border-[#EFF0F2]">
                  <input
                    type="text"
                    value={formatNumber(row.tax)}
                    onChange={(e) => updateRow(i, { tax: e.target.value })}
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  />
                </td>
                <td className="border border-[#EFF0F2]">
                  <input
                    type="text"
                    value={formatNumber(row.total)}
                    readOnly
                    className="w-full h-full p-4 border border-[#EFF0F2] outline-0"
                  />
                </td>
                <td className="border border-[#EFF0F2] h-full">
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      onClick={() => removeRow(i)}
                      className="px-1 py-1 w-1/2 h-full bg-red-500 text-white rounded cursor-pointer"
                    >
                      <img
                        src="/svg/cross.svg"
                        width={40}
                        className="text-3xl"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end mt-4 gap-3 ">
        <div className="w-1/4">
            <SearchBox placeholderText='Discount' type='number'/> 
        </div>

        <div className="w-1/4">
            <SearchBox placeholderText='Sales Tax' type='number'/> 

        </div>

        <div className="w-1/4">
            <SearchBox placeholderText='Round off' type='number'/> 
        </div>

        <div className='w-full flex gap-5'>
            <div className='w-1/2 flex flex-col gap-3'>
                <SearchBox placeholderText='Bank 1' type='number'/> 
                <SearchBox placeholderText='Bank 2' type='number'/> 
                <SearchBox placeholderText='Bank 3' type='number'/> 
            </div>
            <div className='w-1/2 flex flex-col gap-3'>
                <SearchBox placeholderText='Charges 1' type='number'/> 
                <SearchBox placeholderText='Charges 2' type='number'/> 
                <SearchBox placeholderText='Charges 3' type='number'/>
            </div>
        </div>

        <div className="font-semibold text-xl">
          Net Amount: {formatNumber(grandTotal.toFixed(2))}
        </div>
      </div>


    </div>
  );
}
