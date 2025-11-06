const Table = () => {

  const data = [
    {
      id:1,
      name:'ahmad',
      mobile: 72635896234,
      address: "xyz",
      track: 8757876
    },
    {
      id:2,
      name:'ali',
      mobile: 4577645656,
      address: "abc",
      track: 67567
    },
    {
      id:3,
      name:'zain',
      mobile: 657567567767,
      address: "zse",
      track: 746756
    },
    {
      id:4,
      name:'hammad',
      mobile: 72635896234,
      address: "xyz",
      track: 8757876
    },
    {
      id:5,
      name:'ahmad',
      mobile: 345345345453,
      address: "jhfh",
      track: 567567
    },
    {
      id:6,
      name:'ali',
      mobile: 6575675656,
      address: "xyz",
      track: 8757876
    },
    {
      id:7,
      name:'yousaf',
      mobile: 72635896234,
      address: "fgh",
      track: 787867876
    },
    {
      id:8,
      name:'ahmad',
      mobile: 72635896234,
      address: "xyz",
      track: 8757876
    },
    {
      id:9,
      name:'mubeen',
      mobile: 4765756756,
      address: "hgj",
      track: 564564
    },
    {
      id:10,
      name:'ahmad',
      mobile: 72635896234,
      address: "xyz",
      track: 8757876
    },
  ]

  return (
    <div className="w-full border-1 rounded-2xl border-[#EFF0F2] overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-4 text-left font-bold text-sm text-black">
              ID
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
            Customer
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Mobile
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Address
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Tracting Id
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=>(
          <tr
            className={`${index % 2 !== 0 ? "bg-gray-100" : "bg-white"} py-10`}
          >
            <td className="px-4 py-4 font-semibold text-sm">{item.id}</td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
              {item.name}
            </td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
              {item.mobile}
            </td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
                {item.address}
            </td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
              {item.track}
            </td>
            <td className="px-4 py-4 flex justify-center gap-3 ">
              <button className="bg-blue-500 px-3 py-0.5 rounded-lg text-white cursor-pointer">edit</button>
              <button className="bg-red-500 px-3 py-0.5 rounded-lg text-white cursor-pointer">delete</button>
            </td>
          </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default Table;
