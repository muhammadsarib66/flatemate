import SearchHouse from "../SearchHouse"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Promotion from "../components/Promotion"
import SearchPlace from "../components/SearchPlace"
import Testimonial from "../components/Testimonial"
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
          <Testimonial />
          <Footer />
   </>
  )
}

export default Home