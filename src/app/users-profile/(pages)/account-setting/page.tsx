"use client";
import { useRouter } from "next/navigation";
import NavUsersProfile from "../../components/NavUsersProfile";
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { MdKeyboardArrowRight } from "react-icons/md";

const AccountSettingItems = [
  {
    title: "Log out",
    alt: "logout",
    icon: "/UsersProfile/logOut.svg",
    description:
      "Once you logged out, you need to log in again to access your account and view your history.",
    button: "HandleLogout",
  },
  {
    title: "Delete Account",
    alt: "delete",
    icon: "/UsersProfile/deleteAccount.svg",
    description:
      "Your account will be permanently deleted, meaning you will no longer be able to access your transaction history or any other details.",
    button: "HandleDeleteAccount",
  },
];

export default function AccountSettingPage() {
  const router = useRouter();
  const HandleLogout = () => {
    // Handle Logout
  };
  const HandleDeleteAccount = () => {
    //handle Delete Account
  };
  return (
    <>
      <NavUsersProfile onClick={() => router.back()} title="Account Setting" />
      <main className="w-full relative background-gray xl:pt-40 lg:pt-32 md:pt-28 sm:pt-20  pt-16 flex flex-col gap-2 sm:gap-3 lg:gap-4 min-h-screen max-h-screen">
        {AccountSettingItems.map((item, index) => (
          <>
            <Button
              onClick={() => router.push(item.button)}
              key={index}
              variant="white"
              type="button"
              className="xl:p-9 lg:p-8 md:p-7 sm:p-6 p-5 w-full flex flex-row gap-12 justify-between items-center group"
            >
              <div className="flex flex-row xl:gap-8 lg:gap-7 md:gap-5 sm:gap-4 gap-2">
                <NextImage
                  src={item.icon}
                  width={34}
                  height={41}
                  className="xl:w-[48px] lg:w-[44px] md:w-[40px] sm:w-[36px]"
                  imgClassName="w-full h-full"
                  alt={item.alt}
                />
                <div className="flex flex-col xl:gap-6 gap-2 lg:gap-5 md:gap-4 sm:gap-3 justify-start items-start">
                  <Typography
                    font="Lora"
                    variant="h1"
                    weight="semibold"
                    className="text-xs xl:2xl lg:text-xl md:text-lg sm:text-base group-hover:font-bold"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="p"
                    weight="regular"
                    font="Lora"
                    className="xl:text-xl text-[10px] lg:text-lg md:text-sm sm:text-xs group-hover:font-medium"
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
              <MdKeyboardArrowRight
                size={16}
                className="xl:size-[24px] lg:size-[22px] md:size-[20px] sm:size-[18px]"
              />
            </Button>
          </>
        ))}
      </main>
    </>
  );
}
