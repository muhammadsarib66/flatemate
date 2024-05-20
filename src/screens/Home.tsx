import SearchHouse from "../SearchHouse"
import Navbar from "../components/Navbar"
import Promotion from "../components/Promotion"
import SearchPlace from "../components/SearchPlace"
import Featured from "./Featured"
import Hero from "./Hero"

const Home = () => {
  return (
   <>
        <Navbar />

    <div className="relative ">
          <Hero />
          <div className=" w-full absolute bottom-[500px]   md:bottom-72 flex justify-center ">
            <SearchHouse/>
          </div>
          <SearchPlace />
        </div>
          <Featured />
          <Promotion />
   </>
  )
}

export default Home