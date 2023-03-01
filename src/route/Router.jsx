import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Example from "../pages/Example";
import Example2 from "../pages/Example2";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/example" element={<Example />} />
      <Route path="/example2" element={<Example2 />} />
    </Routes>
  );
};

export default Router;
