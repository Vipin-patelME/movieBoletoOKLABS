import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'

function LayOut() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default LayOut