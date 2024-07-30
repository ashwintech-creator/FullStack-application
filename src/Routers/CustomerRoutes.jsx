import React from 'react'
import HomePage from '../customer/Pages/HomePage'
import Cart from '../customer/component/Cart/Cart'
import NavigationBar from '../customer/component/Navigation/Navigation'
import Product from '../customer/component/Product/Product'
import ProductDetails from '../customer/component/ProductDetails/ProductDetail'
import { Routes,Route } from "react-router-dom";
import Checkout from '../customer/component/Checkout/Checkout'
import Footer from '../customer/Footer/Footer'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <NavigationBar/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes