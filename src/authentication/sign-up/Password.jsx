import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Password = ({prev}) => {
    const [password, setPassword] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("confirmPassword");

    const handlePassword = () =>{
        setPassword((prev)=>!prev);
    };

    const handleConfirmPassword = () =>{
        setConfirmPassword((prev)=>!prev);
    };


  return (
    <div className="sm:w-full lg:w-[50%] mx-auto h-screen">
        <FaLongArrowAltLeft onClick={prev} className="text-primary-100 cursor-pointer mb-5" size={25}/>
        <div className="w-full mb-5 lg:mt-40">
            <h2 className="font-bold capitalize">password</h2>
            <div className="flex items-center gap-x-2 outline-none border-2 border-neutral-1 rounded-lg p-3 focus-within:border-primary-100">
                <input 
                type={password ? "text": "password"}
                placeholder="Enter your password"
                className="outline-none border-none w-full"
                />
                <span onClick={handlePassword} className="font-bold text-neutral-1">
                {
                    password ? <GoEye size={20}/>:<GoEyeClosed size={20}/>
                }
                </span>
            </div> 
        </div>
        <div className="w-full mb-5 ">
            <h2 className="font-bold capitalize">confirm password</h2>
            <div className="flex items-center gap-x-2 outline-none border-2 border-neutral-1 rounded-lg p-3 focus-within:border-primary-100">
                <input 
                type={confirmPassword ? "text": "confirmPassword"}
                placeholder="Comfirm your password"
                className="outline-none border-none w-full"
                />
                <span onClick={handleConfirmPassword} className="font-bold text-neutral-1 cursor-pointer">
                {
                    confirmPassword ? <GoEye size={20}/>:<GoEyeClosed size={20}/>
                }
                </span>
            </div> 
        </div>
        <div className=":w-full flex items-center justify-center mx-auto my-10">
            <button
                type="submit"
                className="bg-primary-100 text-white text-center capitalize hover:border-2 hover:border-primary-100 w-full hover:text-primary-100 rounded-lg h-12 hover:bg-transparent font-bold"
            >
                create
            </button>
        </div>
    </div>
  )
}

export default Password
