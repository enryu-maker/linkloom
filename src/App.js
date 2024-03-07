import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Index from './Components/Index'
import axios from 'axios'

export default function App() {
  const path = useLocation()
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    axios.get(`https://swaroop.nerdtech.in/batch-info/ss2401/9/`).then
    (res => setData(res.data) )
    .catch(err => alert("something went wrong"))
  },[])
  return (
    <Routes>
      <Route path='/' element={<Index data={data}/>}/>
    </Routes>
  )
}
