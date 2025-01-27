import Typography from "@/components/Typography";
import { describe } from "node:test";

const HowToStartSelling = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Select ‘Sign up as a Seller’ and follow the steps to get started",
  },
  {
    number: "02",
    title: "Add an Niche and Sub-Niche",
    description:
      "Select one niche and sub-niche to start. Upgrade anytime to expand and sell in more niches and sub-niche!",
  },
  {
    number: "03",
    title: "Add Your Contents",
    description:
      "Start by uploading up to 10 contents in a sub-niche. Expand as you grow!",
  },
];

export default function ThirdSection() {
  return (
    <>
      <div className="w-full relative flex pt-20 pb-32 bg-[#525B44] sm:px-2  lg:px-16">
        <div className="flex flex-col gap-8 isi w-full sm:gap-20">
          <Typography
            font="Lora"
            weight="semibold"
            className="text-xl text-center text-white sm:text-[36px] md:text-[36px] lg:text-[45px]"
          >
            How To Start Selling
          </Typography>

          <div className="3card w-full flex flex-col gap-10 sm:flex-row sm:gap-4 lg:gap-8 sm:justify-between sm:items-start px-12 sm:px-0">
            {HowToStartSelling.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-3 sm:gap-5 justify-center items-center"
              >
                <Typography
                  font="Lora"
                  weight="bold"
                  className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-8xl text-center"
                >
                  {item.number}
                </Typography>
                <Typography
                  font="Lora"
                  weight="bold"
                  className="text-white text-base sm:text-base md:text-xl lg:text-3xl text-center"
                >
                  {item.title}
                </Typography>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-white text-xs md:text-sm lg:text-lg xl:text-xl text-center"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
