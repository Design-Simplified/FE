import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function FirstSection() {
  return (
    <div className="bg-[#FFF] w-full py-10 pb-20 px-5 flex flex-col sm:px-16 lg:px-28 sm:py-36 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 sm:flex-row gap-5 sm:gap-0 items-center justify-center">
      <div className="flex w-full flex-col gap-4 sm:gap-8	">
        <div className="Proven flex flex-row gap-2 sm:gap-4 items-center justify-start w-full">
          <NextImage
            src="/SellerPage/3UserFoto.png"
            width={49}
            height={22}
            className="sm:w-20"
            imgClassName="object-cover w-full"
            alt="3 User Foto"
          />
          <Typography
            font="Lora"
            variant="h5"
            weight="semibold"
            className="text-[#525B44] text-[11px] sm:text-sm md:text-md lg:text-lg xl:text-xl"
          >
            Over 1200 Sellers Are Growing Their Business Here
          </Typography>
        </div>
        <Typography
          font="Lora"
          variant="h1"
          weight="bold"
          className="max-w-[60%] sm:max-w-max text-[20px]/7 sm:text-2xl md:text-3xl lg:text-[36px]/[48px] xl:text-[40px]/[52px] text-black"
        >
          Start Selling Now For Completely Free!
        </Typography>
        <Typography
          font="Lora"
          variant="p"
          className="text-slate-500 text-[10px] lg:text-lg xl:text-xl sm:text-sm md:text-base"
        >
          You can start selling with us whether you’re a seasoned professional
          or just starting out. We’re open to everyone!
        </Typography>
        <div className="button flex flex-row gap-2">
          <Button variant="green" className="px-2 py-0.5 sm:px-4 sm:py-3">
            <Typography
              font="Lora"
              variant="p"
              weight="semibold"
              className="text-white text-[9px] sm:text-xs md:text-sm lg:text-xl xl:text-xl"
            >
              Get Started
            </Typography>
          </Button>
        </div>
      </div>
      <div className="image relative w-full min-[500px]:w-[90%] sm:w-full lg:w-[80%] xl:w-[70%]">
        <NextImage
          src="/SellerPage/StickManArrow.png"
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
