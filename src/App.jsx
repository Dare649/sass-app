import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signin from "./authentication/Signin";
import Signup from "./authentication/sign-up/Signup";
import VerifyEmail from "./authentication/verify/VerifyEmail";
import VerifiedEmail from "./authentication/verify/VerifiedEmail";
import ForgortPassword from "./authentication/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/verified-email" element={<VerifiedEmail/>}/>
        <Route path="/forgot-password" element={<ForgortPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
