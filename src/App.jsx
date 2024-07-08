import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signin from "./authentication/Signin";
import Signup from "./authentication/sign-up/Signup";
import VerifyEmail from "./authentication/verify/VerifyEmail";
import VerifiedEmail from "./authentication/verify/VerifiedEmail";
import ForgortPassword from "./authentication/ForgotPassword";
import Users from "./pages/users/Users"
import Navigation from "./component/Navigation";
import ViewUsers from "./pages/users/ViewUsers";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/verified-email" element={<VerifiedEmail/>}/>
        <Route path="/forgot-password" element={<ForgortPassword/>}/>
        <Route element={<Navigation/>}>
          <Route path="/users" element={<Users/>}/>
          <Route path="/view-user" element={<ViewUsers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
