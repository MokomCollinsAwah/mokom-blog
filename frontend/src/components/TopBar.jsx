import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;
  return (
    <div className="flex justify-between align-middle sticky w-full h-12 top-0 pt-2 bg-white">
      <div className="flex w-32 justify-center  gap-3 cursor-pointer">
        <BsFacebook color="GREY" />
        <BsTwitter color="GREY" />
        <BsInstagram color="GREY" />
        <BsPinterest color="GREY" />
      </div>

      <div className="flex w-64 justify-center list-none gap-4 font-light cursor-pointer text-xl">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/write">WRITE</Link>
        </li>
        <li>{user && "LOGOUT"}</li>
      </div>

      <div className="flex w-32  justify-center">
        {user ? (
          <img
            src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="#"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <ul className="list-none font-light flex gap-2 mr-20">
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
            <BsSearch
              size={20}
              className="text-lg cursor-pointer ml-5 text-gray-600"
            />
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
