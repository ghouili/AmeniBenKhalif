import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';
import { Dashboard, Tickets } from '../containers';



const Mainroute = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-row" >

        <Sidebar />
        <div className='w-full'>
          <Routes>
            <Route index element={
              <Dashboard />
            } />
            <Route path='tickets' element={
              <Tickets />
            } />
            <Route path='*' element={
              <h1>ERROR 404: Page Note Found</h1>
            } />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Mainroute