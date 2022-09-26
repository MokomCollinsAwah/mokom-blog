import SideBar from "../components/SideBar";

import { BiUserCircle } from "react-icons/bi";

const Settings = () => {
  return (
    <div className="flex ">
      <div className="w-9/12">
        <div className="flex justify-between items-center ml-10">
          <span className="text-3xl mb-5 text-lightcoral">
            Update Your Account
          </span>
          <span className="text-red text-xs cursor-pointer">
            Delete Your Account
          </span>
        </div>

        <form action="" className="flex flex-col ml-10">
          <label htmlFor="" className="flex items-center  my-2.5">
            Profile Picture
          </label>
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="#"
              className="w-20 h-20 rounded-3xl object-cover"
            />
            <label htmlFor="fileInput">
              <BiUserCircle className="w-6 h-6 rounded-full bg-lightcoral text-white flex items-center justify-center ml-5" />
            </label>
            <input type="file" id="fileInput" className="hidden" />
          </div>
          <label className="text-xl mt-5">Username:</label>
          <input
            type="text"
            placeholder="mokom"
            className="text-gray my-5 mx-0 h-10"
          />
          <label className="text-xl mt-5">Email:</label>
          <input type="email" placeholder="mokomchatapp@gmail.com" />
          <label className="text-xl mt-5">Password:</label>
          <input type="text" className="text-gray my-2 mx-0 h-8 " />
          <button className="w-40 text-white p-2.5 mt-5 rounded-xl cursor-pointer bg-teal mx-auto">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
