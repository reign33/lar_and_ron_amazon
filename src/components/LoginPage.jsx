import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [details, setDetails] = useState({email:"", password:""});

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
      }
    const useronly = {
        email: "user@user.com",
        password: "user123"
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(details);
        if(details.email == adminUser.email && details.password == adminUser.password){
            navigate('/admin/dashboard')
        } else if(details.email == useronly.email && details.password == useronly.password) {
            navigate('/')
        } else{
            setDetails({email:"", password:""});
        }
    }

    const navigate = useNavigate();
    function handleBackToSignUp(){
        navigate('/signup');
    }
    function goToHomePage(){
        navigate('/');
    }

  return (
    <div className="m-0 p-0 box-border">
    <div className="container w-1/2 m-auto">
        <div className="logo w-32 block m-auto">
            <img className="m-3" src="/amazon-logo-transparent.png" onClick={goToHomePage} alt="Amazon Logo" srcSet="" />
        </div>
        {/* <!-- logo end --> */}
        <div className="loginform w-1/2 m-auto border-[2px] rounded-lg border-gray-200 p-[20px]">
            <h1 className="font-sans text-black font-normal text-3xl mb-2">Sign In</h1>

            <form onSubmit={submitHandler}>
            <p className="font-semibold text-sm my-[10px]">
                Email or mobile phone number</p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="text" name="email"
                onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                <p className="font-semibold text-sm my-[10px]">Password</p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="password" id="password"
                value={details.password}
                onChange={e => setDetails({...details, password: e.target.value})}
                />

            <button className="mt-[12px] border rounded-lg py-[5px] text-sm w-[100%] bg-[#f8db02] hover:bg-[#ebd004]" type="submit">
                Continue
            </button>
            </form>

            <p className="text-xs font-medium mt-3 mb-2 text-gray-800 p-1">
                By continuing, you agree to Amazon's 
                <a className="cursor-pointer hover:text-red-700 hover:underline text-[#0066c0]" > Contitions of
                    Use </a>
                and
                <a className="cursor-pointer hover:text-red-700 hover:underline text-[#0066c0]" > Privacy Notice</a>.
            </p>
            <span className="text-[8px] p-1">►</span>
            <a className="text-[#0066c0] cursor-pointer hover:underline hover:text-red-700 font-normal text-sm"> Need Help?</a>
        </div>
        <div className="lower mt-6 w-1/2 m-auto ">
            <p className="m-auto max-w-fit text-gray-500 text-xs ">
                New to Amazon
            </p>
            <button
                className="mt-[14px] border-gray-300 border rounded-lg py-[5px] text-sm w-[100%] hover:bg-gray-50 "
                onClick={handleBackToSignUp}>Create
                your Amazon account</button>
        </div>

        {/* <!-- lowest container --> */}
        <div className="lowest container my-6 mx-auto border-t-[1px] border-gray-300 rounded-none ">
            <div className="mx-auto w-1/2 text-center">
                <p className=" mt-5 mx-auto text-xs font-medium"> <a
                        className="cursor-pointer m-4 hover:text-red-700 hover:underline text-[#0066c0]">Contidions
                        of Use</a> <a className="cursor-pointer m-4 hover:text-red-700 hover:underline text-[#0066c0]">Privacy Notice</a><a
                        className="cursor-pointer  m-4  hover:text-red-700 hover:underline text-[#0066c0]">Help</a>
                </p>
            </div>
            <div className="mx-auto w-1/2">
                <p className=" my-3 mx-auto max-w-fit text-gray-500 text-xs">&copy; 1996-2023, Amazon.com, Inc. or its
                    affiliates</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default LoginPage