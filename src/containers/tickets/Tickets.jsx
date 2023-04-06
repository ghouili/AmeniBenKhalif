import "./tickets.css";
import React from "react";
import { Link } from "react-router-dom";

// import { AiOutlineEye } from 'react-icons/ai';

const Tickets = () => {
  return (
    <div className="tickets p-6 ">
      <div className="t-xx border px-4 py-2 rounded-md bg-white ">
        <div className="t-links flex gap-1 font-semibold">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Tickets</span>
        </div>
      </div>
      <div className="t-main mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* CARDS::::::::::::::::::::::: */}
        {/* <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border">
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-4 w-4 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
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
        </div> */}

        
        <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Reclmatio 56846</span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>
        


        <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Title 0001 </span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>
        


        <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Title azd22541</span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>
        


        <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Reclamation 448a45zd</span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>
        


        <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Reclamation 00254</span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>
        


      </div>
    </div>
  );
};

export default Tickets;
