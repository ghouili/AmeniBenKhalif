import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';
import { Dashboard, TicketDetails, Tickets } from '../containers';
import { MainContext } from '../hooks/context/MainContext';



const Mainroute = () => {
  const { sidebarOpen } = useContext(MainContext);
  return (
    <div>
      <Navbar />
      <div className="w-screen pt-14  flex flex-row" >

        <Sidebar />
        <div className={`w-full ${sidebarOpen ? 'ml-56' : 'ml-20'} `}>
          <Routes>
            <Route index element={
              <Dashboard />
            } />
            <Route path='tickets' element={
              <Tickets />
            } />
            <Route path='TicketDetails' element={
              <TicketDetails />
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