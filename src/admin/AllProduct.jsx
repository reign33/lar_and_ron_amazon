import React from 'react'
import SideBarPage from './SideBarPage';
import {FaSistrix, FaTrashAlt} from "react-icons/fa"
import {BiSolidEdit} from "react-icons/bi";
import { Link } from 'react-router-dom';

function AllProduct() {
  return (
      <div className='flex flex-col items-center border w-[182vh]'>
        <div className='flex justify-between items-center w-[160vh] h-[15vh]'>
          <div>
            <div className='flex'>
              <FaSistrix className='text-[20px] bg-[#F0F0F0] h-[2rem] pl-[5px] rounded-l-lg'/>
              <input className='w-[25rem] h-[2rem] rounded-r-lg bg-[#F0F0F0]' type="search" name="" placeholder=' Search by name ...' id="" />
            </div>
            <p className='text-[14px] text-[gray] font-bold py-[10px]'>Total 7 Products</p>
          </div>
          <div>
          <Link to="/admin/addproduct">
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]' type="button"> Add New Product + </button>
            </Link>
            <p className='text-[14px] text-[gray] font-bold py-[10px] text-right'>Rows per page 5</p>
          </div>
        </div>

        <div className='rounded-xl bg-white w-[160vh] h-[50vh] border border-[#DDDDDD]'>
          <div className='flex justify-between text-[12px] font-medium p-[5px] bg-[#F0F0F0] m-[1rem] rounded-lg'>
            <div className='flex'>
                <input className='mx-[10px]' type="checkbox" name="" id="" />
                <p className='text-left mx-[10px]'>ID</p>
            </div>
            <p className='text-left w-[450px]'>NAME</p>
            <div className='flex'>
                <p className='px-[10px]'>PRICE</p>
                <p className='px-[10px]'>ACTIONS</p>
            </div>
          </div>

          {/* dynamic content */}
          <div className='flex justify-between text-[12px] text-[gray] font-medium p-[5px] m-[1rem] rounded-lg'>
            <div className='flex'>
                <input type="checkbox" name="" id="" />
                <p className='text-left mx-[10px]'>cln80dkfjgnth40guhktm698gk5</p>
            </div>
            <p className='text-left mx-[10px]'>boAt Stone Bluetooth Speaker with 10W RMS Stereo Sound, IPX7 Water Resistance, 
            TWS Feature, Up to 12H Total Playtime, Multi-Compatibility Modes and Type-C Charging Raging Black</p>
            <div className='flex'>
                <p className='mx-[10px] px-[20px]'>5</p>
                <div className='flex justify-start text-[18px] mx-[10px]'><BiSolidEdit className='text-[blue] mr-[10px] hover:text-[#FF9900]'/>
                <FaTrashAlt className='text-[red] hover:text-[#FF9900]' /></div>
            </div>
          </div>
        </div>

        <div className='flex justify-between item-center w-[160vh] mt-[20px] text-[14px] text-[gray] font-medium'>
          <p>0 of 7 Selected</p>

          {/* Pagination */}
          <div>
<nav aria-label="Page navigation example">
  <ul className="flex items-center -space-x-px h-8 text-sm">
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-[white] rounded-lg border border-[#EC6E45] bg-[#FF9900] hover:bg-[#EC6E45] dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>

    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


          </div>

          <div className='text-black'>
            <button className='w-[100px] bg-[#F0F0F0] mr-[20px] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">previous</button>
            <button className='w-[100px] bg-[#F0F0F0] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">Next</button>
          </div>
        </div>

      </div>
  
    
  )
}

export default AllProduct