import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Single from "./components/Single";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="settings" element={user ? <Settings /> : <Register />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
