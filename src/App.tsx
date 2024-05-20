import {  Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />

        </Routes>

    </>
  );
}

export default App;
