import React from "react";

const Header = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center">
        <span className="absolute text-lg top-30 text-gray-700">
          React & Node JS
        </span>
        <span className="absolute text-8xl top-36 text-gray-700">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="h-96 w-full mt-20 object-cover"
      />
    </div>
  );
};

export default Header;
