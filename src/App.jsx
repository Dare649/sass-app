import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import ForgortPassword from "./authentication/ForgotPassword";
import Customers from "./pages/customers/Customers"
import Navigation from "./component/Navigation";
import ViewCustomers from "./pages/customers/ViewCustomers";
import Products from "./pages/products/Products";
import Sales from "./pages/sales/Sales";
import Report from "./pages/report/Report";
import Settings from "./pages/Settings";
import Expenses from "./pages/expenses/Expenses";
import ViewProduct from "./pages/products/ViewProduct";
import ViewSales from "./pages/sales/ViewSales";
import Dashboard from "./pages/Dashboard";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route element={<Navigation/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/view-customers/:id" element={<ViewCustomers/>}/>
          <Route path="/view-product/:id" element={<ViewProduct/>}/>
          <Route path="/view-sales/:id" element={<ViewSales/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
