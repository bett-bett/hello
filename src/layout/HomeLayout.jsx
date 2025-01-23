import React from 'react'
import Header from '../components/Header'
import Tool from '../components/Tool'
import { Outlet } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"


function HomeLayout() {
  return (
    <div>
      <Header />
      <Tool />
      
      <div className="body">
        <Outlet />
      </div>
      <Analytics/>
    </div>
  )
}

export default HomeLayout