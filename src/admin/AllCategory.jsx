import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import SideBarPage from './SideBarPage';
import {FaSistrix, FaTrashAlt} from "react-icons/fa"
import {BiSolidEdit} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';


function AllCategory() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=> {
    axios.get('http://localhost:8000/category')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
  
      <div className='flex flex-col items-center border w-[182vh]'>
        <div className='flex justify-between items-center w-[160vh] h-[15vh]'>
          <div>
            <div className='flex'>
              <FaSistrix className='text-[20px] bg-[#F0F0F0] h-[2rem] pl-[5px] rounded-l-lg'/>
              <input className='w-[25rem] h-[2rem] rounded-r-lg bg-[#F0F0F0]' type="search" name="" placeholder=' Search by name' id="" />
            </div>
            <p className='text-[14px] text-[#928080] font-bold py-[10px]'>Total 7 Categories</p>
          </div>
          <div>
          <Link to="/admin/addcategory">
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]' type='button'> Add New Category + </button>
            </Link>
            <p className='text-[14px] text-[gray] font-bold py-[10px] text-right'>Rows per page 5</p>
          </div>
        </div>

        {/* table here */}
        <div>
          <table className='rounded-xl bg-white w-[160vh] h-[60vh] border border-[#DDDDDD]'>
            <thead>
              <tr className='flex justify-between text-left text-[16px] font-medium p-[5px] bg-[#F0F0F0] m-[1rem] rounded-lg'>
                <th></th>
                <th className='text-left w-[200px]'>ID</th>
                <th className='text-left w-[150px]'>Name</th>
                <th className='text-left w-[150px]'>PRODUCT</th>
                <th className='text-left w-[150px]'>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i)=> (
                <tr key={i} className='flex justify-between text-[16px] text-[gray] font-medium p-[5px] m-[1rem] rounded-lg'>
                  <td></td>
                  <td className='text-left w-[200px]'>{d.id}</td>
                  <td className='text-left w-[150px]'>{d.name}</td>
                  <td className='text-left w-[150px]'>{d.product}</td>
                  <td className='flex justify-start w-[150px] text-[18px]'>
                    <Link to={`/admin/updatecategory/${d.id}`} className='mr-[10px] rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                      Edit
                    </Link>
                    <button className='rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600' onClick={e => handleDelete(d.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex justify-between item-center w-[160vh] mt-[20px] text-[14px] text-[gray] font-medium'>
          <p>0 of 7 Selected</p>

          {/* Pagination */}
          <div className="mt-4 flex items-center">
            <nav className="w-full" aria-label="Page navigation example">
              <ul className="flex items-center space-x-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-4 h-4 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 6 10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white rounded-lg border border-[#EC6E45] bg-[#FF9900] hover:bg-[#EC6E45] dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-4 h-4 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 6 10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Pagination end */}
          
          <div className='text-black'>
            <button className='w-[100px] bg-[#F0F0F0] mr-[20px] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">previous</button>
            <button className='w-[100px] bg-[#F0F0F0] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">Next</button>
          </div>
        </div>
      </div>
  )

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if(confirm) {
      axios.delete('http://localhost:8000/category/'+id)
      .then(res =>{
        alert("Record Deleted");
        navigate('/admin/allcategory')
      })
    }
  }

}

export default AllCategory