import React from "react";
import Single from "./components/Single";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <TopBar />
      <Home />
      {/* <Single /> */}
    </div>
  );
};

export default App;
