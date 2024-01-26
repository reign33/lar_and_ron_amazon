import axios from 'axios';
import React from 'react'
import SideBarPage from './SideBarPage';
import "./addcategory.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const [inputData, setInputData] = useState({
    name: ''
  })
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/category', inputData )
    .then(res => {
      alert("Data Posted Successfully")
      navigate('/admin/allcategory')
    })
  }

  return (
    
    // <div className='flex'>
    //   <SideBarPage />
      <form onSubmit={handleSubmit} action="">
        <div className='flex flex-col justify-evenly items-start w-[80vh] h-[35vh] border border-[#DDDDDD] rounded-xl mt-[30px] ml-[30px] pl-[30px] shadow-xl'>
          <p className='text-[25px]'>Add Category</p>
            <input onChange={e => setInputData({...inputData, name: e.target.value})} className='sample w-[20rem] h-[4rem] rounded-xl border border-[gray] pl-[5px]' type='text' name="" placeholder=" Category name" id="" />
            <button
              className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45] w-[200px]'
              type="submit"
            >
              Add Category
            </button>
        </div>
      </form>
    // </div>
  )
}

export default AddCategory