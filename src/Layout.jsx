import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Card from './components/Card'
import CardGrid from './components/CardGrid'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>

       <Outlet/> 

    </>
  )
}

export default Layout