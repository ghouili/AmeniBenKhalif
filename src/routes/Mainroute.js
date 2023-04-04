import React from 'react'
// import { Router, Route } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';


const Mainroute = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-row gap-4" >

        <Sidebar />
        <div>
          Content
        </div>
      </div>
    </div>
  )
}

export default Mainroute