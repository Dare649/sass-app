import { FaLongArrowAltLeft } from "react-icons/fa";
import { industries } from "../../component/dummy";


const OrganizationData = ({next, prev}) =>{
    return(
        <div className="w-full h-full">
            <FaLongArrowAltLeft onClick={prev} className="text-primary-100 cursor-pointer mb-5" size={25}/>
            <h2 className="lg:text-2xl sm:text-xl font-bold first-letter:capitalize">organization account</h2>
            <p className="text-sm font-medium mt-1">set up an account for your business</p>
            <form className="w-full mt-10"> 
                <div className="flex lg:flex-row sm:flex-col w-full gap-x-10 gap-y-5 mb-3 items-center">
                    <div className="name sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">first name</h2>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="Enter your business name"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                    <div className="industryType sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">industry type</h2>
                        <select 
                            name="industryType" 
                            id="industryType"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        >
                            <option>select industry type</option>
                            {
                                industries.map((item, id)=>(
                                    <option key={id}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="w-full ">
                    <textarea 
                        name="description" 
                        id="description"
                        className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        placeholder="Describe your business"
                    >

                    </textarea>
                </div>
                <h2 className="text-xl font-bold capitalize">contact</h2>
                <div className="contact flex lg:flex-row sm:flex-col w-full gap-x-10 gap-y-5 mb-3 items-center">
                    <div className="email sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">email</h2>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            placeholder="Enter your email"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                    <div className="phone sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">phone</h2>
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone"
                            placeholder="Enter your phone number"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                </div>
                <h2 className="text-xl font-bold capitalize mb-3">address</h2>
                <div className="address flex lg:flex-row sm:flex-col w-full gap-x-10 gap-y-5 mb-3 items-center">
                    <div className="street sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">street</h2>
                        <input 
                            type="text" 
                            name="street" 
                            id="street"
                            placeholder="Enter your street address"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                    <div className="city sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">city</h2>
                        <input 
                            type="text" 
                            name="city" 
                            id="city"
                            placeholder="Enter your city number"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                </div>
                <div className="address flex lg:flex-row sm:flex-col w-full gap-x-10 gap-y-5 mb-3 items-center">
                    <div className="country sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">country</h2>
                        <input 
                            type="text" 
                            name="country" 
                            id="country"
                            placeholder="Enter your country address"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                    <div className="state sm:w-full lg:w-[50%]">
                        <h2 className="font-bold capitalize">state</h2>
                        <input 
                            type="text" 
                            name="state" 
                            id="state"
                            placeholder="Enter your state number"
                            className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
                        />
                    </div>
                </div>
                <div className="lg:w-[50%] sm:w-full flex items-center justify-center mx-auto my-10">
                    <button
                        type="button"
                        onClick={next}
                        className="bg-primary-100 text-white text-center capitalize hover:border-2 hover:border-primary-100 w-full hover:text-primary-100 rounded-lg h-12 hover:bg-transparent font-bold"
                    >
                        continue
                    </button>
                </div>
            </form>
        </div>
    )
};


export default OrganizationData;