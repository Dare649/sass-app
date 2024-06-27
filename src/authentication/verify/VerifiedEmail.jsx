import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"

const VerifiedEmail = () => {
  return (
    <section className='w-full h-screen bg-primary-100 lg:p-10 sm:p-5'>
        <div className='w-full h-full bg-white rounded-lg sm:p-5'>
            <img src={logo} alt="pluto-space-sales" />
            <div className="flex flex-col items-center justify-center lg:mt-40">
                <h2 className="lg:text-3xl sm:text-lg font-semibold capitalize mb-3">email verified!</h2>
                <p className="first-letter:capitalize text-sm leading-relaxed tracking-wide font-medium text-center">congratulations you can now <Link to={"/sign-in"} className="text-primary-100 font-bold">login</Link> to your account. </p>
            </div>
            
        </div>
    </section>
  )
}

export default VerifiedEmail
