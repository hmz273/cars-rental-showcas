"use client"

import { CustomButton, NavBar } from "@components";
import AddCar from "@components/models/cars/AddCar";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="overflow-hidden">
      
      <div className="mt-28 padding-x padding-y max-width flex items-center justify-between  bg-white ">
        
        <label  className="sr-only">Search</label>
        <div className="relative">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for car" /> */}
           
            <AddCar isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
        </div>

        <div>
        <CustomButton
          title='Add Car'
          containerStyles='w-full px-3 py-2 rounded-lg outlin bg-blue-500'
          textStyles='text-white text-[14px] leading-[17px] font-bold mr-3'
          rightIcon='/right-arrow.svg'
          handleClick={() => setIsOpen(true)}
        />
        </div>
    </div>

      <div className="padding-x padding-y max-width">
        <div className="overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-bhover:bg-gray-50">
                <td className="w-32 p-4">
                  <img
                    src="/hero.png"
                    alt="Apple Watch"
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dacia Logan
                </td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Suv</td>
                <td className="px-6 py-4">$29/day</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline mx-3"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <nav
            className="flex items-center justify-between p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 ">
              Showing <span className="font-semibold text-gray-900 ">1-10</span>{" "}
              of <span className="font-semibold text-gray-900 ">1000</span>
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default page;
