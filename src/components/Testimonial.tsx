import Slider from "react-slick";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import MyBtn from "./MyBtn";

const Testimonial = () => {
  const sliderData = [
    {
      name: "Sarib Developer",
      desc: "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
      image: image1,
    },
    {
      name: "ali",
      desc: "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
      image: image2,
    },
    {
      name: "khan",
      desc: "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",

      image: image3,
    },
  ];
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    slideToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrow: true,
    pauseOnHover: true,
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
      <section className="h-screen w-full flex flex-col  py-20 gap-16 items-center bg-onSecondary">
        <div className=" md:w-[500px] flex px-10 flex-col gap-5 text-center">
          <p className=" text-sm md:text-md uppercase text-onPrimary font-bold ">Testimonials</p>
          <h1 className="text-2xl md:text-4xl font-Montserrat font-bold text-primary capitalize">
            See What Our Clients Say About Us
          </h1>
        </div>
        <div className=" w-full  h-[500px] items-center flex justify-center overflow-hidden ">
          <Slider {...settings}>
            {sliderData.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className=" cursor-pointer max-w-[100%]  group rounded-lg  transition ease-in-out  bg-white p-4 duration-300  hover:shadow-lg "
                >
                  <div className="flex flex-col gap-4   w-[250px] md:w-[500px] py-3 md:py-8 px-7 md:px-12 text-primary  ">
                    <div className="">
                      <img
                        src={item.image}
                        alt="user"
                        className=" w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 duration-300 transition ease-in-out  rounded-full mx-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="h-[40px] md:h-fit overflow-hidden text-sm tracking-wider">{item.desc}</p>
                      <h1 className="  text-lg font-bold capitalize">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <div className="p-4 md:p-20 bg-white h-[550px] w-full flex justify-center">
        <div className="relative testimoImage w-full md:w-[80%] h-[400px] rounded-lg ">
          <div className="rounded-l-lg bg-primary text-secondary bg-opacity-65 gap-2 absolute flex flex-col justify-center items-center top-0 h-full w-full md:w-[50%]">
            <div className=" w-[70%]  md:w-[50%] flex flex-col justify-center  gap-2">

            <h1 className="text-2xl font-bold font-Montserrat">Become a Host</h1>
            <p className=" font-semibold font-Montserrat">Join thousands of Landlords and earn an extra income.</p>
            <MyBtn onclick={()=>{}} title="learn More" style="capitalize w-fit px-5 py-2 text-sm font-Montserrat" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
