import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProducts from "./pages/admin/manage-product/ManageProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUser from "./pages/admin/manage-user/ManageUser";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Login />} />

        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="manageProduct" element={<ManageProducts />} />
            <Route path="manageUser" element={<ManageUser />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </>
  );
};

export default App;
