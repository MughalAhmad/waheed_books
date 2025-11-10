import React from 'react'
import PageTitle from '@/components/common/PageTitle';
import Table from '@/components/common/Table';
import SearchBox from '@/components/common/SearchBox';
import AddBtn from '@/components/common/AddBtn';
import Wrapper from '@/components/common/Wrapper';
const page = () => {
  return (
    <main className='flex flex-col gap-3'>
      <PageTitle parentText="Inventroy" childText="Sales Invoice"/>
      <AddBtn btnText='New' url='/wb/sale'/>
      <Wrapper>
      <div className='flex gap-5 mb-5 flex-wrap'>
      <SearchBox placeholderText='Sale #'/>
      <SearchBox placeholderText='Order #'/>
      <SearchBox placeholderText='Start' type="date"/>
      <SearchBox placeholderText='End' type="date"/>
      <SearchBox placeholderText='Customer'/>
      <SearchBox placeholderText='Mobile'/>
      <SearchBox placeholderText='Address'/>
      <SearchBox placeholderText='Track #'/>
      <button className='bg-[#66D991] text-white font-semibold text-base py-3 px-4 rounded-lg flex gap-3 cursor-pointer'>
        <img src='/svg/search.svg' />
        Search</button>
      </div>
      <Table orderId='true'/>
      </Wrapper>
      
    </main>
  )
}

export default page