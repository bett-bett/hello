import React from 'react'
import Header from '../components/Header'
import Tool from '../components/Tool'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
      <Header />
      <Tool />
      
      <div className="body">
        <Outlet />
      </div>
      
    </div>
  )
}

export default HomeLayout