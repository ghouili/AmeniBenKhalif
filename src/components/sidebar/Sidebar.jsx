import './sidebar.css';
import React, { useContext } from 'react';
import { TbHomeStats } from 'react-icons/tb';
import { MainContext } from '../../hooks/context/MainContext';

const Sidebar = () => {

  const { sidebarOpen } = useContext(MainContext);
  return (
    <div className=' h-screen p-3 flex flex-col gap-4  border transition-all duration-500 ease-in-out'>
      
      <div 
      className="s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md"
      >
        <TbHomeStats size={24} />
        <span className={`font-semibold ${sidebarOpen ? '': 'hidden' }`}>Dashboard</span>
      </div>
     
    </div>
  )
}

export default Sidebar