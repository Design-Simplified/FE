"use client";
import IconButton from "@/components/buttons/IconButton";
import NavUsersProfile from "./components/NavUsersProfile";
import { SlPencil } from "react-icons/sl";
import Typography from "@/components/Typography";
import NextImage from "@/components/NextImage";
import useUserStore from "@/store/userStore";
import { redirect, useRouter } from "next/navigation";
import getUser from "@/api/user/getUser";
import { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "@/components/buttons/Button";

const AccountPage = [
  {
    title: "Transaction History",
    icon: "/UsersProfile/transactionHistory.svg",
    href: "/users-profile/transaction-history",
  },
  {
    title: "My Favourite",
    icon: "/UsersProfile/myFavourite.svg",
    href: "/users-profile/my-favourite",
  },
  {
    title: "Account Setting",
    icon: "/UsersProfile/accountSetting.svg",
    href: "/users-profile/account-setting",
  },
  {
    title: "My Activities",
    icon: "/UsersProfile/myActivities.svg",
    href: "/users-profile/my-activities",
  },
  {
    title: "My Coupons",
    icon: "/UsersProfile/myCoupons.png",
    href: "/users-profile/my-coupons",
  },
];

export default function MyProfilePages() {
  const router = useRouter();
  const { userData } = useUserStore();
  const { getUserData, refetch } = getUser();
  useEffect(() => {
    refetch();
  }, []);
  if (getUserData?.data.email === null && userData.email === null)
    return redirect("/sign-in");
  else
    return (
      <>
        <NavUsersProfile onClick={() => router.back()} title="My Profile" />
        <main className="w-full relative background-gray xl:pt-40 lg:pt-32 md:pt-28 sm:pt-20  pt-16 flex flex-col gap-2 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 min-h-screen max-h-screen">
          <div className="w-full flex flex-row gap-10 justify-between items-center px-3 xl:px-8 lg:px-7 md:px-6 sm:px-5 py-4 xl:py-7 lg:py-6 md:py-5 bg-white">
            <div className="w-full flex flex-row gap-3 xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 justify-start items-center">
              {userData?.photoProfile || getUserData?.data.photoProfile ? (
                <>
                  <NextImage
                    src={
                      (process.env.NEXT_PUBLIC_IMAGE_URL || "") +
                      (userData?.photoProfile || getUserData?.data.photoProfile)
                    }
                    alt="profile"
                    width={52}
                    height={53}
                    serverStaticImg={true}
                    className="xl:w-20 lg:w-[73px] md:w-[66px] sm:w-[60px]"
                    imgClassName="object-cover w-full h-full rounded-full"
                  />
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                  className="xl:w-20 lg:w-[73px] md:w-[66px] sm:w-[60px]"
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
              )}

              <div className="w-full flex flex-col gap-1.5  lg:gap-4 md:gap-3 sm:gap-2 justify-center items-start">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-[13px] xl:text-2xl lg:text-xl md:text-lg sm:text-base text-black"
                >
                  {userData?.username || getUserData?.data.username}
                </Typography>
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[11px] xl:text-xl lg:text-lg md:text-base sm:text-sm  text-black"
                >
                  {userData?.email || getUserData?.data.email}
                </Typography>
              </div>
            </div>
            <IconButton variant="white" icon={SlPencil} />
          </div>
          <Typography
            font="Lora"
            variant="h3"
            weight="semibold"
            className="text-[13px] xl:text-2xl lg:text-xl md:text-lg sm:text-base text-black px-2 xl:px-7 lg:px-6 md:px-5 sm:px-4"
          >
            Account
          </Typography>
          <div className="w-full flex flex-col gap-1 background-gray">
            {AccountPage.map((item, index) => (
              <>
                <Button
                  key={index}
                  onClick={() => router.push(item.href)}
                  variant="white"
                  className="w-full flex flex-row gap-10 justify-between items-center bg-white px-2 xl:px-7 lg:px-6 md:px-5 sm:px-4 lg:py-5 sm:py-4 py-3.5 group"
                >
                  <div className="flex flex-row lg:gap-3 sm:gap-2 gap-1.5 justify-center items-center">
                    <NextImage
                      src={item.icon}
                      alt="transaction"
                      width={24}
                      height={24}
                      imgClassName="w-full h-full "
                    />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-xs xl:text-2xl lg:text-xl md:text-lg sm:text-base text-black group-hover:font-bold"
                    >
                      {item.title}
                    </Typography>
                  </div>
                  <MdKeyboardArrowRight />
                </Button>
              </>
            ))}
          </div>
        </main>
      </>
    );
}
