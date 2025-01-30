import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function FirstSection() {
  return (
    <div className="bg-white w-full py-10 pb-20 px-5 flex flex-col sm:px-16 lg:px-28 sm:py-36 sm:flex-row gap-5 sm:gap-0 items-center justify-center">
      <div className="flex w-full flex-col gap-4 sm:gap-8	">
        <div className="Proven flex flex-row gap-2 items-center justify-start w-full">
          <NextImage
            src="/LandingPage/4UserFoto.png"
            width={60}
            height={22}
            alt="4 User Foto"
          />
          <Typography
            font="Lora"
            variant="h5"
            weight="medium"
            className="text-[#525B44] text-sm sm:text-xs md:text-sm lg:text-xl xl:text-2xl"
          >
            +1500 Users Have Already Proven it
          </Typography>
        </div>
        <Typography
          font="Lora"
          variant="h1"
          weight="bold"
          className="text-[26px]/8 sm:text-xl md:text-2xl lg:text-[32px]/[50px] xl:text-[45px]/[57px] text-black"
        >
          Design Simplified: The Definitive Game Changer in Buying and Selling
          Digital Contents
        </Typography>
        <Typography
          font="Lora"
          variant="p"
          className="text-slate-500 text-xs lg:text-lg xl:text-2xl sm:text-xs md:text-xs"
        >
          From discovering the perfect design to showcasing your creativity, we
          redefine the game in buying and selling templates
        </Typography>
        <div className="button flex flex-row gap-2">
          <Button variant="green" className="px-2 py-0.5 sm:px-4 sm:py-1">
            <Typography
              font="Lora"
              variant="p"
              className="text-white text-[9px] md:text-sm lg:text-lg"
            >
              Explore Now
            </Typography>
          </Button>
          <Button
            variant="outline"
            className="border px-2 py-0.5 border-[#525B44] sm:px-4 sm:py-1"
          >
            <Typography
              font="Lora"
              variant="p"
              className="text-[#525B44] text-[9px] md:text-sm lg:text-lg"
            >
              Start Selling
            </Typography>
          </Button>
        </div>
      </div>
      <div className="image relative w-full min-[500px]:w-[90%] sm:w-full lg:w-[80%] xl:w-[70%]">
        <NextImage
          src="/LandingPage/Section1Mobile.png"
          width={221}
          height={190}
          alt="Section1Foto"
          className="absolute -right-5 w-full min-[500px]:-right-11 sm:-right-16 lg:-right-28 sm:-top-40 md:-top-40 lg:-top-48 xl:-top-56"
          imgClassName="object-cover w-full"
        />
      </div>
    </div>
  );
}
