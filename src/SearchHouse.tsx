import { Input } from "@material-tailwind/react";
import MyBtn from "./components/MyBtn";

const SearchHouse = () => {
  return (
    <div className=" font-Montserrat w-[90%] md:w-[70%] bg-primary h-fit md:h-[250px] flex flex-col  justify-around rounded-md p-4 md:p-8">
      <h1 className="font-bold text-xl md:text-3xl text-secondary uppercase">
        WHat do you need?
      </h1>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
          <div>
            <p className="text-secondary text-sm"> Location</p>

            <Input
             placeholder=""
             onPointerEnterCapture={() => {}}
             onPointerLeaveCapture={() => {}}
             crossOrigin=""
              className="bg-white  outline-none transform-none border-none"
              icon={<i className="fa-solid fa-magnifying-glass"></i>}
            />
          </div>
          <div>
            <p className="text-secondary text-sm"> Check in</p>

            <Input
              type="date"
              className="bg-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          <div>
            <p className="text-secondary text-sm"> Check out </p>

            <Input  placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" className="bg-white    " />
          </div>
          <div>
            <p className="text-secondary text-sm"> Location</p>
            <Input  placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" type="date" className="bg-white  outline-none " />
          </div>
        </div>
        <div className="flex md:justify-end py-4 ">
          <MyBtn
          onclick={()=>{}}
            title="Search FlateMate"
            icon={<i className=" fa-solid fa-arrow-right"></i>}
            style="  bg-onPrimary  w-full md:w-[200px] h-12 rounded-lg text-white font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchHouse;
