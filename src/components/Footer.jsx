import React from 'react'
import "./footer.css";


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="custom-footer min-w-[1000px]">
            <div className='bg-[#EAEDED] text-center py-[10px] font-medium active:font-bold'><a href="#">Back to Top</a></div>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to Know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                    <p>Amazon Devices</p>
                </div>
                <div className="footr_details_one">
                    <h3>Make money with Us</h3>
                    <p>Sell products on Amazon</p>
                    <p>Sell on Amazon business</p>
                    <p>Sell apps on amazon</p>
                    <p>Become an affiliates</p>
                    <p>Advertise Your Products</p>
                    <p>Self publish with Us</p>
                    <p>Host an Amazon hub</p>
                    <p>See make more money with Us</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Amazon Payment Products</h3>
                    <p>Amazon business card</p>
                    <p>Shop with points</p>
                    <p>Reload your Balance</p>
                    <p>Amazon currency Converter</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Let Us Help You</h3>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage your content and devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
            <div className="lastdetails topborder">
                <img className='object-contain h-20 w-40 ...' src="/amazon_PNG25.png" alt="logo" />
                <div>
                <button className="btn_color">English</button>
                <button className="btn_color">USD-U.S. Dollar</button>
                <button className="btn_color">United States</button>
                </div>
            </div>
            <div className="div_footer">
                <div className="footer_detail_two">
                    <div className="f_detail_t">
                        <p>Amazon Music</p>
                        <p>Streams Millions</p>
                        <p>of songs</p>
                    </div>
                    <div className="f_detail_t">
                        <p>Amazon Advertizing</p>
                        <p>Find, Attract, and</p>
                        <p>engage customers</p>
                    </div>
                    <div className="f_detail_t">
                        <p>6pm</p>
                        <p>Score deals</p>
                        <p>on fashion brands</p>
                    </div>
                    <div className="f_detail_t">
                        <p>AbeBooks</p>
                        <p>Books, Arts and</p>
                        <p>Collectibles</p>
                    </div>
                    <div className="f_detail_t">
                        <p>ACX</p>
                        <p>Audiobook Publishing</p>
                        <p>Made Easy</p>
                    </div>
                    <div className="f_detail_t">
                        <p>Sell on Amazon</p>
                        <p>Start a selling</p>
                        <p>Accounts</p>
                    </div>
                    <div className="f_detail_t">
                        <p>Amazon Business</p>
                        <p>Everything For</p>
                        <p>Your Business</p>
                    </div>
                </div>
            <p className='footerx'>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            <p>Amazon Clone Project e-Commerce Created By Larry Concepcion & Ron Cley Fulgado</p>
            <p>Guided By Sir.John Michael Baldonado Kodego Instructor</p>
            <p>Kodego Runners -WD88P August 2023 Batch</p>
            </div>
        </footer>
    )
}

export default Footer