import React from 'react'
import SideBarPage from './SideBarPage';

function AddProduct() {

  function handlesubmit(e){
    e.preventDefault();
  } 

  return (
        <div className='flex flex-col justify-evenly items-start w-[170vh] h-[80vh] border border-[#DDDDDD] text-[14px] rounded-xl mt-[10px] ml-[30px] pl-[30px] shadow-xl mb-[10px]'>
          <p className='text-[25px] font-medium'>Add Product</p>

          <div className='flex justify-between items-center w-[160vh]'>  
            <div>
              <p className='font-medium'>Product Name</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]'
               type='text' name="" placeholder="Enter Product Name" id="" />
            </div>
            <div>
              <p className='font-medium'>Product Description</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]' 
              type='text' name="" placeholder="Enter Product Description" id="" />
              <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
              font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]'>Add</button>
            </div>
          </div>


          <div className='flex justify-between items-center w-[160vh]'>  
            <div>
              <p className='font-medium'>Sales Price</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]'
               type='text' name="" placeholder="Enter Sales Price" id="" />
            </div>
            <div>
              <p className='font-medium'>Discounted Price</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]' 
              type='text' name="" placeholder="Enter Discounted Price" id="" />
              <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
              font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]'>Add</button>
            </div>
          </div>

          <div className='flex justify-between items-center w-[160vh]'>  
            <form>
              <p className='font-medium'>Variant</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]'
               type='text' name="" placeholder="Enter Product Variant" id="" />
              <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
              font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]' type='submit'> Add</button>
            </form>
            <form>
              <p className='font-medium'>Add Colors</p>
              <input className='rounded-lg border border-[gray] mr-[10px] w-[65vh] py-[3px] pl-[10px]' 
              type='text' name="" placeholder="Enter Product Variant" id="" />
              <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
              font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]' type='submit'>Add</button>
            </form>
          </div>

          <div className='flex justify-between items-center pr-[35vh] w-[160vh] h-[10vh]'>
            <div>
              <p className='font-medium'>Select a category</p>
              <select
              className="p-2 bg-gray-100 text-black border text-xs xl:text-sm rounded-lg w-[40vh]"
              >
              <option>Smartphones</option>
              <option>Phone Accessories</option>
              <option>Foods</option>
              <option>Fashion</option>
              <option>Computers</option>
              <option>Laptops</option>
              <option>Appliances</option>
              </select>
            </div>

            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
            font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]'>Add Image</button>
            

          </div>
      
          <div>
          <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
          font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]'>Update Product</button>
          </div>
         </div>
  )
}

export default AddProduct