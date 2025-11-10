import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import SaleTable from "@/components/sale/SaleTable";
import CashOnlineRadio from "@/components/common/CashOnlineRadio";
const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <PageTitle parentText="Sale Invoice" childText="New" />
      <div className="flex gap-3">
        <AddBtn btnText="Save" url="/wb/salelist" />
        <AddBtn btnText="List" url="/wb/salelist" />
      </div>

      <Wrapper>
        <div className="flex gap-5 mb-5 flex-wrap">
          <SearchBox placeholderText="Sale #" readOnly='true'/>
          <SearchBox placeholderText="Date" type="date" />
          <SearchBox placeholderText="Customer" />
          <SearchBox placeholderText="Order #" readOnly='true'/>
          <CashOnlineRadio
            label="MOP"
            name="mob"
            options={[
              { label: "Cash", value: "cash" },
              { label: "Online", value: "online" },
            ]}
          />
          <SearchBox placeholderText="Mobile" />
          <SearchBox placeholderText="Address" />
          <SearchBox placeholderText="Tracking #" />
        </div>
      </Wrapper>

      <Wrapper>
        <SaleTable />
      </Wrapper>
    </div>
  );
};

export default page;
