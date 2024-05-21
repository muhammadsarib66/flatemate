/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Logo from "../Images/FlateMate.svg";

import { Typography, Input, Button, Checkbox } from "@material-tailwind/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

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
        <div className="flex flex-col justify-start items-start p-4 md:px-20 md:py-10">
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h3"
          color="blue-gray"
          className="mb-2"
        >
          Create Account
        </Typography>
        <p>
          Already have an account?{" "}
          <span className="text-onPrimary">
            {" "}
            <Link to="/login"> Login</Link>
          </span>
        </p>
        </div>

        <form action="#" className=" p-4 md:px-20">
            <div className="mb-6 flex-col md:flex-row flex gap-4">
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" // Add the missing crossOrigin property
              id="firstName"
              color="gray"
              size="lg"
              type="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" // Add the missing crossOrigin property
              id="LastName"
              color="gray"
              size="lg"
              type="LastName"
              name="LastName"
              placeholder="Last Name"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
           
            </div>
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
          <div className="mb-6">
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
          <div>
          <Checkbox
            crossOrigin="" // Add the missing crossOrigin property
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
      label={
        <Typography
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}} color="blue-gray" className="flex font-medium">
          I agree with the
          <Typography
        placeholder=""

            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            as="a"
            href="#"
            color="blue"
            className="font-medium transition-colors hover:text-blue-700"
          >
            &nbsp;terms and conditions
          </Typography>
          .
        </Typography>
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
            Create Account
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
            Can't wait?{" "}
            <Link  to="/login" className="font-medium text-gray-900">
              Just Login 
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Signup;
