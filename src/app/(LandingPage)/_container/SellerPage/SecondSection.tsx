import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

const data = [
  {
    title: "No Manual Check",
    image: "/SellerPage/NoManualCheck.svg",
    description:
      "Start selling right away without the need for manual content checks",
  },
  {
    title: "Help Buyers - Grow Income",
    image: "/SellerPage/Rocket.svg",
    description:
      "Boost your earnings by crafting content that perfectly fits each buyer’s needs.",
  },
  {
    title: "Sales Tracker",
    image: "/SellerPage/Graphic.svg",
    description: "Track your sales effortlessly with insightful analytics",
  },
  {
    title: "Supportive Community",
    image: "/SellerPage/People.svg",
    description:
      "Connect and grow together with  Design Simplified sellers community",
  },
  {
    title: "Niche - based Categorization",
    image: "/SellerPage/Hand.svg",
    description:
      "Categorize and manage your store effortlessly, keeping everything organized",
  },
  {
    title: "Gain Trust - Boost Sales",
    image: "/SellerPage/Badge.svg",
    description:
      "Earn the “Trusted” label once your contents reach 150+ downloads",
  },
];

export default function SecondSection() {
  return (
    <div className="bg-[#EBEBEB] w-full py-16 sm:pt-auto sm:mt-0 mt-64 min-[445px]:mt-96 pb-20 px-5 flex flex-col sm:px-12 lg:px-16 sm:py-12 lg:py-16 lg:pb-36 md:pb-28 sm:pb-24 sm:flex-row gap-5 sm:gap-0 items-center justify-center">
      <div className="w-full flex flex-col gap-16 xl:gap-24 lg:gap-20 md:gap-16 sm:gap-12 justify-center items-center">
        <Typography
          font="Lora"
          weight="bold"
          className=" text-black text-[20px]/7 sm:text-2xl md:text-3xl lg:text-[36px]/[48px] xl:text-[40px]/[52px] text-center"
        >
          Why Sell With Us
        </Typography>
        <div className="firstrow w-full flex-col flex gap-7 sm:flex-row justify-center items-center sm:items-end lg:gap-11 px-16 sm:px-0 ">
          {data.slice(0, 3).map((item, index) => (
            <>
              <div
                key={index}
                className="flex flex-col gap-5 justify-center items-center sm:max-w-[40%] lg:max-w-[35%]"
              >
                <div className="flex flex-col gap-5 items-center min-h-[100px] lg:min-h-[200px] justify-end">
                  <NextImage
                    src={item.image}
                    width={60}
                    height={60}
                    className="lg:w-20 md:w-16 sm:w-10"
                    imgClassName="object-cover w-full"
                    alt={item.title}
                  />
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-[#000] text-base sm:text-xs md:text-sm lg:text-md xl:text-lg text-center"
                  >
                    {item.title}
                  </Typography>
                </div>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-black text-xs xl:text-lg lg:text-md sm:text-xs md:text-sm text-center"
                >
                  {item.description}
                </Typography>
              </div>
            </>
          ))}
        </div>
        <div className="secondrow w-full flex-col flex gap-7 sm:flex-row justify-center items-center lg:gap-11 px-16 sm:px-0">
          {data.slice(3).map((item, index) => (
            <>
              <div
                key={index}
                className="flex flex-col gap-5 justify-center items-center sm:max-w-[40%]"
              >
                <div className="flex flex-col gap-5 items-center min-h-[100px] lg:min-h-[200px] justify-end ">
                  <NextImage
                    src={item.image}
                    width={60}
                    height={60}
                    className="lg:w-20 md:w-16 sm:w-8"
                    imgClassName="object-cover w-full"
                    alt={item.title}
                  />
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-[#000] text-base sm:text-xs md:text-sm lg:text-md xl:text-lg text-center"
                  >
                    {item.title}
                  </Typography>
                </div>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-black text-xs xl:text-lg lg:text-md sm:text-xs md:text-sm text-center"
                >
                  {item.description}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
