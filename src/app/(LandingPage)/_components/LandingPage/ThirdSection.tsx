import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function ThirdSection() {
  return (
    <div className="relative flex py-20 px-5 items-center justify-center w-full sm:px-12 sm:pb-36 sm:py-28">
      <div className="isi flex flex-col gap-12 items-start justify-center w-full">
        <div className="atas flex flex-col items-center justify-center gap-7 w-full sm:items-start sm:gap-16">
          <Typography
            font="Lora"
            weight="bold"
            className="text-[26px]/[32px] md:text-3xl sm:text-2xl lg:text-[36px]/[48px] xl:text-[45px]/[56px]"
          >
            Selling Your Templates Shouldn’t Feel Like a Battle
          </Typography>
          <div className="3image flex flex-col gap-4 justify-center w-full sm:flex-row sm:gap-10 sm:justify-between sm:items-start">
            <div className="each flex flex-col gap-4 w-full justify-center items-center">
              <NextImage
                src={"/LandingPage/MbakSenyum2Mobile.png"}
                alt="Third Section 1"
                width={318}
                height={133}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover sm:min-h-[250px] md:min-h-[300px] lg:min-h-[450px]"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl"
              >
                Start selling for completely free
              </Typography>
            </div>
            <div className="each flex flex-col gap-4 w-full justify-center items-center">
              <NextImage
                src={"/LandingPage/MbakSenyum2Mobile.png"}
                alt="Third Section 1"
                width={318}
                height={133}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover sm:min-h-[250px] md:min-h-[300px] lg:min-h-[450px]"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl"
              >
                No more dull, drawn-out approvals!
              </Typography>
            </div>
            <div className="each flex flex-col gap-4 w-full justify-center items-center">
              <NextImage
                src={"/LandingPage/MbakSenyum2Mobile.png"}
                alt="Third Section 1"
                width={318}
                height={133}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover sm:min-h-[250px] md:min-h-[300px] lg:min-h-[450px]"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl"
              >
                Beginner friendly
              </Typography>
            </div>
          </div>
        </div>
        <div className="bawah flex flex-col gap-7 justify-center w-full items-center sm:items-start">
          <Typography
            font="Lora"
            weight="bold"
            className="text-[26px]/[32px] md:text-3xl sm:text-2xl lg:text-[36px]/[48px] xl:text-[45px]/[56px]"
          >
            Help Buyers Customize and Earn More
          </Typography>
          <NextImage
            src={"/LandingPage/MbakSenyum2Mobile.png"}
            alt="Third Section 1"
            width={351}
            height={332}
            className="rounded-lg w-full"
            imgClassName="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
