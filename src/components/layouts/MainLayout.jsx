import React, { Fragment } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
async function getData() {
    let socials = (
        await (await fetch(`${process.env.HOST_URL}/api/social`)).json()
    )['data']
    let categories = (
        await (await fetch(`${process.env.HOST_URL}/api/category`)).json()
    )['data']
    return { socials: socials, categories: categories }
}
const MainLayout = async ({ children }) => {
    const data = await getData()
    return (
        <Fragment>
            <Navbar data={data} /> {children} <Footer data={data} />
        </Fragment>
    )
}

export default MainLayout
