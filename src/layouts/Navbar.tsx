"use client";
import Hamburger from "@/components/Hamburger";
import NextImage from "@/components/NextImage";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import UnstyledLink from "@/components/links/UnstyledLink";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";

interface NavMenuProps {
  open: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ open }) => {
  return (
    <div
      className={`absolute flex flex-col justify-between items-center px-4 py-4 z-[90] top-0 pt-20 w-full h-screen bg-[#525B44] shadow-lg transform transition-all duration-200 ease-in-out ${
        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">
            <Typography
              font="Lora"
              weight="semibold"
              className="text-xl text-white"
            >
              Discover Pages
            </Typography>
          </AccordionTrigger>
          <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
            <div className="flex flex-col gap-3">
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Home
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Contents Hub
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Start Selling
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  About Us
                </Typography>
              </UnstyledLink>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">
            <Typography
              font="Lora"
              weight="semibold"
              className="text-xl text-white"
            >
              Help Center
            </Typography>
          </AccordionTrigger>
          <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
            <div className="flex flex-col gap-3">
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Home
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Contents Hub
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Start Selling
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  About Us
                </Typography>
              </UnstyledLink>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">
            <Typography
              font="Lora"
              weight="semibold"
              className="text-xl text-white"
            >
              Package
            </Typography>
          </AccordionTrigger>
          <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
            <div className="flex flex-col gap-3">
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Home
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Contents Hub
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Start Selling
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  About Us
                </Typography>
              </UnstyledLink>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white">
            <Typography
              font="Lora"
              weight="semibold"
              className="text-xl text-white"
            >
              Find More
            </Typography>
          </AccordionTrigger>
          <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
            <div className="flex flex-col gap-3">
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Home
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Contents Hub
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  Start Selling
                </Typography>
              </UnstyledLink>
              <UnstyledLink href={""}>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[#525B44] text-xl hover:font-semibold"
                >
                  About Us
                </Typography>
              </UnstyledLink>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="Button flex flex-col w-full gap-4">
        <Button
          variant="white"
          className="flex w-full justify-center items-center  py-4 lg:py-7"
        >
          <Typography
            variant="p"
            font="Lora"
            weight="semibold"
            className="text-[#525B44]"
          >
            Explore Contents
          </Typography>
        </Button>
        <Button
          variant="white"
          className="flex w-full justify-center items-center  py-4 lg:py-7"
        >
          <Typography
            variant="p"
            font="Lora"
            weight="semibold"
            className="text-[#525B44]"
          >
            Login
          </Typography>
        </Button>
        <Button
          variant="outline"
          className="flex w-full justify-center items-center  py-4 lg:py-7"
        >
          <Typography
            variant="p"
            font="Lora"
            weight="semibold"
            className="text-white"
          >
            Create Account
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="sticky top-0 z-[100] flex w-full justify-between items-center bg-[#525B44] px-4 py-4 lg:px-16">
        <NextImage src="/navbar/Logo.png" alt="logo" width={45} height={42} />
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="relative bottom-2">
            <div className="top-3 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#525B44] p-2 text-sm text-white">
                3
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="file: mt-4 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </section>
      <NavMenu open={open} />
    </>
  );
}
