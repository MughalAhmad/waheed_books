import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import PurchaseTable from '@/components/purchase/PurchaseTable'
const page = () => {
  return (
    <div className="flex flex-col gap-3">
        <PageTitle parentText="Purchase Return" childText="New"/>
        <div className="flex gap-3">
        <AddBtn btnText='Save' url='/purchasereturnlist'/>
        <AddBtn btnText='List' url='/purchasereturnlist'/>
        </div>

 <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Purchase Return #'/>
      <SearchBox placeholderText='Date' type="date"/>
      <SearchBox placeholderText='Customer'/>
      <SearchBox placeholderText='Mobile'/>
      <SearchBox placeholderText='Address'/>
      </div>
      </Wrapper>

      <Wrapper>
        <PurchaseTable />
      </Wrapper>
    </div>
  )
}

export default page