import React, { Fragment } from 'react'
import Navbar from '../Navbar'
async function getData() {
  const res = await fetch(process.env.HOST_URL+'/api/category').then((res) => res.json()).catch((err) => console.log(err))
  return res['data']
  
}
const MainLayout = async ({ children }) => {
  const data = await getData()
  return (
    <Fragment> <Navbar data={data} /> { children}</Fragment>
  )
}

export default MainLayout