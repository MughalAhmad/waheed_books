import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import SaleTable from '@/components/sale/SaleTable'
const page = () => {
  return (
    <div className="flex flex-col gap-3">
        <PageTitle parentText="Finance" childText="New"/>
        <div className="flex gap-3">
        <AddBtn btnText='Save' url='/headlist'/>
        <AddBtn btnText='List' url='/headlist'/>
        </div>

 <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Head #'/>
      <SearchBox placeholderText='Date' type="date"/>
      <SearchBox placeholderText='Name'/>
      <SearchBox placeholderText='Type'/>
      <SearchBox placeholderText='Status'/>
      </div>
      </Wrapper>
    </div>
  )
}

export default page