import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-9/12 flex flex-wrap m-5">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
