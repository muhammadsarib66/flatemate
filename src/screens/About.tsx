import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import about from "../Images/about.png";
import worldmap from "../Images/WorldMap.png";
import Slider from "react-slick";
import user1 from "../Images/singer1.jpg"
import user2 from "../Images/singer2.jpg"
import user3 from "../Images/singer3.jpg"
import user from "../Images/user1.png"

import './featured.css'

const About = () => {
  const sampleText = [
    {
      heading: "Our Mission",
      detail: [
        {
          title: "Unmatched service",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          title: "Specific ",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          title: "Experience",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          title: "Technology",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
      ],
    },
    {
      heading: "Our Commitment",
      detail: [
        {
          title: "Ethics",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          title: "Quality ",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          title: "Continuity",
          des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
       
      ],
    },
  ];
  const TeamImage =  [ {name : "Ali " , img : user1}, {name : "Ali ", img : user2}, {name : "Ali " ,img : user3}, {name : "Ali " ,img : user}]
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 4,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrow: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    initialSlide: 0,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <div className="font-Montserrat  w-full flex  flex-col  gap-4 md:gap-7 items-center  bg-secondary py-24">
        <h1 className="text-2xl md:text-4xl md:w-[500px] text-center  font-Montserrat font-bold text-primary capitalize pt-10">
          We’re here to gurantee your success
        </h1>
        <div className=" relative bg-primary w-full md:w-[70%] min-h-52  p-10 text-secondary rounded-lg">
          <p>
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          {/* <div> */}
          <img
            src={about}
            alt="about"
            className="absolute bottom-[-100px] md:bottom-[-200px]  left-0 w-full md:h-72 object-top  object-cover rounded-full"
          />
          {/* </div> */}
        </div>
        <div className=" flex flex-col justify-center  items-center w-full  gap-8 pt-10 md:pt-52">
          <h1 className="text-2xl md:text-4xl md:w-[500px] text-center  font-Montserrat font-bold text-primary capitalize pt-10">
            We’re here to gurantee your success
          </h1>
          <div>
            <img
              src={worldmap}
              alt="worldmap"
              className="w-full  h-full  object-cover "
            />
          </div>
        </div>
        <div className="w-[80%]">
          {
            sampleText.map((text, index) => {
              return (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="text-2xl py-6 md:text-4xl font-Montserrat font-bold text-primary capitalize">
                    {text.heading}
                  </h1>
                  <div className="grid grid-cols-1 gap-4">
                    {
                      text.detail.map((detail, index) => {
                        return (
                          <div className="grid grid-cols-8 gap-8" key={index}>
                            <h1 className="col-span-3 text-md md:text-lg font-Montserrat font-semibold text-primary capitalize">
                              {detail.title}
                            </h1>
                            <p className="col-span-5 text-sm md:text-md  text-primary  ">
                              {detail.des}
                            </p>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
          
        </div>
          <div className="bg-onSecondary h-fit md:h-[600px] w-full">
          <h1 className="text-2xl text-center py-6 md:text-4xl font-Montserrat font-bold text-primary capitalize">
          Our Successfull Team </h1>
          <div className=" w-full flex justify-center overflow-hidden ">
        <Slider   {...settings}>
            {TeamImage.map((item, ind) => {
              return (
              
                <div key={ind} className="Mydiv  rounded-lg bg-onSecondary  duration-300 hover:scale-110 hover:shadow-lg ">
                  <div className="rounded-lg  cursor-pointer  border-none  h-[250px] md:h-[350px] relative max-w-[95%]  md:min-w-[100%] md:max-w-[100%] ">
                    <img
                      src={item?.img}
                      alt="singer"
                      className=" rounded-lg h-full w-full object-cover"
                    />
                   
                  </div>
                  <h2 className=" 
                  text-center
                  text-primary
                  font-semibold
                  text-lg
                  capitalize
                  hover:text-secondary
                  duration-300
                  ease-in-out
                  transition
                  hover:font-bold


                  ">
                    {item?.name}
                  </h2>
                  
                </div>
              );
            })}
          </Slider>
        </div>
          </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
