// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import './App.css';
// import Product from './customer/component/Product/Product';
// import NavigationBar from "./customer/component/Navigation/Navigation";
// import HomePage from './customer/Pages/HomePage';
// import ProductDetails from './customer/component/ProductDetails/ProductDetail';
// import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Cart from './customer/component/Cart/Cart';
import Checkout from "./customer/component/Checkout/Checkout";
import { Routes,Route } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
// import HomesectionCarousel from './customer/component/Homesection/HomesectionCarousel';
const App = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}/>

      </Routes>
    </div>
  );
};

export default App;
