import Logo from "../Images/FlateMate.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    // { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  const socialTab = [
    { icon: <i className="fa-brands fa-facebook-f"></i> },
    { icon: <i className="fa-brands fa-linkedin-in"></i> },
    { icon: <i className="fa-brands fa-twitter"></i> },
    { icon: <i className="fa-brands fa-instagram"></i> },
  ];
  return (
    <footer className="font-Montserrat grid grid-cols-1 md:grid-cols-4 gap-3 md:place-items-center px-6 py-4 md:px-14 md:py-12 h-fit bg-primary text-secondary">
      <div className="col-span-1 flex items-start flex-col  gap-4">
        <img src={Logo} alt="logo" className=" h-[36px] md:h-[82px]" />
        <p className="text-xs md:text-sm tracking-wider">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <p className="text-xs md:text-sm  tracking-wider text-onPrimary cursor-pointer">
          FlateMate 2023 | All Rights Reserved
        </p>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <h1 className="font-bold text-xl mt:text-3xl">Contact Us</h1>
        <p className=" flex gap-3 text-xs md:text-sm">
          <span>
            {" "}
            <i className="fa-solid fa-location-dot"></i>
          </span>{" "}
          Hyderabad Pakistan
        </p>
        <p className="flex gap-3 text-xs md:text-sm">
          <span>
            {" "}
            <i className="fa-solid fa-envelope"></i>
          </span>{" "}
          flatemate@gmail.com
        </p>
        <p className="flex gap-3 text-xs md:text-sm">
          <span>
            {" "}
            <i className="fa-solid fa-phone"></i>
          </span>{" "}
          +923103102166
        </p>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <h1 className="font-bold text-xl mt:text-3xl">Quick Links</h1>
        {Links.map((link, ind) => {
          return (
            <p
              key={ind}
              className=" text-xs md:text-sm cursor-pointer hover:scale-110 duration-300  hover:font-bold "
            >
              <Link to={link.link}>{link.title}</Link>
            </p>
          );
        })}
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <h1 className="font-bold text-xl mt:text-3xl">Follow Us</h1>
        <div className=" col-span-1 flex justify-center gap-4 ">
          {socialTab.map((tab, ind) => {
            return (
              <div
                key={ind}
                className={` rounded-full flex items-center w-12 h-12 justify-center bg-onPrimary border-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-primary text-xl  text-primary`}
              >
                {tab.icon}
              </div>
            );
          })}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
