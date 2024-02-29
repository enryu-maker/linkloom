import React from 'react'
import Header from './Components/Header'
import Info from './Components/Info'
import Contact from './Components/Contact'
import Content from './Components/Content'
import Table from './Components/Table'

export default function App() {
  return (
    <div className=' bg-bg pb-10 lg:pb-20 w-full flex flex-col items-center'>
      <Header />
      <Info />
      <Table/>
      <Content />
      <Contact />
    </div>
  )
}
