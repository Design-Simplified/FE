import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function SecondSection() {
  return (
    <>
      <div className="bg-[#525B44] relative w-full mt-44 pt-10 min-[450px]:mt-60 sm:mt-0 pb-16 px-5 flex flex-col gap-3 items-center justify-center rounded-3xl sm:py-32 sm:px-16">
        <div className="isi flex w-full items-start justify-center gap-10 sm:gap-32 flex-col">
          <div className="flex flex-col gap-5 w-full sm:gap-16 ">
            <div className="flex flex-col w-full gap-1">
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white text-[11px] sm:text-lg md:text-lg lg:text-2xl"
              >
                Say Goodbye To Confusing and Outdated Search Functionality.
              </Typography>
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[26px] sm:text-2xl md:text-3xl lg:text-[45px]"
              >
                Redefine The Way You Find
              </Typography>
            </div>
            <div className="imagetext w-full h-[320px] sm:h-[673px] relative bg-[url('/images/LandingPage/Section2NightMobile.png')] bg-cover bg-center rounded-lg">
              <div className="bg-[#FFFFFF99] w-1/2 lg:w-1/3 px-3 sm:px-9 flex justify-center items-center h-full absolute right-0 rounded-lg">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-base sm:text-[36px]/[46px] md:text-3xl/9 xl:text-[36px]/[46px]"
                >
                  Where simplicity meets precision
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full sm:gap-16">
            <div className="flex flex-col w-full gap-1 sm:flex-row sm:justify-between sm:items-center">
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[26px] sm:text-xl md:text-2xl lg:text-[45px]/[50px] sm:w-[48%]"
              >
                For the First Time, You Can Get Full Control
              </Typography>
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white text-[11px] sm:text-base md:text-base lg:text-2xl sm:w-[48%]"
              >
                Choose a template, customize it your way, or let the seller
                tailor it to perfection.
              </Typography>
            </div>
            <div className="image w-full flex flex-col gap-5 sm:flex-row sm:justify-between">
              <NextImage
                src={"/LandingPage/MbaMbaSenyumSection2Mobile.png"}
                alt="Mba Mba Senyum"
                width={350}
                height={291}
                className="rounded-lg w-full sm:w-[47%]"
                imgClassName="w-full object-cover"
              />
              <NextImage
                src={"/LandingPage/MbaMbaSenyumSection2Mobile.png"}
                alt="Mba Mba Senyum"
                width={350}
                height={291}
                className="rounded-lg w-full sm:w-[47%]"
                imgClassName="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full sm:gap-16">
            <div className="flex flex-col w-full gap-1 sm:flex-row sm:justify-between sm:items-center">
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[20px] sm:text-xl md:text-2xl lg:text-[45px]/[50px]  sm:w-[50%]"
              >
                Where You Truly Feel at Home
              </Typography>
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white text-[11px] sm:text-sm md:text-base lg:text-2xl sm:w-[50%]"
              >
                Tailored for a true sense of belonging
              </Typography>
            </div>

            <div className="ImageContainer w-full flex flex-col gap-8 sm:gap-32">
              <div className="each relative bg-white w-full min-h-[240px] sm:min-h-[640px] rounded-lg min-[450px]:h-[300px]">
                <NextImage
                  src={"/LandingPage/McLarenMobile.png"}
                  alt="Mc Laren"
                  width={318}
                  height={133}
                  className="rounded-lg relative z-20 top-4 left-[8%] w-[85%] sm:w-[90%] sm:left-[5%] sm:top-7 sm:max-h-[400px] sm:overflow-hidden"
                  imgClassName="object-cover w-full"
                />
                <div className="absolute w-full flex justify-center items-center px-4 py-8 sm:px-12 sm:py-32 bottom-0 bg-[#525B4480] rounded-b-lg">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-base relative top-2 text-center sm:text-[32px]/[40px] md:text-[32px]/[40px]"
                  >
                    Customize it on your own, and pay when you ready to download
                  </Typography>
                </div>
              </div>

              <div className="relative image flex flex-col gap-8 w-full sm:flex-row sm:justify-between sm:items-center">
                <div className="each relative bg-white w-full min-h-[240px] rounded-lg min-[450px]:h-[300px] sm:min-h-[330px] sm:w-[47%]">
                  <NextImage
                    src={"/LandingPage/McLarenMobile.png"}
                    alt="Mc Laren"
                    width={318}
                    height={133}
                    className="rounded-lg relative z-20 top-4 left-[8%] w-[85%] sm:max-h-[200px] sm:overflow-hidden"
                    imgClassName="object-cover w-full"
                  />
                  <div className="absolute w-full flex justify-center items-center px-4 py-8 bottom-0 bg-[#525B4480] rounded-b-lg sm:py-16">
                    <Typography
                      font="Lora"
                      weight="semibold"
                      className="text-base relative top-2 text-center sm:text-2xl md:text-2xl sm:top-6"
                    >
                      Niche-Based Personalization
                    </Typography>
                  </div>
                </div>
                <div className="each relative bg-white w-full min-h-[240px] rounded-lg min-[450px]:h-[300px] sm:min-h-[330px] sm:w-[47%]">
                  <NextImage
                    src={"/LandingPage/McLarenMobile.png"}
                    alt="Mc Laren"
                    width={318}
                    height={133}
                    className="rounded-lg relative z-20 top-4 left-[8%] w-[85%] sm:max-h-[200px] sm:overflow-hidden"
                    imgClassName="object-cover w-full"
                  />
                  <div className="absolute w-full flex justify-center items-center px-4 py-8 bottom-0 bg-[#525B4480] rounded-b-lg sm:py-16">
                    <Typography
                      font="Lora"
                      weight="semibold"
                      className="text-base relative top-2 text-center sm:text-2xl md:text-2xl sm:top-6"
                    >
                      Connect to sellers for better personalization
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
