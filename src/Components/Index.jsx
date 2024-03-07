import React from 'react'
import Header from './Header'
import Info from './Info'
import Contact from './Contact'
import Content from './Content'
import Table from './Table'
export default function Index({
    data
}) {
  return (
    <div className=' bg-bg pb-10 lg:pb-20 w-full flex flex-col items-center'>
      <Header  />
      <Info data={data} />
      <Table data={data}/>
      <Content data={data} />
      <Contact data={data}   />
    </div>
  )
}
