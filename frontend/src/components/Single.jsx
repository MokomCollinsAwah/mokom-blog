import React from "react";
import SideBar from "./SideBar";
import SinglePost from "./SinglePost";

const Single = () => {
  return (
    <div className="flex">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
