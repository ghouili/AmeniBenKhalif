import "./trashed.css";
import React from "react";
const Trashed = () => {
    return (
        <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-300">Trashed tickets</h1>
        <div className="t-main mt-4 bg-white rounded-md shadow border p-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500  rounded-md">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ticket_ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    user_ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date de suppresion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    id_li_suprymeha
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">sahar</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">suspend</td>
                  <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">28173458</td>
                </tr>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">ameni</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">new</td>
                  <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">28173458</td>
                </tr>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">tahani</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">closed</td>
                  <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">28173458</td>
                </tr>
              </tbody>
                </table>
            </div>
        </div>
        </div>
        );
    };
    export default Trashed;