import Typography from "@/components/Typography";

const HowToStartSelling = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Select ‘Sign up as a Seller’ and follow the steps to get started",
  },
  {
    number: "02",
    title: "Add a Niche and Sub-Niche",
    description:
      "Select one particular niche and sub-niche to start. You can add more later on",
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
      <div className="w-full relative flex pt-20 pb-32 bg-[#525B44] sm:px-12  lg:px-20 sm:pt-32 sm:pb-40">
        <div className="flex flex-col gap-16 isi w-full sm:gap-20">
          <Typography
            font="Lora"
            weight="bold"
            className="text-center text-white text-[20px]/7 sm:text-2xl md:text-3xl lg:text-[36px]/[48px] xl:text-[40px]/[52px]"
          >
            How To Start Selling
          </Typography>

          <div className="3card w-full flex flex-col gap-6 sm:flex-row sm:gap-16 md:gap-4 lg:gap-10 sm:justify-center sm:items-center md:justify-between md:items-start px-20 sm:px-0 sm:flex-wrap md:flex-nowrap">
            {HowToStartSelling.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-2.5 sm:gap-5 justify-center items-cente sm:max-w-[230px] md:max-w-full "
              >
                <Typography
                  font="Lora"
                  weight="bold"
                  className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-6xl text-center"
                >
                  {item.number}
                </Typography>
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-white text-base sm:text-base md:text-base xl:text-xl text-center"
                >
                  {item.title}
                </Typography>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-white text-xs md:text-sm lg:text-base xl:text-xl text-center"
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
