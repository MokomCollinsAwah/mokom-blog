import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsSearch,
} from "react-icons/bs";

const TopBar = () => {
  return (
    <div class="flex justify-between align-middle sticky mt-3 w-full h-5">
      <div class="flex w-32 justify-center  gap-3 cursor-pointer">
        <BsFacebook color="GREY" />
        <BsTwitter color="GREY" />
        <BsInstagram color="GREY" />
        <BsPinterest color="GREY" />
      </div>

      <div class="flex w-64 justify-center list-none gap-5 font-light cursor-pointer text-xl">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>WRITE</li>
        <li>LOGOUT</li>
      </div>

      <div class="flex w-32  justify-center">
        <img
          src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="#"
          class="w-10 h-10 rounded-full object-cover"
        />
        <BsSearch size={20} class="text-lg cursor-pointer ml-5 text-gray-600" />
      </div>
    </div>
  );
};

export default TopBar;
