import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Layout