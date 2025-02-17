"use client";
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { useRouter } from "next/navigation";

export default function SeventhSection() {
  const router = useRouter();
  return (
    <section className="w-full relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 xl:px-28 xl:py-32 py-7 px-10 lg:px-24 md:px-20 sm:px-16 lg:py-28 md:py-24 sm:py-16">
      <div className="w-[80%] sm:w-1/2 flex flex-col items-start justify-center gap-8 xl:gap-24 lg:gap-20 md:gap-16 sm:gap-12">
        <div className="w-full flex flex-col gap-2.5 xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 items-start">
          <div className="w-full flex flex-col gap-2.5 lg:gap-4 sm:gap-3  items-start">
            <Typography
              variant="h3"
              font="Lora"
              weight="semibold"
              className="text-[#525B44] text-[10px] xl:text-2xl lg:text-xl md:text-base sm:text-sm"
            >
              +1500 designers have joined
            </Typography>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Typography
                variant="h1"
                font="Lora"
                weight="bold"
                className="text-[#000000] text-xl xl:text-4xl lg:text-3xl md:text-2xl"
              >
                Now, it’s
              </Typography>
              <Typography
                variant="h1"
                font="Lora"
                weight="bold"
                className="text-[#525B44] text-xl xl:text-4xl lg:text-3xl md:text-2xl"
              >
                your Turn
              </Typography>
            </div>
          </div>
          <Typography
            variant="p"
            font="Lora"
            weight="regular"
            className="text-[#000000CC] text-[10px] xl:text-2xl lg:text-xl md:text-base sm:text-sm"
          >
            Launch your store in minutes and turn your creativity into profit
          </Typography>
        </div>
        <Button
          variant="green"
          type="button"
          className="py-2 px-3 rounded-md sm:px-5 sm:py-4 sm:rounded-xl"
          onClick={() => router.push("/sign-in")}
        >
          <Typography
            variant="h4"
            weight="medium"
            className="text-white text-[9px] xl:text-xl lg:text-lg md:text-base sm:text-sm"
          >
            Get Started
          </Typography>
        </Button>
      </div>
      <NextImage
        src="/ContentsHub/YourTurn.png"
        alt="Your Turn Image"
        width={235}
        height={192}
        className="relative left-1/2 -translate-x-1/3 -translate-y-1/4 sm:translate-x-0 sm:left-auto sm:translate-y-0 sm:right-auto sm:top-auto xl:w-[451px] lg:w-[397px] md:w-[343px] sm:w-[289px]"
        imgClassName="w-full h-full object-cover"
      />
    </section>
  );
}
