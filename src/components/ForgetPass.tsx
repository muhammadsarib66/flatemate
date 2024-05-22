/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "../Images/FlateMate.svg";

import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ForgetPass() {

  return (
    <section className="flex  font-Montserrat  w-full text-center h-screen items-center ">
      <div className="flex-1 hidden text-start md:flex flex-col justify-between bg-[#023047] h-screen overflow-y-hidden">
        <div className="py-20 pl-20">
          <img src={Logo} alt="logo" className="  w-80 h-fit object-contain " />
        </div>
        <div className="pb-20 text-secondary ">
          <h1 className="pl-20 text-3xl font-bold">Create Account</h1>
          <h2 className="pl-20">Create Account and Move Forward</h2>
        </div>
      </div>
      <div className=" h-screen w-full pt-4  flex-1 px-2  ">
        <div className=" cursor-pointer flex justify-end pr-2">
          <div className=" duration transition ease-in-out hover:scale-110 hover:animate-pulse  text-secondary  w-12 h-12 flex justify-center items-center bg-primary rounded-full">
            <Link to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
        </div>
        <div className="pt-10 md:pt-20">

        <div className="flex text-start flex-col justify-start items-start p-4 md:px-20 md:py-4">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h3"
            color="blue-gray"
            className="mb-2"
          >
            Forget Password
          </Typography>
          <p>
            Enter the email you used to create your account so we can send you
            instructions on how to reset your password.
          </p>
        </div>

        <form action="#" className=" p-4 md:px-20">
          <div className="mb-6">
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" // Add the missing crossOrigin property
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>

          <Button
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            size="lg"
            className="mt-6 bg-[#8ECAE6]"
            fullWidth
          >
            Send
          </Button>
          <Button
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            size="lg"
            className="mt-6 bg-transparent text-primary border-[1px] border-primary capitalize"
            fullWidth
          >
            <Link to="/login">

            Back to Login
            </Link>
          </Button>
        </form>
        </div>

      </div>
    </section>
  );
}

export default ForgetPass;
