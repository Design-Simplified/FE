"use client";
import Hamburger from "@/components/Hamburger";
import NextImage from "@/components/NextImage";
import React, { useEffect, useState } from "react";
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
import getUser from "@/api/user/getUser";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { BsCart3 } from "react-icons/bs";

interface NavMobileMenuProps {
  open: boolean;
  className?: string;
  Username: string | null;
  Email: string | null;
}

interface NavMobileProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  className?: string;
  Username: string | null;
}

interface NavDesktopProps {
  Username: string | null;
}

const NavMenuList = [
  {
    title: "Discover Pages",
    items: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Contents Hub",
        link: "/contents-hub",
      },
      {
        title: "Start Selling",
        link: "/seller-page",
      },
      {
        title: "About Us",
        link: "/about-us",
      },
    ],
  },
  {
    title: "Help Center",
    items: [
      {
        title: "Help Forum",
        link: "/help-forum",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Packages",
    items: [
      {
        title: "For Buyer",
        link: "/package-buyer",
      },
      {
        title: "For Seller",
        link: "/package-seller",
      },
    ],
  },
  {
    title: "Find More",
    items: [
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Newsletter",
        link: "/newsletter",
      },
      {
        title: "Support Us",
        link: "/support-us",
      },
    ],
  },
];

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  open,
  className,
  Username,
  Email,
}) => {
  const router = useRouter();
  return (
    <div
      className={clsxm(
        "absolute flex flex-col justify-between items-center px-4 py-4 top-0 left-0 pt-28 -z-[100] w-full h-screen bg-[#525B44] shadow-lg transform transition-all duration-200 ease-in-out overflow-scroll",
        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        className,
      )}
    >
      <Accordion type="single" collapsible className="w-full ">
        {NavMenuList.map((item, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white">
                <Typography
                  font="Lora"
                  weight="medium"
                  className="text-base text-white"
                >
                  {item.title}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3 mb-4">
                <div className="flex flex-col gap-3">
                  {item.items.map((item, index) => {
                    return (
                      <UnstyledLink key={index} href={item.link}>
                        <Typography
                          font="Lora"
                          weight="regular"
                          className="text-[#525B44] text-base hover:font-semibold"
                        >
                          {item.title}
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
      {Username && Email ? (
        <>
          <div className="authenticated w-full flex flex-col gap-4 justify-center items-center">
            <div className="divider w-full h-0 border border-white"></div>
            <div className="w-full flex flex-row gap-2 justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M26 50.5156C38.5645 50.5156 48.75 40.1342 48.75 27.3281C48.75 14.522 38.5645 4.14062 26 4.14062C13.4355 4.14062 3.25 14.522 3.25 27.3281C3.25 40.1342 13.4355 50.5156 26 50.5156Z"
                  fill="black"
                />
                <path
                  d="M26 49.6875C38.5645 49.6875 48.75 39.3061 48.75 26.5C48.75 13.6939 38.5645 3.3125 26 3.3125C13.4355 3.3125 3.25 13.6939 3.25 26.5C3.25 39.3061 13.4355 49.6875 26 49.6875Z"
                  fill="white"
                />
                <g opacity="0.2">
                  <path
                    d="M26 12.4219C22.8582 12.4219 20.3125 15.0177 20.3125 18.2188C20.3125 21.4198 22.8582 24.0156 26 24.0156C29.1418 24.0156 31.6875 21.4198 31.6875 18.2188C31.6875 15.0177 29.1418 12.4219 26 12.4219Z"
                    fill="black"
                  />
                  <path
                    d="M26 28.1563C14.6261 28.1632 14.625 35.4947 14.625 35.4947V38.476C14.625 38.476 16.725 43.0625 26 43.0625C35.275 43.0625 37.375 38.476 37.375 38.476V35.4947C37.375 35.4947 37.375 28.1517 26.0023 28.1563H26Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M26 11.5938C22.8582 11.5938 20.3125 14.1896 20.3125 17.3906C20.3125 20.5917 22.8582 23.1875 26 23.1875C29.1418 23.1875 31.6875 20.5917 31.6875 17.3906C31.6875 14.1896 29.1418 11.5938 26 11.5938Z"
                  fill="#525B44"
                />
                <path
                  d="M26 27.3281C14.6261 27.3351 14.625 34.6666 14.625 34.6666V37.6478C14.625 37.6478 16.725 42.2344 26 42.2344C35.275 42.2344 37.375 37.6478 37.375 37.6478V34.6666C37.375 34.6666 37.375 27.3235 26.0023 27.3281H26Z"
                  fill="#525B44"
                />
                <path
                  opacity="0.2"
                  d="M26 3.3125C19.9663 3.3125 14.1798 5.75546 9.91332 10.104C5.64687 14.4525 3.25 20.3503 3.25 26.5C3.25359 26.6359 3.25835 26.7718 3.26428 26.9076C3.37238 20.8336 5.81493 15.0454 10.0666 10.7878C14.3184 6.53028 20.0396 4.14344 26 4.14062C31.9593 4.14513 37.6789 6.53272 41.9293 10.7901C46.1796 15.0475 48.6213 20.8347 48.7294 26.9076C48.7374 26.7718 48.7443 26.6359 48.75 26.5C48.75 20.3503 46.3531 14.4525 42.0867 10.104C37.8202 5.75546 32.0337 3.3125 26 3.3125Z"
                  fill="#525B44"
                />
              </svg>
              <div className="w-full flex flex-col gap-0.5 justify-center items-start">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-base text-white"
                >
                  {Username}
                </Typography>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[13px] text-white"
                >
                  {Email}
                </Typography>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Button flex flex-col w-full gap-4">
            <Button
              variant="white"
              className="flex w-full justify-center items-center  py-4 lg:py-7"
              leftIcon={SearchIcon}
              leftIconClassName="w-3 h-3"
              onClick={() => router.push("/explore-contents")}
            >
              <Typography
                variant="p"
                weight="semibold"
                font="Lora"
                className="text-[#525B44]"
              >
                Explore Contents
              </Typography>
            </Button>
            <Button
              variant="white"
              className="flex w-full justify-center items-center  py-4 lg:py-7"
              onClick={() => router.push("/sign-in")}
            >
              <Typography variant="p" font="Lora" className="text-[#525B44]">
                Login
              </Typography>
            </Button>
            <Button
              variant="outline"
              className="flex w-full justify-center items-center  py-4 lg:py-7"
              onClick={() => router.push("/sign-up")}
            >
              <Typography variant="p" font="Lora" className="text-white">
                Create Account
              </Typography>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const NavMobile: React.FC<NavMobileProps> = ({
  open,
  setOpen,
  className,
  Username,
}) => {
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
        {Username !== null && (
          <>
            <div className="relative">
              <div className="absolute -top-3 left-4">
                <Typography
                  variant="p"
                  font="Lora"
                  className="flex h-2 w-2 items-center justify-center rounded-full bg-[#525B44] p-2 text-[8px] text-white"
                >
                  3
                </Typography>
              </div>
              <NextImage
                src="/navbar/Chat.svg"
                alt="chat"
                width={24}
                height={24}
                imgClassName="w-auto h-auto"
              />
            </div>
          </>
        )}

        <div className="relative bottom-2">
          <div className="top-2 absolute left-2.5">
            <Typography
              variant="p"
              font="Lora"
              className="flex h-1 w-1.5 items-center justify-center rounded-full bg-[#525B44] p-2 text-[10px] text-white"
            >
              3
            </Typography>
          </div>
          <BsCart3 className="file: mt-4 h-5 w-5 text-white" />
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

const NavDesktop: React.FC<NavDesktopProps> = ({ Username }) => {
  return (
    <>
      <div className="desktopatas hidden sm:flex flex-row justify-between items-center w-full">
        <div className="logoNtitle flex flex-row gap-2 justify-center items-center">
          <NextImage
            src="/navbar/Logo.svg"
            alt="logo"
            width={60}
            height={60}
            imgClassName="object-cover"
          />
          <Typography
            font="Lora"
            weight="bold"
            className="text-white sm:text-lg md:text-lg relative top-1"
          >
            DESIGN SIMPLIFIED
          </Typography>
        </div>
        <div className="exploreNcart flex flex-row gap-6 justify-center items-center">
          {Username && (
            <div className="relative">
              <div className="absolute -top-3 left-4">
                <Typography
                  variant="p"
                  font="Lora"
                  className="flex h-2 w-2.5 items-center justify-center rounded-full bg-[#525B44] p-2 sm:text-[12px] md:text-[12px] text-white"
                >
                  3
                </Typography>
              </div>
              <NextImage
                src="/navbar/Chat.svg"
                alt="chat"
                width={24}
                height={24}
                imgClassName="w-auto h-auto"
              />
            </div>
          )}
          <div className="cart relative bottom-2">
            <div className="top-2.5 absolute left-3.5">
              <Typography
                variant="p"
                font="Lora"
                className="flex h-2 w-2.5 items-center justify-center rounded-full bg-[#525B44] p-2 sm:text-[12px] md:text-[12px] text-white"
              >
                3
              </Typography>
            </div>

            <BsCart3 className="file: mt-4 h-6 w-6 text-white" />
          </div>
          <Button
            variant="white"
            className="flex w-full justify-center items-center py-3 px-2.5"
            leftIcon={SearchIcon}
            leftIconClassName="w-4 h-4"
          >
            <Typography
              variant="p"
              font="Lora"
              weight="semibold"
              className="text-[#525B44] sm:text-sm md:text-sm"
            >
              Explore Contents
            </Typography>
          </Button>
        </div>
      </div>
      <div className="desktopbawah hidden sm:flex flex-row justify-between items-center w-full">
        <NavigationMenu className="w-fit">
          <NavigationMenuList>
            {NavMenuList.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={index}
                  className="flex flex-col relative"
                >
                  <NavigationMenuTrigger>
                    <Typography
                      font="Lora"
                      weight="medium"
                      className="text-white sm:text-base md:text-base lg:text-base"
                    >
                      {item.title}
                    </Typography>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.items.map((item, index) => {
                      return (
                        <UnstyledLink
                          key={index}
                          className="w-max"
                          href={item.link}
                        >
                          <Typography
                            font="Lora"
                            weight="regular"
                            className="text-white sm:text-base md:text-base lg:text-base hover:font-semibold"
                          >
                            {item.title}
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
        <div className="flex min-[862px]:flex-row sm:flex-col sm:gap-2 md:gap-4 justify-center items-center">
          {Username ? (
            <>
              <div className="w-full flex sm:flex-col md:flex-row gap-2 justify-center items-center">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-white sm:text-xs md:text-xs lg:text-base text-center"
                >
                  Hi, {Username}
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M18.5 34.3125C27.4401 34.3125 34.6875 27.261 34.6875 18.5625C34.6875 9.86402 27.4401 2.8125 18.5 2.8125C9.55989 2.8125 2.3125 9.86402 2.3125 18.5625C2.3125 27.261 9.55989 34.3125 18.5 34.3125Z"
                    fill="black"
                  />
                  <path
                    d="M18.5 33.75C27.4401 33.75 34.6875 26.6985 34.6875 18C34.6875 9.30152 27.4401 2.25 18.5 2.25C9.55989 2.25 2.3125 9.30152 2.3125 18C2.3125 26.6985 9.55989 33.75 18.5 33.75Z"
                    fill="white"
                  />
                  <g opacity="0.2">
                    <path
                      d="M18.5 8.4375C16.2645 8.4375 14.4531 10.2007 14.4531 12.375C14.4531 14.5493 16.2645 16.3125 18.5 16.3125C20.7355 16.3125 22.5469 14.5493 22.5469 12.375C22.5469 10.2007 20.7355 8.4375 18.5 8.4375Z"
                      fill="black"
                    />
                    <path
                      d="M18.5 19.125C10.4071 19.1297 10.4062 24.1096 10.4062 24.1096V26.1346C10.4062 26.1346 11.9005 29.25 18.5 29.25C25.0995 29.25 26.5938 26.1346 26.5938 26.1346V24.1096C26.5938 24.1096 26.5938 19.1219 18.5016 19.125H18.5Z"
                      fill="black"
                    />
                  </g>
                  <path
                    d="M18.5 7.875C16.2645 7.875 14.4531 9.63821 14.4531 11.8125C14.4531 13.9868 16.2645 15.75 18.5 15.75C20.7355 15.75 22.5469 13.9868 22.5469 11.8125C22.5469 9.63821 20.7355 7.875 18.5 7.875Z"
                    fill="#525B44"
                  />
                  <path
                    d="M18.5 18.5625C10.4071 18.5672 10.4062 23.5471 10.4062 23.5471V25.5721C10.4062 25.5721 11.9005 28.6875 18.5 28.6875C25.0995 28.6875 26.5938 25.5721 26.5938 25.5721V23.5471C26.5938 23.5471 26.5938 18.5594 18.5016 18.5625H18.5Z"
                    fill="#525B44"
                  />
                  <path
                    opacity="0.2"
                    d="M18.5 2.25C14.2068 2.25 10.0895 3.90937 7.05371 6.86307C4.01796 9.81677 2.3125 13.8228 2.3125 18C2.31505 18.0923 2.31844 18.1846 2.32266 18.2769C2.39958 14.1511 4.13755 10.2195 7.1628 7.32759C10.1881 4.43566 14.259 2.81441 18.5 2.8125C22.7403 2.81556 26.81 4.43732 29.8343 7.32913C32.8586 10.2209 34.5959 14.1519 34.6728 18.2769C34.6785 18.1846 34.6834 18.0923 34.6875 18C34.6875 13.8228 32.982 9.81677 29.9463 6.86307C26.9105 3.90937 22.7932 2.25 18.5 2.25Z"
                    fill="#525B44"
                  />
                </svg>
              </div>
            </>
          ) : (
            <>
              <UnstyledLink href={"/sign-up"}>
                <Typography
                  font="Lora"
                  className="text-white text-center sm:text-[10px] min-[664px]:text-xs lg:text-base hover:text-slate-200 hover:font-bold"
                >
                  Create Account
                </Typography>
              </UnstyledLink>
              <div className="min-[862px]:w-7 h-[0px] min-[862px]:rotate-90 sm:rotate-0 sm:w-16 min-[664px]:w-28 border border-white"></div>
              <UnstyledLink href={"/sign-in"}>
                <Typography
                  font="Lora"
                  className="text-white sm:text-[10px] min-[664px]:text-xs lg:text-base  hover:text-slate-200 hover:font-bold"
                >
                  Login
                </Typography>
              </UnstyledLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { getUserData } = getUser();
  console.log(getUserData);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]); // use effect untuk mengatur overflow hidden ketika hamburger di klik

  return (
    <>
      <section className="sticky top-0 z-[2000] flex sm:flex-col sm:gap-6 min-[664px]:gap-7 w-full justify-between items-center md:justify-center bg-[#525B44] px-4 py-4 lg:px-10 lg:py-6">
        <NavMobile
          open={open}
          setOpen={setOpen}
          Username={getUserData?.data.username ?? null}
          className="sm:hidden"
        />
        <NavDesktop Username={getUserData?.data.username ?? null} />
        <NavMobileMenu
          open={open}
          Username={getUserData?.data.username ?? null}
          Email={getUserData?.data.email ?? null}
          className="sm:hidden"
        />
      </section>
    </>
  );
}
