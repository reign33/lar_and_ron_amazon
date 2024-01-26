import React from 'react'
import { FaLock } from "react-icons/fa";


const CheckoutData = () => {

  return (
    <>
    <div className='flex border border-gray-400 bg-gray-100 h-[10vh] items-center justify-between px-[25vh]'>
        <div><img className='w-[20vh] justify-items-start' src="/amazon-logo-transparent.png" alt="Amazon-Logo" /></div>
        <div className='font-medium text-[30px]'>Checkout</div>
        <FaLock className='text-[gray] text-[20px]'/>
    </div>

    <div className='flex justify-evenly w-[180vh] h-[85vh] mt-[20px]'>
        <div>
            <p className='font-medium mb-[3px] text-[20px] text-orange-500'>Enter a new address</p>
            <div className='w-[90vh] h-[80vh] border border-gray-400 rounded-lg pl-[20px]'>
                <p className='text-[25px] font-medium mb-[3px]'>Add a new address</p>
                <div className='flex justify-between items-center bg-teal-100 border-[2px] border-[teal] px-[15px] py-[10px] w-[75vh] rounded-xl mb-[3px]'>
                    <p className='font-medium text-[14px]'>Save time your current location.</p>
                    <button className='bg-orange-400 border-[orange] border-[2px] rounded-xl active:bg-gray-300 px-[5px] py-[3px] font-medium'>
                        Autofill
                    </button>
                </div>
           
            <div>
              <p className='font-medium'>Country/Region</p>
              <select
              className="p-2 bg-gray-100 text-[teal] border text-xs xl:text-sm rounded-lg w-[75vh] font-bold mb-[3px]"
              >
              <option>United States</option>
              <option>Beijing China</option>
              <option>North Korea</option>
              <option>Vietnam</option>
              <option>Russia</option>
              <option>Afghanistan</option>
              <option>Europe</option>
              </select>
            </div>

            <div>
                <p className='font-medium'>Full name "First and Last name"</p>
                <input className='border-[2px] border-gray-400 rounded-lg py-[3px] w-[75vh] mb-[3px]' type="text" placeholder='Enter Full name'  />
            </div>
            <div>
                <p className='font-medium'>Phone Number</p>
                <input className='border-[2px] border-gray-400 rounded-lg py-[3px] w-[75vh]' type='tel' placeholder='Enter Phone number'  />
                <p className='mb-[3px]'>May be used to assist delivery</p>
            </div>
            <div>
                <p className='font-medium'>Address</p>
                <input className='border-[2px] border-gray-400 rounded-lg py-[3px] w-[75vh] mb-[3px]' type="text" placeholder='Street address or P.O. Box'  />
                <input className='border-[2px] border-gray-400 rounded-lg py-[3px] w-[75vh] mb-[3px]' type="text" placeholder='Apt, suite, unit, building, floor, etc.'  />
            </div>

            <div className='flex justify-between w-[75vh] mb-[3px]'>
                <div>
                    <p className='font-medium'>City</p>
                    <input className='border-[2px] border-gray-400 rounded-lg py-[3px]' type="text"/>
                </div>
                <div>
                    <p className='font-medium'>State</p>
                    <select className='border-[2px] border-gray-400 rounded-lg py-[3px] font-bold text-[teal]' name="" id="">
                        <option value="">Select</option>
                        <option value="">Washington</option>
                        <option value="">kansas</option>
                        <option value="">Utah</option>
                        <option value="">Arizona</option>
                        <option value="">New Mexico</option>
                        <option value="">Missouri</option>
                        <option value="">Lowa</option>
                        <option value="">Alabama</option>
                    </select>
                </div>
                <div>
                    <p className='font-medium'>Zip Code</p>
                    <input className='border-[2px] border-gray-400 rounded-lg py-[3px]' type="text" maxLength='6'/>
                </div>
            </div>

            <div className='flex flex-row items-center mb-[20px]'>
                <input className='mr-[5px]' type='checkbox'/>
                <p className='font-medium'>Make this my default address</p>
            </div>

            <button className='bg-orange-400 border-[orange] border-[2px] rounded-xl active:bg-gray-300 px-[5px] py-[3px] font-medium'>
                        Use this adress
                    </button>


            </div>
        </div>

        <div className='w-[40vh] h-[50vh] border border-gray-400 bg-gray-100 rounded-xl px-[10px]'>
            <div className='bg-yellow-400 border-[yellow] border-[2px] rounded-xl px-[5px] py-[3px] font-medium text-center m-[10px]'>Use this address</div>
            <p className='text-[12px] border border-b-gray-400 text-center'>Choose a shipping address to continue checking out. You'll still have a chance to review and edit your order before it's final.</p>
            <p className='font-bold text-[14px] my-[10px]'>Order Summary</p>
            <div className='flex justify-between'><p>Items:</p> <p>--</p></div>
            <div className='flex justify-between'><p>Shipping and handling:</p><p>--</p></div>
            <div className='flex justify-between'><p>Total Before Tax:</p><p>--</p></div>
            <div className='flex justify-between'><p>Estimated Tax to be collected:</p><p>--</p></div>
            <div className='flex justify-between border border-b-gray-400'>
            <p className='font-bold text-[14px] my-[10px] text-[red]'>Order Total:</p>
            <p className='font-bold text-[14px] my-[10px] text-[red]'>$496.86</p>
            </div>
            <div className='text-[12px] font-medium'><p>How are shipping cost calculated?</p></div>
            
        </div>
    </div>



    </>
  )
}

export default CheckoutData