"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { FormProvider, useForm } from "react-hook-form";

export default function SixthSection() {
  const methods = useForm();
  return (
    <div className="w-full relative py-16 px-8">
      <div className="w-full flex flex-col gap-9">
        <div className="title w-full flex flex-col gap-5">
          <Typography font="Lora" weight="bold" className="text-lg text-center">
            Get the Good Stuff ❤️
          </Typography>
          <Typography
            font="Lora"
            weight="medium"
            className="text-xs text-center"
          >
            Stay in the loop with exclusive tips, insider deals, and the latest
            updates delivered straight to your inbox. Don’t miss out, subscribe
            now!
          </Typography>
        </div>
        <div className="subscribeButton w-full flex justify-center items-center">
          <FormProvider {...methods}>
            <form className="w-[70%] flex flex-row gap-2 justify-center items-center">
              <Input
                id="Email"
                type="email"
                placeholder="Enter Your Email"
                className="placeholder:text-[9px] text-[9px]"
              />
              <Button variant="green" type="submit" className="py-1">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[8px]  text-white"
                >
                  Subscribe
                </Typography>
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <section className="absolute w-full left-0 top-0 -z-[1000]">
        <NextImage
          src="/LandingPage/bgSection6Mobile.png"
          alt="Good Stuff"
          width={390}
          height={337}
          className="rounded-lg w-full absolute top-0 left-0"
          imgClassName="w-full object-cover"
        />
      </section>
    </div>
  );
}
