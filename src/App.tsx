import SearchHouse from "./SearchHouse";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import SearchPlace from "./components/SearchPlace";
import Featured from "./screens/Featured";
import Hero from "./screens/Hero";
// import Login from "./screens/Login";

function App() {
  return (
    <>
      <Navbar />
     
        <div className="relative ">
          <Hero />
          <div className=" w-full absolute bottom-[500px]   md:bottom-72 flex justify-center ">
            <SearchHouse />
          </div>
          <SearchPlace />
        </div>
          <Featured />
          <Promotion />
      {/* <Login /> */}
    </>
  );
}

export default App;
