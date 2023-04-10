import "./sidebar.css";
import React, { useContext, useState } from "react";
import { TbHomeStats } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";
import { RiShieldUserLine } from "react-icons/ri";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { TbClockHour2 } from "react-icons/tb";
import { RxGear } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsCircle } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MainContext } from "../../hooks/context/MainContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarOpen } = useContext(MainContext);
  const [subMenuTicket, setSubMenuTicket] = useState(false);
  return (
    <div className="sidebar fixed z-20 h-screen p-3 flex flex-col gap-4  border transform transition-all duration-500 bg-white ">
      <Link to="/">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md 
      "
        >
          <TbHomeStats size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Dashboard
          </span>
        </div>
      </Link>

      <Link to="/tickets">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
      onClick={()=> setSubMenuTicket(!subMenuTicket)}
        >
          <HiOutlineTicket size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Global Tickets
          </span>
          {subMenuTicket ?
          <IoIosArrowDown size={16} />
          :
          <IoIosArrowForward size={16} />
          }
        </div>
      </Link>
      {!subMenuTicket ? null : 
      <div className=" border w-full flex flex-col gap-2 pl-6">
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">Recent Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">Recent Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">Recent Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">Recent Tickets</span>
          </div>
        </Link>
      </div>
      }
      <Link to="#clients">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <FiUsers size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Manage clients
          </span>
        </div>
      </Link>

      <Link to="#agents">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <RiShieldUserLine size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Manage Agents
          </span>
        </div>
      </Link>

      <Link to="#bills">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <BsFileEarmarkMedical size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Bills
          </span>
        </div>
      </Link>

      <Link to="#settings">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <RxGear size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Settings
          </span>
        </div>
      </Link>

      <Link to="#BHour">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <TbClockHour2 size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Business hour
          </span>
        </div>
      </Link>

      <Link to="#CSupport">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <TfiHeadphoneAlt size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Contact support
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
