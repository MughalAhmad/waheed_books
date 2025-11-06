import PageTitle from "@/components/common/PageTitle";
import AddBtn from "@/components/common/AddBtn";
import Wrapper from "@/components/common/Wrapper";
import SearchBox from "@/components/common/SearchBox";
const page = () => {
  return (
    <div className="flex flex-col gap-3">
        <PageTitle parentText="Sale Invoice" childText="New"/>
        <AddBtn btnText='Save' url='/salelist'/>
 <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Sale #'/>
      <SearchBox placeholderText='Customer'/>
      <SearchBox placeholderText='Mobile'/>
      <SearchBox placeholderText='Address'/>
      <SearchBox placeholderText='Tracking #'/>
      </div>
      </Wrapper>
    </div>
  )
}

export default page