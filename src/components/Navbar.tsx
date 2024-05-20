import Logo from "../Images/FlateMate.svg";
import Logoo from "../Images/Logo";
import Menu from "../Images/Menu";
import MyBtn from "./MyBtn";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const NavTabs = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Contact us", link: "/contact" },
  ];
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
            <span
              key={tab.title}
              className={`inline-block   capitalize border-b-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-onPrimary text-lg font-bold text-white`}
            >
              <a href={tab.link}>{tab.title}</a>
            </span>
          ))}
        </div>
        <div>
          <MyBtn onclick={()=>navigate('login')} title="Sign up" style={"w-fit px-12 py-3 capitalize"} />
        </div>
      </section>

      <section className="flex md:hidden items-center justify-between px-4 fixed top-0 z-[200] font-Poppins bg-secondary w-full h-[92px]">
        <div>
          <Logoo color="#023047" />
        </div>
        <div className="cursor-pointer">
          <Menu color="#023047" />
        </div>
      </section>
    </>
  );
};

export default Navbar;
