"use client";
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Layout from "@/layouts/Layout";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

// make array for button variant that is google, facebook, apple and user ( user can choose if user are buyer or seller), if user choose buyer, user will be directed to sign up page, if user choose seller, user will be directed to sign up page for seller
const buttonVariant = ["google", "facebook", "buyer", "seller"] as const;
const buttonVariantObject = {
  google: {
    icon: "/auth/GoogleIcon.svg",
    text: "Sign Up with Google",
  },
  facebook: {
    icon: "/auth/FacebookIcon.svg",
    text: "Sign Up with Facebook",
  },
  buyer: {
    icon: "/auth/CartIcon.svg",
    text: "Sign Up as a Seller",
  },
  seller: {
    icon: "/auth/CartIcon.svg",
    text: "Sign Up as a Buyer",
  },
};

export default function SignUpPage() {
  const [changeRole, setChangeRole] = useState<boolean>(false);
  const handleRegister = (user: string, provider: string) => {
    // redirect to api endpoint for buyer
    // https://api.beteam1genics.my.id/api/auth/{provider}/{state}
    //local
    // const url = `https://api.beteam1genics.my.id/api/auth/local/${provider}/buyer`;
    const url = `https://api.beteam1genics.my.id/api/auth/${provider}/${user}`;
    const BuyerWindow = window.open(url, "_blank", "width=600,height=600");
    if (!BuyerWindow) {
      alert("Please allow popups for this website");
    }
    if (BuyerWindow) {
      BuyerWindow.focus();
    }
  };
  return (
    <Layout withFooter={false} withNavbar={false}>
      <main className="relative bg-none w-full m-0 flex min-h-screen items-center justify-center gap-4 p-2 lg:flex-row lg:px-8 lg:py-12">
        <div className="flex flex-col  sm:w-[35%] min-h-[600px] sm:min-h-[65vh] sm:min-w-[450px] sm:px-12 sm:py-16 py-10 px-6 rounded-lg justify-between gap-10 bg-white">
          <div className="atas flex flex-col items-center gap-6">
            <div className="title flex flex-col items-start justify-center w-full lg:gap-2">
              <Typography
                variant="h1"
                className="text-xl font-bold sm:text-3xl md:text-3xl"
              >
                Sign Up
              </Typography>
              <Typography
                variant="p"
                className="text-sm sm:text-base md:text-base"
              >
                To start {changeRole ? "Selling" : "Buying"}
              </Typography>
            </div>
            <div className="signupButton flex flex-col items-start justify-start gap-3 w-full">
              {buttonVariant
                .filter(
                  (variant) => variant !== "buyer" && variant !== "seller",
                )
                .map((variant: keyof typeof buttonVariantObject) => (
                  <Button
                    key={variant}
                    variant="grey"
                    className="flex w-full justify-center items-center py-2 sm:py-4"
                    onClick={() =>
                      handleRegister(changeRole ? "seller" : "buyer", variant)
                    }
                  >
                    <div className="flex justify-center items-center w-fit flex-row gap-2">
                      <NextImage
                        src={buttonVariantObject[variant].icon}
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        imgClassName="w-4 h-4 sm:w-5"
                        alt={`${variant} logo`}
                      />
                      <Typography
                        variant="p"
                        className="text-xs sm:text-base md:text-base"
                      >
                        {buttonVariantObject[variant].text}
                      </Typography>
                    </div>
                  </Button>
                ))}
            </div>
            <div className="divider flex justify-center items-center gap-3 w-full">
              {/* line, OR, line */}
              <div className="w-full h-0 border border-[#BBBCBF]"></div>
              <Typography variant="p" className="text-xs sm:text-lg md:text-lg">
                OR
              </Typography>
              <div className="w-full h-0 border border-[#BBBCBF]"></div>
            </div>
            <Button
              variant="grey"
              className="flex w-full justify-center items-center py-2 sm:py-4"
              onClick={() => setChangeRole(!changeRole)}
            >
              <div className="flex justify-center items-center w-fit flex-row gap-2">
                <NextImage
                  src={
                    changeRole
                      ? buttonVariantObject.seller.icon
                      : buttonVariantObject.buyer.icon
                  }
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  imgClassName="w-4 h-4 sm:w-5"
                  alt={`Cart logo`}
                />
                <Typography
                  variant="p"
                  className="text-xs sm:text-base md:text-base"
                >
                  {changeRole
                    ? buttonVariantObject.seller.text
                    : buttonVariantObject.buyer.text}
                </Typography>
              </div>
            </Button>
            {/* Already have an account? Log in Instead + -> icon */}
            <div className="loginInstead flex flex-row items-center justify-center gap-1">
              <Typography
                variant="p"
                className="text-xs sm:text-base md:text-base min-[300px]:text-[9px]"
              >
                Already have an account?
              </Typography>
              <div className="flex flex-row items-center text-black justify-center gap-1 cursor-pointer hover:border-black/50  hover:text-black/50">
                <Typography
                  variant="p"
                  italic={true}
                  className="text-xs sm:text-base md:text-base font-bold hover:text-black/50 min-[300px]:text-[9px]"
                >
                  Sign In Instead
                </Typography>
                <IoArrowForward className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="bawah flex flex-row w-full gap-1 justify-center items-center">
            <Typography
              variant="p"
              className="text-[9px] min-[300px]:text-[8px] sm:text-xs  md:text-xs"
            >
              By continuing, you agree to Design Simplified’s
            </Typography>
            <Typography
              variant="p"
              italic={true}
              className="text-[9px] min-[300px]:text-[8px] sm:text-xs  md:text-xs font-normal text-black/80 hover:text-black/50 underline cursor-pointer"
            >
              Terms & Policies
            </Typography>
          </div>
        </div>
        <section className="w-full h-full -z-[100] absolute top-0 bottom-0 right-0 min-h-screen overflow-hidden">
          <NextImage
            src="/auth/backgroundDesktop.png"
            width={1440}
            height={1024}
            className="hidden sm:block md:w-[130%] sm:w-[115%] -z-[100] absolute top-0 bottom-0 right-0"
            imgClassName="object-cover w-full h-full"
            alt="Background image for desktop"
          />
          <NextImage
            src="/auth/backgroundMobile.png"
            width={390}
            height={840}
            className="block sm:hidden w-[100%] -z-[100] absolute top-0 bottom-0 left-0"
            imgClassName="object-cover w-full h-full"
            alt="Background image for desktop"
          />
        </section>
      </main>
    </Layout>
  );
}
