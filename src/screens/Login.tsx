/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Logo from '../Images/FlateMate.svg'

import { Typography, Input, Button } from "@material-tailwind/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="flex  font-Montserrat  text-center h-screen items-center ">
      <div className="flex-1 hidden text-start md:flex flex-col justify-between bg-[#023047] h-screen overflow-y-hidden">
        <div className="py-20 pl-20">

        <img
          src={Logo}
          alt="logo"
          className="  w-80 h-fit object-contain "
          />
          </div>
          <div className="pb-20 text-secondary ">
            <h1 className="pl-20 text-3xl font-bold">Create Account</h1>
            <h2 className="pl-20">Create Account and Move Forward</h2>
            </div>
      </div>
      <div className=" h-screen pt-4  flex-1 px-2  ">
        <div className=" cursor-pointer flex justify-end pr-2">

        <div className=" duration transition ease-in-out hover:scale-110 hover:animate-pulse  text-secondary  w-12 h-12 flex justify-center items-center bg-primary rounded-full">
       <Link to="/">

       <i className="fa-solid fa-house"></i>
       </Link>
        </div>
        </div>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h3"
          color="blue-gray"
          className="mb-2"
        >
          Sign In
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="mb-16 text-gray-600 font-normal text-[18px]"
        >
          Enter your email and password to sign in
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
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
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                placeholder={""}
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              crossOrigin="" // Add the missing crossOrigin property
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <VisibilityOffIcon className="h-5 w-5" />
                  ) : (
                    <VisibilityIcon className="h-5 w-5" />
                  )}
                </i>
              }
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
            sign in
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div>
          <Button
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a href="#" className="font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Login;
