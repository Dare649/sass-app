import { useState } from "react"
import signin from "../assets/images/signin.jpeg";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";

const Signin = () => {
  const [password, setPassword] = useState("password");



  const handlePassword = () =>{
    setPassword((prev)=>!prev);
  }
  return (
    <section className='w-full h-screen bg-white'>
      <div className='w-full h-full py-5 flex flex-row'>
        <div className='lg:w-[50%] sm:w-0 bg-primary-100'>
          <div className='w-full h-full hidden lg:flex '>
            <div className="flex flex-col items-center justify-center mx-36">
        
            </div>
          </div>
        </div>
        <div className='lg:w-[50%] sm:w-full flex flex-col items-center justify-center px-5'>
          <div className="my-5">
            <h2 className="font-bold text-4xl capitalize">welcome back!</h2>
            <p className="font-medium first-letter:capitalize">login to your account to get started</p>
          </div>
          <form className="lg:w-[50%] sm:w-full">
            <div className="w-full mb-5">
              <h2 className="font-bold capitalize">email</h2>
              <input 
                type="text"
                placeholder="Enter your email"
                className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
              />
            </div>
            <div className="w-full mb-5 ">
            <h2 className="font-bold capitalize">password</h2>
              <div className="flex items-center gap-x-2 outline-none border-2 border-neutral-1 rounded-lg p-3 focus-within:border-primary-100">
                <input 
                  type={password ? "text": "password"}
                  placeholder="Enter your password"
                  className="outline-none border-none w-full"
                />
                <span onClick={handlePassword} className="font-bold text-neutral-1 cursor-pointer">
                  {
                    password ? <GoEye size={20}/>:<GoEyeClosed size={20}/>
                  }
                </span>
              </div> 
            </div>
            <Link to={"/sign-up"} className="text-primary-100 font-bold first-letter:capitalize flex float-right mb-10">sign up</Link>
            <Link to={"/customers"} className=" w-full">
              <button
                type="submit"
                className="w-full h-10 bg-primary-100 capitalize text-center text-white font-bold rounded-lg"
              >
                log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signin
