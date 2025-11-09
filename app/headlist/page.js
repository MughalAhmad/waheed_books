import React from "react";
import PageTitle from "@/components/common/PageTitle";
import SearchBox from "@/components/common/SearchBox";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
const page = () => {

    const data = [
    {
      id:1,
      date:'12-10-205',
      name:'head 1',
      type: "charges",
      status: 'true'
    },
    {
      id:2,
      date:'12-10-205',
      name:'head 2',
      type: "bank",
      status: 'true'
    },
    {
      id:3,
      date:'12-10-205',
      name:'head 3',
      type: "charges",
      status: 'true'
    },
    {
      id:4,
      date:'12-10-205',
      name:'head 4',
      type: "charges",
      status: 'true'
    },
    {
      id:5,
      date:'12-10-205',
      name:'head 5',
      type: "bank",
      status: 'true'
    }
  ]
  return (
    <main className="flex flex-col gap-3">
      <PageTitle parentText="Finance" childText="Head" />
      <AddBtn btnText="New" url="/head" />
      <Wrapper>
        <div className="flex gap-5 mb-5 flex-wrap">
          <SearchBox placeholderText="head #" />
          <SearchBox placeholderText="Start" type="date" />
          <SearchBox placeholderText="End" type="date" />
          <SearchBox placeholderText="Name" />
          <SearchBox placeholderText="Type" />
          <SearchBox placeholderText="Status" />
          <button className="bg-[#66D991] text-white font-semibold text-base py-3 px-4 rounded-lg flex gap-3 cursor-pointer">
            <img src="/svg/search.svg" />
            Search
          </button>
        </div>
        <div className="w-full border rounded-2xl border-[#EFF0F2] overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-4 text-left font-bold text-sm text-black">
                  ID
                </th>
                <th className="px-4 py-4 font-bold text-sm text-black text-center">
                  Date
                </th>
                <th className="px-4 py-4 font-bold text-sm text-black text-center">
                  Name
                </th>
                <th className="px-4 py-4 font-bold text-sm text-black text-center">
                  Type
                </th>
                <th className="px-4 py-4 font-bold text-sm text-black text-center">
                  Status
                </th>
                <th className="w-20 py-4 font-bold text-sm text-black text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  className={`${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  } py-10`}
                >
                  <td className="px-4 py-4 font-semibold text-sm">{item.id}</td>
                  <td className="px-4 py-4 font-semibold text-sm text-center">
                    {item.date}
                  </td>
                  <td className="px-4 py-4 font-semibold text-sm text-center">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 font-semibold text-sm text-center">
                    {item.type}
                  </td>
                  <td className="px-4 py-4 font-semibold text-sm text-center">
                    {item.status}
                  </td>
                  <td className="px-3 py-4 flex justify-center gap-3">
                    <img src="/svg/edit.svg" className="cursor-pointer" />
                    <img src="/svg/delete.svg" className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>{" "}
      </Wrapper>
    </main>
  );
};

export default page;
