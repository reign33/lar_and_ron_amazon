import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';

function SignUpPage() {
  const [forms, setForms] = useState([]);
  const navigate=useNavigate();

  function goToHomePage(){
    navigate('/');
  }

  function goToLogIn(){
    navigate('/login');
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setForms((prevForms) => {
      const newdata = [...prevForms, data];
      localStorage.setItem("forms", JSON.stringify(newdata));
      navigate('/login');
      console.log("forms update", newdata);
      return newdata;
    });
  };

  useEffect(() => {
    const saveForms = JSON.parse(localStorage.getItem('forms')) || [];
    setForms(saveForms);
  }, []);

  return (
    <div className="m-0 p-0 box-border">
    <div className="container w-1/2 m-auto">
        <div className="logo w-32 block m-auto">
            <img className="m-3" src="/amazon-logo-transparent.png" onClick={goToHomePage} alt="amazon logo"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginform w-1/2 m-auto border-[2px] rounded-lg border-gray-200 p-[20px]">
            <h1 className="font-sans text-black font-normal text-3xl mb-2">Create your account</h1>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]"> Your email </p>
            
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="text" name="username" id="1" placeholder="Enter primary email"
                autoComplete='form1'

                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                />

                <div className='text-[red] text-[10px]'>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
                </div>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]">
              Password </p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="password" id="2" placeholder="Enter password"
                autoComplete='form1'

                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 16,
                  noData: null
                })}
                />
        
                <div className='text-[red] text-[10px]' >
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                "Entered password is less than 5 characters"}
                {errors.password?.type === "maxLength" &&
                "Entered password is more than 16 characters"}
                </div>
                 <p>{JSON.stringify(register)}</p>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]"> Confirm password</p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type='password' name="confirm-password" id="3" placeholder='Confirm Password'
                autoComplete='form1'
                
                {...register("confirmpass", {
                  required: true,
                  minLength: 5,
                  maxLength: 16,
                  noData: null
                })}
                />

                <div className='text-[red] text-[10px]' >
                {errors.confirmpass?.type === "required" && "Password confirm is required"}
                {errors.confirmpass?.type === "minLength" &&
                "Entered password is less than 5 characters"}
                {errors.confirmpass?.type === "maxLength" &&
                "Entered password is more than 16 characters"}
                </div>
            
            <p className="text-xs font-medium text-gray-800 pt-[20px]">
              <input className='mr-[5px]' type="checkbox"/>
                I accept the 
                <a className="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]" onClick={goToLogIn}>Terms and Conditions</a></p>
        </div>

        <div className="lower mt-6 w-1/2 m-auto ">
            <button className="mt-[14px] rounded-lg py-[5px] text-sm font-medium w-[100%] 
            bg-[#FF9900] active:bg-[gray] active:text-white" type='submit'>Create an account</button>
        </div>
        </form>

        <div className="lowest container my-6 mx-auto border-t-[1px] border-gray-300 rounded-none text-center ">
            <div className="mx-auto w-1/2">
                <p className=" mt-5 mx-auto text-xs font-medium">Already have an account?<a
                        className="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]" onClick={goToLogIn}>Login here</a>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUpPage