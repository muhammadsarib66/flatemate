import Logo from "../Images/FlateMate.svg";
import Logoo from "../Images/Logo";
import Menu from "../Images/Menu";
import MyBtn from "./MyBtn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const navigate = useNavigate()
  const NavTabs = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Contact us", link: "/contact" },
  ];
  const socialTab = [
    {icon : <i className="fa-brands fa-facebook-f"></i>},
    {icon : <i className="fa-brands fa-linkedin-in"></i>},
    {icon : <i className="fa-brands fa-twitter"></i>},
    {icon : <i className="fa-brands fa-instagram"></i>},
  ]
  return (
    <>
      <section className=" hidden md:flex fixed top-0 z-[200] font-Poppins  items-center justify-around bg-primary w-full h-[91px]">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="cursor-pointer w-[180px] h-[41px] object-contain"
          />
        </div>
        <div className="flex  gap-8">
          {" "}
          {NavTabs.map((tab) => (
            <Link to={tab?.link}>
            <span
              key={tab.title}
              className={`inline-block   capitalize border-b-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-onPrimary text-lg font-bold text-white`}
              >
              <a href={tab.link}>{tab.title}</a>
            </span>
              </Link>
          ))}
        </div>
        <div>
          <MyBtn onclick={()=>navigate('signup')} title="Sign up" style={"w-fit px-12 py-3 capitalize"} />
        </div>
      </section>

      <section className="flex md:hidden items-center justify-between px-4 fixed top-0 z-[200] font-Poppins bg-secondary w-full h-[92px]">
        <div>
          <Logoo color="#023047" />
        </div>
        <div onClick={()=>setOpen(true)} className="cursor-pointer">
          <Menu color="#023047" />
        </div>
        
      </section>
      <div className={` fixed ${open ? "top-0" : "top-[-1000px]"} duration-300   z-[201] overflow-hidden flex justify-between py-20 flex-col md:hidden h-screen bg-primary w-full`}>
          <div className="flex justify-between w-full  p-2">
            
          <img src={Logo} alt="logo" className="w-[180px] h-[41px] object-contain"/>
            
            <i  className="cursor-pointer fa-solid fa-times text-white text-3xl" onClick={()=>setOpen(false)}></i>
          </div>
          <div className="flex flex-col gap-8 justify-start items-start px-8 text-start  w-full" >
            {
              NavTabs.map((tab)=>{
                return(
                  <div className="flex justify-center">
                    <Link to={tab.link}>
                    <span onClick={()=>setOpen(false)}
                      key={tab.title}
                      className={`inline-block   capitalize border-b-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-onPrimary text-lg font-bold text-white`}
                      >
                      <a href={tab.link}>{tab.title}</a>
                    </span>
                      </Link>
                  </div>
                
                )
              })
            }
          </div>
            <div className="flex justify-center gap-4 ">
              {
                socialTab.map((tab,ind)=>{
                  return(
                    <div 
                        key={ind}
                        className={` rounded-full flex items-center w-12 h-12 justify-center bg-onPrimary border-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-primary text-xl  text-primary`}
                        >
                        {tab.icon}
                      
                    </div>
                  )
                }
                )
              }
            </div>
        </div>
    </>
  );
};

export default Navbar;
