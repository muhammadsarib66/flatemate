import {  Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Signup from "./screens/Signup";
import ScrollToTop from "./components/ScrollToTop";
import ForgetPass from "./components/ForgetPass";

function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="*"  element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgetpass" element={<ForgetPass />} />


        </Routes>

    </>
  );
}

export default App;
