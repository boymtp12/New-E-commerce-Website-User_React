import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList";
import ProductsDetails from "../pages/ProductsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/CartPage";
import CustomerInfo from "../pages/Dashboard/CustomerInfo";
import CreateUserForm from "../pages/Dashboard/CreateUserForm";
import ActiveAccount from "../pages/ActiveAccount";
import Checkout from "../pages/Cart/components/Checkout";
import ForgotPassword from "../pages/ForgotPassword";
import Team from "../Admin/scenes/team";
import Dashboard from "../Admin/scenes/dashboard";
import Invoices from "../Admin/scenes/invoices";
import Contacts from "../Admin/scenes/contacts";
import Bar from "../Admin/scenes/bar";
import Form from "../Admin/scenes/form";
import Line from "../Admin/scenes/line";
import Pie from "../Admin/scenes/pie";
import FAQ from "../Admin/scenes/faq";
import Geography from "../Admin/scenes/geography";
import ProductsCategory from "../pages/Products/ProductsCategory";
import RouterTest from "../pages/RouteTest";
//import Calendar from "../Admin/scenes/calendar";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/products-by-category/:categoryName/:categoryId" element={<ProductsCategory />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/info-user" element={<CustomerInfo />} />
        <Route path="/update-info-user" element={<CreateUserForm />} />
        <Route path="/active-user" element={<ActiveAccount/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/test" element={<RouterTest />} />
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/invoices" element={<Invoices />} />
        <Route path="/admin/form" element={<Form />} />
        <Route path="/admin/bar" element={<Bar />} />
        <Route path="/admin/pie" element={<Pie />} />
        <Route path="/admin/line" element={<Line />} />
        <Route path="/admin/faq" element={<FAQ />} />
        <Route path="/admin/geography" element={<Geography />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
