import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

const Home = () => {
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
