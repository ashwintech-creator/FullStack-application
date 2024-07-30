import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm mb-4">
          ToyStore offers a wide range of high-quality toys for children of all ages. From action figures to educational toys, we strive to bring joy and learning to every child.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ToyStore. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          License: <a href="#" className="text-gray-400 hover:text-gray-300">License Information</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
