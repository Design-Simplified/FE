import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function SecondSection() {
  return (
    <>
      <div className="bg-[#525B44] relative w-full mt-44 pt-10 min-[450px]:mt-60 pb-16 px-5 flex flex-col gap-3 items-center justify-center rounded-3xl">
        <div className="isi flex w-full items-start justify-center gap-10 flex-col">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col w-full gap-1">
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white"
              >
                Say Goodbye To Confusing and Outdated Search Functionality.
              </Typography>
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[26px]"
              >
                Redefine The Way You Find
              </Typography>
            </div>
            <div className="imagetext w-full h-[320px] relative bg-[url('/images/LandingPage/Section2NightMobile.png')] bg-cover bg-center rounded-lg">
              <div className="bg-[#FFFFFF99] w-1/2 px-3 flex justify-center items-center h-full absolute right-0 rounded-lg">
                <Typography font="Lora" weight="semibold" className="text-base">
                  Where simplicity meets precision
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col w-full gap-1">
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[26px]"
              >
                For the First Time, You Can Get Full Control
              </Typography>
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white"
              >
                Choose a template, customize it your way, or let the seller
                tailor it to perfection.
              </Typography>
            </div>
            <div className="image w-full flex flex-col gap-5">
              <NextImage
                src={"/LandingPage/MbaMbaSenyumSection2Mobile.png"}
                alt="Mba Mba Senyum"
                width={350}
                height={291}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover"
              />
              <NextImage
                src={"/LandingPage/MbaMbaSenyumSection2Mobile.png"}
                alt="Mba Mba Senyum"
                width={350}
                height={291}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col w-full gap-1">
              <Typography
                font="Lora"
                variant="h1"
                weight="bold"
                className="text-white text-[26px]"
              >
                Where You Truly Feel at Home
              </Typography>
              <Typography
                font="Lora"
                variant="p"
                weight="medium"
                className="text-white"
              >
                Tailored for a true sense of belonging
              </Typography>
            </div>
            <div className="relative image flex flex-col gap-8 w-full">
              <div className="relative bg-white w-full min-h-[240px] rounded-lg min-[450px]:h-[300px]">
                <NextImage
                  src={"/LandingPage/McLarenMobile.png"}
                  alt="Mc Laren"
                  width={318}
                  height={133}
                  className="rounded-lg relative z-20 top-4 left-[8%] w-[85%]"
                  imgClassName="object-cover w-full"
                />
                <div className="absolute w-full flex justify-center items-center px-4 py-8 bottom-0 bg-[#525B4480] rounded-b-lg">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-base relative top-2 text-center"
                  >
                    Customize it on your own, and pay when you ready to download
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative image flex flex-col gap-8 w-full">
              <div className="relative bg-white w-full min-h-[240px] rounded-lg min-[450px]:h-[300px] ">
                <NextImage
                  src={"/LandingPage/McLarenMobile.png"}
                  alt="Mc Laren"
                  width={318}
                  height={133}
                  className="rounded-lg relative z-20 top-4 left-[8%] w-[85%]"
                  imgClassName="object-cover w-full"
                />
                <div className="absolute w-full flex justify-center items-center px-4 py-8 bottom-0 bg-[#525B4480] rounded-b-lg">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-base relative top-2 text-center"
                  >
                    Niche-Based Personalization
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative image flex flex-col gap-8 w-full">
              <div className="relative bg-white w-full min-h-[240px] rounded-lg min-[450px]:h-[300px]">
                <NextImage
                  src={"/LandingPage/McLarenMobile.png"}
                  alt="Mc Laren"
                  width={318}
                  height={133}
                  className="rounded-lg relative z-20 top-4 left-[8%] w-[85%]"
                  imgClassName="object-cover w-full"
                />
                <div className="absolute w-full flex justify-center items-center px-4 py-8 bottom-0 bg-[#525B4480] rounded-b-lg">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-base relative top-2 text-center"
                  >
                    Connect to sellers for better personalization
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
