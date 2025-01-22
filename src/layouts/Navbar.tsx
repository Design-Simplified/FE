"use client";
import Hamburger from "@/components/Hamburger";
import NextImage from "@/components/NextImage";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import UnstyledLink from "@/components/links/UnstyledLink";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import clsxm from "@/lib/clsxm";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/NavMenu";

interface NavMobileMenuProps {
  open: boolean;
  className?: string;
}

interface NavMobileProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  className?: string;
}

const ButtonName = ["Home", "Contents Hub", "Start Selling", "About Us"];
const TabName = ["Discover Pages", "Help Center", "Package", "Find More"];

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({ open, className }) => {
  return (
    <div
      className={clsxm(
        "absolute flex flex-col justify-between items-center px-4 py-4 z-[90] top-0 pt-20 w-full h-screen bg-[#525B44] shadow-lg transform transition-all duration-200 ease-in-out",
        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        className,
      )}
    >
      <Accordion type="single" collapsible className="w-full ">
        {TabName.map((item, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white">
                <Typography
                  font="Lora"
                  weight="medium"
                  className="text-xl text-white"
                >
                  {item}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
                <div className="flex flex-col gap-3">
                  {ButtonName.map((item, index) => {
                    return (
                      <UnstyledLink key={index} href={""}>
                        <Typography
                          font="Lora"
                          weight="regular"
                          className="text-[#525B44] text-xl hover:font-semibold"
                        >
                          {item}
                        </Typography>
                      </UnstyledLink>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
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

const NavMobile: React.FC<NavMobileProps> = ({ open, setOpen, className }) => {
  return (
    <>
      <NextImage
        src="/navbar/Logo.svg"
        alt="logo"
        width={45}
        height={42}
        className={className}
      />
      <div
        className={clsxm(
          "flex flex-row gap-4 justify-center items-center",
          className,
        )}
      >
        <div className="relative bottom-2">
          <div className="top-3 absolute left-3">
            <Typography
              variant="p"
              font="Lora"
              className="flex h-2 w-2 items-center justify-center rounded-full bg-[#525B44] p-2 text-sm text-white"
            >
              3
            </Typography>
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
    </>
  );
};

const NavDesktop: React.FC = () => {
  return (
    <>
      <div className="desktopatas hidden sm:flex flex-row justify-between items-center w-full">
        <div className="logoNtitle flex flex-row gap-4 justify-center items-center">
          <NextImage src="/navbar/Logo.svg" alt="logo" width={74} height={64} />
          <Typography
            font="Lora"
            weight="bold"
            className="text-white sm:text-xl md:text-xl relative top-1"
          >
            DESIGN SIMPLIFIED
          </Typography>
        </div>
        <div className="exploreNcart flex flex-row gap-6 justify-center items-center">
          <Button
            variant="white"
            className="flex w-full justify-center items-center py-4"
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
          <div className="cart relative bottom-2">
            <div className="top-3 absolute left-9">
              <Typography
                variant="p"
                font="Lora"
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[#525B44] p-4 md:text-3xl text-white"
              >
                3
              </Typography>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="file: mt-4 h-14 w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="desktopbawah hidden sm:flex flex-row justify-between items-center w-full">
        <NavigationMenu className="w-fit">
          <NavigationMenuList>
            {TabName.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={index}
                  className="flex flex-col relative"
                >
                  <NavigationMenuTrigger>
                    <Typography
                      font="Lora"
                      weight="medium"
                      className="text-white lg:text-xl"
                    >
                      {item}
                    </Typography>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {ButtonName.map((item, index) => {
                      return (
                        <UnstyledLink key={index} href={""} className="w-max">
                          <Typography
                            font="Lora"
                            weight="regular"
                            className="text-white lg:text-xl hover:font-semibold"
                          >
                            {item}
                          </Typography>
                        </UnstyledLink>
                      );
                    })}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex min-[862px]:flex-row sm:flex-col gap-4 justify-center items-center">
          <UnstyledLink href={""}>
            <Typography
              font="Lora"
              weight="semibold"
              className="text-white sm:text-xs min-[664px]:text-base lg:text-xl hover:text-slate-200"
            >
              Create Account
            </Typography>
          </UnstyledLink>
          <div className="min-[862px]:w-7 h-[0px] min-[862px]:rotate-90 sm:rotate-0 sm:w-24 min-[664px]:w-32 border border-white"></div>
          <UnstyledLink href={""}>
            <Typography
              font="Lora"
              weight="bold"
              className="text-white sm:text-xs min-[664px]:text-base lg:text-xl  hover:text-slate-200"
            >
              Login
            </Typography>
          </UnstyledLink>
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="sticky top-0 z-[100] flex sm:flex-col sm:gap-6 min-[664px]:gap-5 w-full justify-between items-center md:justify-center bg-[#525B44] px-4 py-4 lg:px-10 lg:py-6">
        <NavMobile open={open} setOpen={setOpen} className="sm:hidden" />
        <NavDesktop />
      </section>
      <NavMobileMenu open={open} className="sm:hidden" />
    </>
  );
}
