import image from "../Images/KqMaA8gDfl0.png";
import image1 from "../Images/KqMaA8gDfl0 (1).png";
import image2 from "../Images/KqMaA8gDfl0 (2).png";
import image3 from "../Images/KqMaA8gDfl0.png";
import Slider from "react-slick";
import MyBtn from "../components/MyBtn";
import './featured.css'

const Featured = () => {
  const ArtistArray = [
    {
      img: image,
      title: "Ikeja, Lagos",
      price: "20,000",
      city: "Hyderabad",
      cat: "New Listed",
      icon: <i className="fa-solid fa-house-flag"></i>,
    },
    {
      title: "Hyderabad",
      img: image1,
      price: "20,000",

      city: "karachi",
      cat: "New Listed",
      icon: <i className="fa-solid fa-house-flag"></i>,
    },
    {
      title: "ayan ali",
      img: image3,
      city: "lahore",
      cat: "Hot Listed",
      icon: <i className="fa-solid fa-fire"></i>,
    },
    {
      title: "Waqas Khan",
      price: "20,000",

      img: image2,
      city: "islambabad",
      cat: "Popular",
      icon: <i className="fa-solid fa-fire"></i>,
    },
  ];

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
    <section className="flex flex-col justify-center bg-secondary">
      <div className=" py-10 md:py-24">
        <div className="pl-20 pb-10">
          <h1 className="text-2xl  capitalize font-Montserrat font-bold text-primary underline-offset-8 underline ">
            Featured Hostels
          </h1>
        </div>
        <div className=" w-full flex justify-center overflow-hidden ">
        <Slider   {...settings}>
            {ArtistArray.map((item, ind) => {
              return (
              
                <div key={ind} className="Mydiv  rounded-lg bg-white p-4 duration-300 hover:scale-110 hover:shadow-lg ">
                  <div className="rounded-lg  cursor-pointer  border-none  h-[250px] md:h-[350px] relative max-w-[95%]  md:min-w-[100%] md:max-w-[100%] ">
                    <img
                      src={item?.img}
                      alt="singer"
                      className=" rounded-lg h-full w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full   rounded-lg bg-opacity-50">
                      <div className="w-fit p-2 flex items-center gap-2 text-secondary  mt-10  text-sm bg-black bg-opacity-35  rounded-r-full">
                        {item?.cat}
                        <span> {item?.icon}</span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col  pt-2   w-full h-20 ">
                    <span className="flex justify-between">
                      <p className="text-xl font-semibold text-primary capitalize">
                        {item?.title}
                      </p>
                      <span className="flex gap-2 text-xs">
                        <span className="flex-col justify-center text-center items-center">
                          <i className="fa-solid fa-user"></i>
                          <p className="text-xs"> 3 Person </p>
                        </span>{" "}
                        <span className="flex-col justify-center text-center items-center">
                          <i className="fa-solid fa-wifi"></i>
                          <p className="text-xs">Wifi</p>
                        </span>
                      </span>
                    </span>
                    <p className="font-semibold"><sup>pkr</sup> {item?.price}</p>
                  </div>
                  <div className="flex justify-center">
                    <MyBtn  onclick={()=>{}} title="View More" style="w-[80%] h-12  " icon={ <i className=" fa-solid fa-arrow-right"></i>} />

                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Featured;
