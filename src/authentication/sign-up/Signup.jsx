import { useState } from "react";
import ProgressBar from "../../component/Progressbar";
import PersonalData from "./PersonalData";
import OrganizationData from "./OrganizationData";
import Password from "./Password";
import logo from "../../assets/images/logo.png";

const Signup = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handlePrev = () => setStep((prevStep) => prevStep - 1);
  return (
    <section className='w-full h-full bg-primary-100 lg:p-10 sm:p-5'>
        <section className='w-full h-full bg-white rounded-lg sm:p-5'>
            <div className="w-full flex lg:flex-row sm:flex-col items-center justify-between">
                <img src={logo} alt="pluto-space-sales" />
                <div className="w-40">
                    <ProgressBar step={step}/>
                </div>
            </div>
            <div className="lg:w-[50%] sm:w-full h-full mx-auto mt-5">
                {step === 1 && <PersonalData next={handleNext}/>}
                {step === 2 && <OrganizationData next={handleNext} prev={handlePrev}/>}
                {step === 3 && <Password prev={handlePrev}/>}
            </div>
        </section>
    </section>
  )
}

export default Signup
