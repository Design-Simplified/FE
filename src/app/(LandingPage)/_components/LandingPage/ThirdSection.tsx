import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function ThirdSection() {
  return (
    <div className="relative flex py-20 px-5 items-center justify-center w-full">
      <div className="isi flex flex-col gap-12 items-start justify-center w-full">
        <div className="atas flex flex-col items-center justify-center gap-7 w-full">
          <Typography font="Lora" weight="bold" className="text-[26px]/[32px] ">
            Selling Your Templates Shouldn’t Feel Like a Battle
          </Typography>
          <div className="3image flex flex-col gap-4 justify-center w-full">
            <div className="each flex flex-col gap-4 w-full justify-center items-center">
              <NextImage
                src={"/LandingPage/MbakSenyum2Mobile.png"}
                alt="Third Section 1"
                width={318}
                height={133}
                className="rounded-lg w-full"
                imgClassName="w-full object-cover"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center"
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
                imgClassName="w-full object-cover"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center"
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
                imgClassName="w-full object-cover"
              />
              <Typography
                font="Lora"
                weight="regular"
                className="text-lg text-center"
              >
                Beginner friendly
              </Typography>
            </div>
          </div>
        </div>
        <div className="bawah flex flex-col gap-7 justify-center w-full items-center">
          <Typography font="Lora" weight="bold" className="text-[26px]/[32px] ">
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
