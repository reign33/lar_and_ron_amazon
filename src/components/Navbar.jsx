import {ShoppingCartIcon, MapPinIcon} from "@heroicons/react/24/outline";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Burgersidebar from "./Burgersidebar";


function Navbar() {
    const cart = useSelector((state) => state.cart.productsNumber);
    const navigate=useNavigate();
    function goToLogIn(){
        navigate('/login');
    }
    function goToSignUp(){
        navigate('/signup');
    }
    function goToHomePage(){
        navigate('/')
    }
    const Logout = () => {
      navigate('/login');
    }

    const [toggled, setToggled] = useState(false);

  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'> 
            <div className='flex items-center m-4'>
                <div className='border_color pr-4 pl-1'>
                    <img className='h-[30px] m-2 cursor-pointer' src="/amazon_logo.png" onClick={goToHomePage}/>
                </div>

                <div className="border_color flex">
                    <button className='pl-4'>
                        <MapPinIcon className="h-[20px]"/>
                    </button> 
                    <div className='pr-4 pl-1 cursor-pointer'>   
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:text-base font-bold'>Philippines</div>
                    </div>
                </div>

            </div>
            <div className='flex grow relative items-center'>
                <Search/>
            </div>
            <div className='flex items-center m-4'>
                {/* dropdown menu*/}
                <div className="dropdown relative inline-block">
                    <div className='border_color px-4 cursor-pointer'>
                        <div className='text-xs xl:text-sm'>Hello, sign in</div>
                        <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                    </div>
                        {/* dropdown content */}
                        <div className="dropdown_content hidden absolute bg-white shadow-2xl shadow-black z-10 h-[40vh] w-[330px] rounded-lg">
                            <div className="sign_in text-center p-[15px] mx-[15px] text-black text-[13px]">
                                <button className="w-[250px] bg-amazonclone-yellow rounded text-[13px] text-black active:bg-[#c59456] py-[5px]" onClick={goToLogIn}>Sign In</button>
                                <p>New customer? <a className="text-[#0066c0] cursor-pointer hover:underline hover:text-red-700 font-medium text-[13px]"
                                    onClick={goToSignUp}>Start here.</a></p>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="h-[25vh] mt-[10px] text-[13px] text-black">
                                    <h4 className="font-medium">Your List</h4>
                                    <p><a className="hover:text-[#FF9900]" href="">Create a list</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Find a list or Registry</a></p>
                                </div>

                                <div className="right_content h-[25vh] mt-[10px] text-[13px] text-black pl-[10px]">
                                    <h4 className="font-medium">Your Account</h4>
                                    <p><a className="hover:text-[#FF9900]" href="#">Account</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="#">Orders</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="#">Recommendations</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="#">Browsing History</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="#">Watchlist</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="#" onClick={Logout}>Logout</a></p>
                                </div>
                            </div> 
                        </div>
                    
                </div>


                <div className='border_color pr-4 pl-4 cursor-pointer'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <Link to={"/checkout"}>
                    <div className='border_color flex pr-3 pl-3 cursor-pointer'>
                        <ShoppingCartIcon className="h-[48px]"/>
                        <div className="relative">
                            <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                                {cart}
                            </div>
                        </div>
                        <div className="mt-7 text-xs xl:text-sm font-bold">
                            Cart
                        </div>
                    </div>
                </Link>

            </div>
        </div>

        {/* Burger All */}
        <div className="flex bg-amazonclone-light_blue text-white text-xs xl:text-sm pl-6">
            <div onClick={()=> setToggled(!toggled)} className='flex border_color1 cursor-pointer'>
            <GiHamburgerMenu className="mt-[3px] mr-[5px]" />All</div>
            <div className='border_color1 cursor-pointer'>Today's Deals</div>
            <div className='border_color1 cursor-pointer'> Buy Again</div>
            <div className='border_color1 cursor-pointer'> Customer Service</div>
            <div className='border_color1 cursor-pointer'>Registry</div>
            <div className='border_color1 cursor-pointer'>Gift Cards</div>
            <div className='border_color1 cursor-pointer'>Sell</div>
        </div>
        {/*Passing the data using props */}
         <Burgersidebar tprop={toggled} stprop={setToggled} Logout={Logout}/> 
    </header>
    
  )
}

export default Navbar