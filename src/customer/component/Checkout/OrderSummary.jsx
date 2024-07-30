import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from "@mui/material";
import CartItem from '../Cart/CartItem';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='p-5 bg-white shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div className="min-h-screen ">
      <div className="lg:grid grid-cols-3 lg:px-16 py-8 relative">
        <div className="col-span-2 space-y-6">
          {[1].map((item)=><CartItem/>)}
          
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
            <Button onClick={()=>{navigate("/checkout?step=3")}} variant="contained" className="w-full mt-20" sx={{px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd"}}>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary