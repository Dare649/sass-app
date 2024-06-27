import logo from "../../assets/images/logo.png";

const VerifyEmail = () => {
  return (
    <section className='w-full h-screen bg-primary-100 lg:p-10 sm:p-5'>
        <div className='w-full h-full bg-white rounded-lg sm:p-5'>
            <img src={logo} alt="pluto-space-sales" />
            <div className="flex flex-col items-center justify-center lg:mt-40">
                <h2 className="lg:text-3xl sm:text-lg font-semibold capitalize mb-3">verify email</h2>
                <p className="first-letter:capitalize text-sm leading-relaxed tracking-wide font-medium text-center">almost there we've sent a verification link to email@gmail.com you need to verify your email <br /> address and log in to your account.</p>
            </div>
            <div className="flex flex-row items-center justify-center mt-5 gap-x-3">
                <p className="capitalize text-bold ">didn't receive email</p>
                <button className="w-40 rounded-lg bg-blue-600 text-white hover:border-2 hover:border-blue-600 hover:text-blue-600 text-center h-10 capitalize cursor-pointer hover:bg-transparent">
                    resend
                </button>
            </div>
        </div>
    </section>
  )
}

export default VerifyEmail
