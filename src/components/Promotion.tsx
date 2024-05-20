import Tower from "../Images/tower.png"
import feat1 from "../Images/image1.png"
import feat2 from "../Images/image2.png"
import feat3 from "../Images/image3.png"
import feat4 from "../Images/KqMaA8gDfl0 (2).png"
import MyBtn from "./MyBtn";

const Promotion = () => {
  return (
    <section className="   w-full p-10 md:p-20 grid grid-cols-1  md:grid-cols-5" >
      <div className=" flex flex-col gap-8 font-Montserrat col-span-3">
        <div className="md:w-[500px] flex flex-col gap-3">

        <p className="text-onPrimary font-bold">Promotion</p>
        <h1 className="text-2xl md:text-4xl font-bold text-primary  tracking-wider "> We Provide You World Best Hostels Booking</h1>
        <p className=" text-xs md:text-md text-primary">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <div className="w-fit">

        <MyBtn onclick={()=>{}} title="Book Now" style="px-8 md:px-14 py-3" icon={ <i className=" fa-solid fa-arrow-right"></i>} />
            </div>
        </div>
        <div className="  grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 w-full">
            {[feat1,feat2,feat3,feat4].map((item,ind)=>{
                return(
                    <>
                    <div className="relative">

                    <img src={item} alt
                    ="feat" key={ind} className="w-[140px] h-[150px] object-cover rounded-lg"/>
                        <div className="absolute top-0 h-fit w-fit flex justify-end p-3 ">
                                <div className="w-fit h-fit px-2 py-1 text-sm text-white bg-onPrimary rounded-full">
                                    15% Off
                                </div>
                            </div>
                        </div>
                    </>
                )

            })}
            </div>
      </div>
      <div className=" hidden md:block col-span-2 ">
            <img src={Tower} alt="tower" className="w-[400px] h-[500px] object-cover rounded-t-full" /> 
      </div>
    </section>
  );
};

export default Promotion;
