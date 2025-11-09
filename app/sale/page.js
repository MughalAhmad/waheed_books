import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import SaleTable from '@/components/sale/SaleTable'
const page = () => {
  return (
    <div className="flex flex-col gap-3">
        <PageTitle parentText="Sale Invoice" childText="New"/>
        <div className="flex gap-3">
        <AddBtn btnText='Save' url='/salelist'/>
        <AddBtn btnText='List' url='/salelist'/>
        </div>

 <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Sale #'/>
      <SearchBox placeholderText='Date' type="date"/>
      <SearchBox placeholderText='Customer'/>
      <SearchBox placeholderText='Mobile'/>
      <SearchBox placeholderText='Address'/>
      <SearchBox placeholderText='Tracking #'/>
      </div>
      </Wrapper>

      <Wrapper>
        <SaleTable />
      </Wrapper>
    </div>
  )
}

export default page