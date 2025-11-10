import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import CashOnlineRadio from "@/components/common/CashOnlineRadio";
const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <PageTitle parentText="Finance" childText="New" />
      <div className="flex gap-3">
        <AddBtn btnText="Save" url="/wb/headlist" />
        <AddBtn btnText="List" url="/wb/headlist" />
      </div>

      <Wrapper>
        <div className="flex gap-5 mb-5 flex-wrap">
          <SearchBox placeholderText="Head #" readOnly="true" />
          <SearchBox placeholderText="Date" type="date" />
          <SearchBox placeholderText="Name" />
          <CashOnlineRadio
            label="Type"
            name="type"
            options={[
              { label: "Charges", value: "charges" },
              { label: "Bank", value: "bank" },
            ]}
          />
          <CashOnlineRadio
            label="Status"
            name="status"
            options={[
              { label: "Active", value: "active" },
              { label: "Deactive", value: "deactive" },
            ]}
          />
          <CashOnlineRadio
            label="Visible"
            name="visible"
            options={[
              { label: "Sale", value: "sale" },
              { label: "Purchase", value: "purchase" },
            ]}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
