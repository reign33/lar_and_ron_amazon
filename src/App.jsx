import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { HomePage, SearchResults, ProductPage, Checkout, LoginPage, SignUpPage, Navbar, Footer} from "./components";
import Dashboard from "./admin/Dashboard";
import AllCategory from "./admin/AllCategory";
import UpdateCategory from "./admin/UpdateCategory";
import AddCategory from "./admin/AddCategory";
import ReportCategory from "./admin/ReportCategory";
import AddProduct from "./admin/AddProduct";
import AllProduct from "./admin/AllProduct";
import ReportProduct from "./admin/ReportProduct";
import Order from "./admin/Order";
import CheckoutData from "./components/CheckoutData";
import SideBarPage from "./admin/SideBarPage";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  return (
    <>
      {(!isLogin && !isSignup) && !isAdminRoute && <Navbar />}
      
      <div className={(isLogin&&isSignup) || isAdminRoute ?'flex': ""}>
      {(isLogin&&isSignup) || isAdminRoute && <SideBarPage />}  
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/checkoutdata" element={<CheckoutData/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
                {/* Admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/addcategory" element={<AddCategory/>} />
        <Route path="/admin/updatecategory/:id" element={<UpdateCategory/>} />
        <Route path="/admin/allcategory" element={<AllCategory/>} />
        <Route path="/admin/reportcategory" element={<ReportCategory/>} />
        <Route path="/admin/addproduct" element={<AddProduct/>} />
        <Route path="/admin/allproduct" element={<AllProduct/>} />
        <Route path="/admin/reportproduct" element={<ReportProduct/>} />
        <Route path="/admin/order" element={<Order/>} />
      </Routes>
      </div>
      {(!isLogin && !isSignup) && !isAdminRoute && <Footer />}
    </>
  );
}

export default App;