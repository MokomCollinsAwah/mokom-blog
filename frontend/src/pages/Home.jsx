import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

const Home = () => {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get("/posts");
  //     console.log(res);
  //   };
  //   fetchPost();
  // });
  return (
    <div>
      <Header />
      <div className="flex">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
