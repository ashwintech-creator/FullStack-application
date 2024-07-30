import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout=()=>{
    alert("Checkout button clicked");
    navigate("/checkout?step=1");

  }


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:grid grid-cols-3 lg:px-16 py-8 relative">
        <div className="col-span-2 space-y-6">
          {[1].map((item)=><CartItem />)}
          
        </div>

        <div className="px-5 sticky top-0 h-full mt-5 lg:mt-0">
          <div className="border rounded-lg bg-white p-5 shadow-md">
            <p className="uppercase font-bold text-gray-600 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-5">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹2599</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className=" text-green-600">-₹1300</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className=" text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">₹1299</span>
              </div>
            </div>
            <div>
            <Button onClick={handleCheckout} variant="contained" className="w-full mt-20" sx={{px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd"}}>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
