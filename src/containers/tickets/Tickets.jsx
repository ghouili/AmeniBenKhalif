import "./tickets.css";
import React from "react";
import { Link } from "react-router-dom";

const Tickets = () => {
  return (
    <div className="tickets p-6 border">
      <div className="t-xx border px-4 py-2 rounded-md ">
        <div className="t-links flex gap-1 font-semibold">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Tickets</span>
        </div>
      </div>
      <div className="t-main mt-4 grid grid-cols-4 gap-4">
        {/* CARDS::::::::::::::::::::::: */}
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border">
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-4 w-4 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </div>
          <span className="self-center text-xl font-bold">Title</span>
          <div className="t-stats flex justify-between font-semibold">
            <span>dep</span>
            <span>stats</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            non massa egestas...
          </p>
          <div className="flex gap-1 items-center">
            <span className="text-sm">Essued By </span>
            <b>Mohammed talbi</b>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Tickets;
