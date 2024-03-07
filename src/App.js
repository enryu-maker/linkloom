import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Index from './Components/Index'
import axios from 'axios'

export default function App() {
  const path = useLocation()
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    axios.get(`https://swaroop.nerdtech.in`+ path?.pathname).then
    (res => setData(res.data) )
    .catch(err => alert("something went wrong"))
  },[])
  return (
    <Routes>
      <Route path={path.pathname} element={<Index data={data}/>}/>
    </Routes>
  )
}
