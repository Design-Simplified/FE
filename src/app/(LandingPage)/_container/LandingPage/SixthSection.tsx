"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { FormProvider, useForm } from "react-hook-form";

export default function SixthSection() {
  const methods = useForm();
  return (
    <div className="w-full relative py-16 px-8 sm:px-20 md:px-32 lg:px-72 sm:py-40 sm:min-h-[800px]">
      <div className="w-full flex flex-col gap-9">
        <div className="title w-full flex flex-col gap-5 lg:gap-9 sm:gap-6">
          <Typography
            font="Lora"
            weight="semibold"
            className="text-lg text-[#393F2F] text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl"
          >
            Get the Good Stuff ❤️
          </Typography>
          <Typography
            font="Lora"
            weight="medium"
            className="text-xs text-[#393F2F] text-center xl:text-2xl lg:text-xl md:text-lg sm:text-base"
          >
            Stay in the loop with exclusive tips, insider deals, and the latest
            updates delivered straight to your inbox. Don’t miss out, subscribe
            now!
          </Typography>
        </div>
        <div className="subscribeButton w-full flex justify-center items-center xl:mt-32 lg:mt-28 md:mt-24 sm:mt-20">
          <FormProvider {...methods}>
            <form className="w-[70%] flex flex-row gap-2 justify-center items-center sm:w-[80%]">
              <Input
                id="Email"
                type="email"
                placeholder="Enter Your Email"
                className="placeholder:text-[9px] text-[9px] placeholder:text-slate-700 xl:placeholder:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base lg:placeholder:text-xl md:placeholder:text-lg sm:placeholder:text-base"
              />
              <Button variant="green" type="submit" className="py-1">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[8px]  text-white xl:text-2xl lg:text-xl md:text-lg sm:text-base sm:p-1 lg:p-1.5"
                >
                  Subscribe
                </Typography>
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <section className="absolute w-full left-0 top-0 -z-[1000] sm:min-h-[800px]">
        <NextImage
          src="/LandingPage/bgSection6Mobile.png"
          alt="Good Stuff"
          width={390}
          height={337}
          className="rounded-lg w-full absolute top-0 left-0 sm:min-h-[900px]"
          imgClassName="w-full object-cover sm:min-h-[950px]"
        />
      </section>
    </div>
  );
}
