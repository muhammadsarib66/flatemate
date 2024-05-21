import {  Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Signup from "./screens/Signup";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="*"  element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

    </>
  );
}

export default App;
