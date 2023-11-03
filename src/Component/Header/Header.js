import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white font-serif">
      <div className="text-xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li activeClassName="text-blue-500">Home</li>
          <li activeClassName="text-blue-500">About</li>
          <li activeClassName="text-blue-500">Service</li>
          <li activeClassName="text-blue-500">Call Me</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
