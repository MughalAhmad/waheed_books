const table = () => {

  return (
    <div className="w-full">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-4 text-left font-bold text-sm text-black">
              ID
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
            Product
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Email
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Phone
            </th>
            <th className="px-4 py-4 font-bold text-sm text-black text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`py-10`}
          >
            <td className="px-4 py-4 font-semibold text-sm">1</td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
              ahmad
            </td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
              ahmad@gmail.com
            </td>
            <td className="px-4 py-4 font-semibold text-sm text-center">
                1234567890
            </td>
            <td className="px-4 py-4 flex justify-center relative">
              edit delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
