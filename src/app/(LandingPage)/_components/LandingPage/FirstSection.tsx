import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function FirstSection() {
  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col gap-5 items-center justify-center">
      <div className="flex w-full flex-col gap-4">
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
            weight="semibold"
            className="text-[#525B44] text-sm"
          >
            +1500 Users Have Already Proven it
          </Typography>
        </div>
        <Typography
          font="Lora"
          variant="h1"
          weight="bold"
          className="text-[26px]/8"
        >
          The Definitive Game Changer in Buying and Selling Templates.
        </Typography>
        <Typography
          font="Lora"
          variant="p"
          weight="medium"
          className="text-slate-500"
        >
          From discovering the perfect design to showcasing your creativity, we
          redefine the game in buying and selling templates.
        </Typography>
        <div className="button flex flex-row gap-2">
          <Button variant="green">
            <Typography
              font="Lora"
              variant="p"
              weight="semibold"
              className="text-white"
            >
              Explore Now
            </Typography>
          </Button>
          <Button variant="outline" className="border border-black">
            <Typography
              font="Lora"
              variant="p"
              weight="semibold"
              className="text-black"
            >
              Start Selling
            </Typography>
          </Button>
        </div>
      </div>
      <div className="image relative w-full">
        <NextImage
          src="/LandingPage/Section1Mobile.png"
          width={221}
          height={190}
          alt="Section1Foto"
          className="absolute -right-5 w-[56%]"
          imgClassName="object-cover w-full"
        />
      </div>
    </div>
  );
}
