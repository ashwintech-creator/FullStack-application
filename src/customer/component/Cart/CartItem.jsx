import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const pro = [
  {
    image: "https://i.pinimg.com/564x/44/e0/4c/44e04c1f5102e7201fd95e4811393321.jpg",
    brand: "ToyBrandB",
    title: "Remote Control Car",
    color: "Red",
    selling_price: 1299,
    price: 2599,
    discount: 50,
    size: "Large",
    description: "Experience the thrill of high-speed racing with this sleek remote control car. Perfect for both indoor and outdoor play, this car features a robust build and easy-to-use controls, providing endless hours of fun for racing enthusiasts.",
    highlights: ["High-speed", "Durable build", "Easy controls"],
    details: ["Includes remote control", "Rechargeable battery included", "Suitable for ages 6 and up"]
  }
];

const CartItem = () => {
  const item = pro[0]; // Access the first item from the array

  return (
    <div className="p-5 shadow-lg border rounded-md bg-white">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.image}
            alt="Product"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold text-gray-800">{item.title}</p>
          <p className="opacity-70 text-gray-600">{item.size}</p>
          <p className="opacity-70 text-gray-600">{item.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item.selling_price}</p>
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="text-green-600 font-semibold">{item.discount}% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton sx={{ color: "rgb(145, 85, 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="pt-4 lg:pt-0">
          <Button sx={{ color: "rgb(145, 85, 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
