import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import ForgortPassword from "./authentication/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/forgot-password" element={<ForgortPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
