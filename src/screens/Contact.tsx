import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Radio, Textarea } from "@material-tailwind/react";
import MyBtn from "../components/MyBtn";
import letterIcon from "../Images/letter_send.png";

const Contact = () => {
  const socialTab = [
    { icon: <i className="fa-brands fa-facebook-f"></i> },
    { icon: <i className="fa-brands fa-linkedin-in"></i> },
    { icon: <i className="fa-brands fa-twitter"></i> },
    { icon: <i className="fa-brands fa-instagram"></i> },
  ];
  return (
    <>
      <Navbar />
      <div className="font-Montserrat h-full w-full flex  flex-col  gap-7 items-center  bg-secondary py-24">
        <div className=" md:w-[500px] flex px-10 flex-col pt-6 gap-5 text-center">
          <h1 className="text-2xl md:text-4xl font-Montserrat font-bold text-primary capitalize">
            Contact Us
          </h1>
          <p className=" text-sm md:text-md  text-primary font-semibold ">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 bg-white rounded-lg w-[80%] h-fit md:min-h-[600px] shadow-md">
          <div className="col-span-2 bg-primary rounded-lg flex flex-col justify-around p-4 md:p-7">
            <div>
              <h1 className="text-secondary font-semibold text-xl md:text-2xl">
                Contact Information
              </h1>
              <p className="text-secondary font-thin">
                Say something to start a live chat!
              </p>
            </div>
            <div className="text-secondary flex  flex-col gap-6">
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
              <p className=" w-[70%] flex gap-3 text-xs md:text-sm">
                <span>
                  {" "}
                  <i className="fa-solid fa-location-dot"></i>
                </span>{" "}
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
            <div className=" col-span-1 flex justify-center md:justify-start gap-4 ">
              {socialTab.map((tab, ind) => {
                return (
                  <div
                    key={ind}
                    className={` cursor-pointer rounded-full flex items-center w-8 md:w-12 h-8 md:h-12 justify-center bg-onPrimary border-2 border-primary hover:border-onPrimary duration-300 ease-in-out transition hover:scale-110  hover:text-primary  text-md md:text-xl  text-primary`}
                  >
                    {tab.icon}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-3   flex flex-col gap-8 text-primary py-7 px-4 md:p-12">
            <div className="grid gap-8   grid-cols-1 md:grid-cols-2">
              <Input
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin=""
                className="col-span-1 "
                variant="static"
                label="First Name"
              />
              <Input
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin=""
                className="col-span-1"
                variant="static"
                label="Last Name"
              />
              <Input
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin=""
                className="col-span-1"
                variant="static"
                label="Email"
              />
              <Input
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin=""
                className="col-span-1"
                variant="static"
                label="Phone"
              />
            </div>
            <div>
              <p className="font-bold"> Select Subject?</p>
              <div>
                <Radio
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  crossOrigin=""
                  name="type"
                  label="General Enquiry"
                  className="bg-primary text-sm font-bold"
                  icon={
                    <i className="fa-solid fa-check text-sm text-white"></i>
                  }
                />
                <Radio
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  crossOrigin=""
                  name="type"
                  label="General Enquiry"
                  className="bg-primary text-sm font-bold"
                  icon={
                    <i className="fa-solid fa-check text-sm text-white"></i>
                  }
                />
                <Radio
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  crossOrigin=""
                  defaultChecked={true}
                  name="type"
                  label="General Enquiry"
                  className="bg-primary text-sm font-bold"
                  icon={
                    <i className="fa-solid fa-check text-sm text-white"></i>
                  }
                />
              </div>
              <Textarea
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                variant="standard"
                label="Message"
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <MyBtn
                onclick={() => {}}
                title="Send Message"
                style="w-full md:w-fit p-4"
              />
            </div>
            <div className="flex justify-end">
              <img src={letterIcon} alt="letter_send" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
