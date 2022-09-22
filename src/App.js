import React from "react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Write from "./pages/Write";

const App = () => {
  return (
    <div>
      <TopBar />
      <Home />
      {/* <Write /> */}
    </div>
  );
};

export default App;
