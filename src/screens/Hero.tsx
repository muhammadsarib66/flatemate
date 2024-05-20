import Slider from "react-slick";
import Heroimg1 from "../Images/hero.png"
import Heroimg2 from "../Images/hero2.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactTyped } from "react-typed";
import MyBtn from "./../components/MyBtn";

function Hero() {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    width: "100%",
    
  };
  return (
    <section id='home' className=" font-Montserrat  relative h-screen ">

    <div className="  relative h-screen">
        <div className='absolute flex flex-col  justify-center pl-8 md:pl-28 gap-8 h-full w-full   z-10 '>
        <h1 className=" font-bold font-Montserrat  text-2xl md:text-5xl uppercase text-primary ">
        <ReactTyped
          strings={["Your Mate FlatMate", "Lets Make Your Event Memorable", "Book Your Event Now"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
            <div className=" md:w-[500px]">
                <h2 className="font-bold text-lg md:text-2xl text-primary">

            Lorem Ipsum is simply dummy text of the printing and typesetting
                </h2>
            </div>
            <div className=" cursor-pointer  flex  gap-2 text-md  md:text-xl font-semibold c items-center   text-onPrimary">
            <p className=" underline capitalize underline-offset-8 "> Explore more </p>
            <i className=" fa-solid fa-arrow-right"></i>
            </div>
        </div>
      <Slider className="w-[100%]   md:h-screen overflow-hidden" {...settings}>
       {[Heroimg1,Heroimg2].map((item ,ind)=> {
        return(
        <div key={ind} className="  w-[100%] h-screen  ">
         <div className="relative">
  <img className="object-cover w-full h-screen" src={item} alt="item"/>
  {/* <div className="absolute inset-0 bg-black opacity-70 "> </div> */}
</div>
        </div>
       )})}      
      </Slider>
    </div>
    </section>

  );
}

export default Hero;
