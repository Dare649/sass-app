import { sideLink } from "./dummy";
import { NavLink } from "react-router-dom";


const Sidebar = ({children}) => {
  return (
    <section className="w-full h-screen flex flex-row">
      <div className="lg:w-[20%] sm:w-0 h-full">
        <div className="p-3">
            <div className="w-full mt-10">
                {
                    sideLink.map((item, id)=>(
                        <NavLink to={item.path} className={`flex flex-row items-center gap-x-2 text-md font-bold capitalize py-5 hover:bg-primary-100/50 active:bg-primary-100/50 rounded px-3 hover:text-primary-200 active:text-primary-200`}>
                            <h4>{item.icon}</h4>
                            <h4>{item.title}</h4>
                        </NavLink>
                    ))
                }
                
            </div>
        </div>
      </div>
      <div className="lg:w-[80%] sm:w-full bg-primary-50 lg:p-10 sm:p-3 h-screen">
        <div className="bg-white w-full h-full lg:p-5 sm:p-2">
            {children}
        </div>
      </div>
    </section>
  )
}

export default Sidebar
