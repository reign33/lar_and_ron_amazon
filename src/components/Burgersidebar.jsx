import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { FaUserCircle } from "react-icons/fa";

function Burgersidebar({tprop, stprop, Logout}) {
  return (
          <Sidebar backgroundColor="white" width="40vh" className="text-[14px] shadow-2xl shadow-black"
           onBackdropClick={() => stprop(false)} toggled={tprop} breakPoint='all'>
            
            <div className="flex w-[40vh] h-[8vh] bg-amazonclone-light_blue text-center font-bold text-white items-center fixed z-10">
                <FaUserCircle className="text-[28px] mr-[10px] ml-[20px]"/> HELLO, USER</div>
            <div className="font-bold ml-[20px] mb-[15px] mt-[10vh]">Digital Content & Devices</div>
            
            <Menu className="border-b-[1px] border-[gray]">
                <MenuItem > Amazon Music</MenuItem>
                <MenuItem > Kindle e-readers & Books</MenuItem>
                <MenuItem > Amazon Appstore</MenuItem>
            </Menu>
            <div className="font-bold ml-[17px] my-[15px]">Shop By Department</div>
            <Menu className="border-b-[1px] border-[gray]">
                <MenuItem> Electronics</MenuItem>
                <MenuItem> Computers</MenuItem>
                <MenuItem> Smart Home</MenuItem>
                <MenuItem> Arts & Crafts</MenuItem>
                <SubMenu label="See All">
                    <MenuItem>Automotive</MenuItem>
                    <MenuItem>Baby</MenuItem>
                    <MenuItem>Beauty and personal care</MenuItem>
                    <MenuItem>Womens Fasion</MenuItem>
                    <MenuItem>Mens Fasion</MenuItem>
                    <MenuItem>Health and Household</MenuItem>
                    <MenuItem>Home and Kitchen</MenuItem>
                </SubMenu>
            </Menu>
            <div className="font-bold ml-[17px] my-[15px]">Programs & Features</div>
            <Menu className="border-b-[1px] border-[gray]">
                <MenuItem> Gift Cards</MenuItem>
                <MenuItem> Shop By Interest</MenuItem>
                <MenuItem> Amazon Live</MenuItem>
                <MenuItem> International Shopping</MenuItem>
                <SubMenu label="See All">
                    <MenuItem>Amazon Second Chance</MenuItem>
                </SubMenu>
            </Menu>
            <div className="font-bold ml-[17px] my-[15px]">Help & Settings</div>
            <Menu className="border-b-[1px] border-[gray]">
                <MenuItem> Your Account</MenuItem>
                <MenuItem> English</MenuItem>
                <MenuItem> United States</MenuItem>
                <MenuItem> Customer Service</MenuItem>
                <MenuItem onClick={Logout}> Sign Out</MenuItem>
            </Menu>
        </Sidebar>
  )
}

export default Burgersidebar