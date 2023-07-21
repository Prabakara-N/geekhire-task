import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-20 py-6 bg-slate-700 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-white text-2xl font-semibold">GeekHire</h1>
      </Link>
      <Link to="/favitems">
        <AiFillHeart className="text-red-600 text-3xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default Header;
