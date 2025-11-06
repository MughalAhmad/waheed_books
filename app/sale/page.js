import React from 'react'
import PageTitle from '@/components/common/PageTitle';
import Table from '@/components/sale/table';
const page = () => {
  return (
    <main>
      <PageTitle parentText="Inventroy" childText="Sales Invoice"/>
      <Table />
    </main>
  )
}

export default page