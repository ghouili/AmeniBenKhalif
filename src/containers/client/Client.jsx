import "./client.css";
import React from "react";

const Client = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-300">Agent</h1>

      <div className="t-main mt-4 bg-white rounded-md shadow border p-6">
        <div className="">
          <div className="w-full flex justify-end pb-4">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-sm px-3 py-1.5 text-center "
            >
              Add new Client
            </button>
          </div>

          <table className="w-full text-sm text-left text-gray-500  rounded-md">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Client_name
                </th>
                <th scope="col" className="px-6 py-3">
                  Client_ID
                </th>
                <th scope="col" className="px-6 py-3">
                  company
                </th>
                <th scope="col" className="px-6 py-3">
                  Mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">mahdi</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">monta</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">mohamed</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Client;
