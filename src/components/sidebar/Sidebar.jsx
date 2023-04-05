import './sidebar.css';
import React, { useContext } from 'react';
import { TbHomeStats } from 'react-icons/tb';
import { HiOutlineTicket } from "react-icons/hi";
import { MainContext } from '../../hooks/context/MainContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const { sidebarOpen } = useContext(MainContext);
  return (
    <div className='sidebar h-screen p-3 flex flex-col gap-4  border transform transition-all duration-500 '>
      <Link to='/'>
      <div 
      className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md 
      "

      >
        <TbHomeStats size={24} />
        <span className={`font-semibold ${sidebarOpen ? '': 'hidden' }`}>Dashboard</span>
      </div>
     </Link>
     <Link to='/tickets'>
      <div 
      className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "

      >
        <HiOutlineTicket size={24} />
        <span className={`font-semibold ${sidebarOpen ? '': 'hidden' }`}>Tickets</span>
      </div>
      </Link>
    
     
    </div>
  )
}

export default Sidebar