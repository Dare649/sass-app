import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"

const Navigation = () => {
  return (
    <Sidebar>
      <Outlet/>
    </Sidebar>
  )
}

export default Navigation
