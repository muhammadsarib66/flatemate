import agent from "../Images/agent.svg"
import listing from "../Images/listing.svg"
import date from "../Images/date.svg"

const SearchPlace = () => {
  const detailBox = [
    {
      title: "Find A Listing",
      desc: "Make a choice of the type of apartment and qualities that appeal to your interest.",
      icon : listing
    },
    {
      title: "Talk to an Agent",
      desc: "Our Agents are available 24 Hours Mon-Sat.",
      icon : agent
    },
    {
      title: "Set the date and Move in!",
      desc: "Make payments, get reciept and all other important documents, set your move-in date.",
      icon : date
    },
  ];
  return (
    <div className=" text-primary flex flex-col pt-[400px] md:justify-end  pb-16 center items-center gap-8 w-full h-full md:h-[400px] bg-onSecondary">
      <h1 className=" font-bold text-4xl">How it works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-self-center   place-items-center place-content-center ">
            {detailBox.map((item, ind) => (
                <div key={ind} className="flex items-center justify-center gap-6 w-[80%]">
                    <div className="bg-primary w-14 h-full flex items-center justify-center rounded-md p-2">
                        <img src={item.icon} alt="icon" className="object-contain min-w-14 h-14"/>
                        </div>
                        <div className="">
                            <p className="font-semibold">{item?.title}</p>
                            <p>{item?.desc}</p>
                            </div>
                    </div>
            ))}
            </div>
    </div>
  );
};

export default SearchPlace;
