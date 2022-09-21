import React from "react";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center w-3/12 m-5 pb-8 bg-sidebar-color rounded-md">
      <div className=" flex flex-col items-center">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="mt-8 w-4/5"
        />
        <p className="p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          repudiandae sapiente harum delectus accusamus nostrum
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="list-none mb-8">
          <li className="sidebar_list-item">Life</li>
          <li className="sidebar_list-item">Music</li>
          <li className="sidebar_list-item">Tech</li>
          <li className="sidebar_list-item">Food</li>
          <li className="sidebar_list-item">Sports</li>
          <li className="sidebar_list-item">Games</li>
        </ul>
      </div>

      <div className=" flex flex-col items-center">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="flex w-32 justify-center  gap-3 cursor-pointer">
          <BsFacebook color="GREY" />
          <BsTwitter color="GREY" />
          <BsInstagram color="GREY" />
          <BsPinterest color="GREY" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
