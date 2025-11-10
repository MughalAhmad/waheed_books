import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
import SaleTable from '@/components/sale/SaleTable'
const page = () => {
  return (
    <div className="flex flex-col gap-3">
        <PageTitle parentText="Product" childText="New"/>
        <div className="flex gap-3">
        <AddBtn btnText='Save' url='/wb/productlist'/>
        <AddBtn btnText='List' url='/wb/productlist'/>
        </div>

 <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Product #' readOnly='true'/>
      <SearchBox placeholderText='Product'/>
      <SearchBox placeholderText='Purchase Rate'/>
      <SearchBox placeholderText='Sale Rate	'/>
      {/* <SearchBox placeholderText='Stock'/> */}
      </div>
      </Wrapper>
    </div>
  )
}

export default page