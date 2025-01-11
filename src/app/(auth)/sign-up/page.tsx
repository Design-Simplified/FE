import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Layout from "@/layouts/Layout";
import { IoArrowForward } from "react-icons/io5";

// make array for button variant that is google, facebook, apple and user ( user can choose if user are buyer or seller), if user choose buyer, user will be directed to sign up page, if user choose seller, user will be directed to sign up page for seller
const buttonVariant = ["google", "facebook", "apple", "user"] as const;
const buttonVariantObject = {
  google: {
    icon: "/auth/GoogleIcon.svg",
    text: "Sign Up with Google",
  },
  facebook: {
    icon: "/auth/FacebookIcon.svg",
    text: "Sign Up with Facebook",
  },
  apple: {
    icon: "/auth/AppleIcon.svg",
    text: "Sign Up with Apple",
  },
  user: {
    icon: "/auth/CartIcon.svg",
    text: "Sign Up as a Seller",
  },
};

export default function SignUpPage() {
  return (
    <Layout withFooter={false} withNavbar={false}>
      <main className="bg-[url('/images/auth/backgroundMobile.png')] bg-cover bg-center w-full m-0 flex min-h-screen items-center justify-center gap-4 p-2 lg:flex-row lg:px-8 lg:py-5">
        <div className="flex flex-col min-h-[600px] w-[90%] lg:w-[50%] md:w-[70%] md:min-h-[85vh] sm:min-h-[70vh] sm:px-12 sm:py-16 py-10 px-6 rounded-lg justify-between gap-10 bg-white">
          <div className="atas flex flex-col items-center gap-10">
            <div className="title flex flex-col items-start justify-center w-full lg:gap-2">
              <Typography
                variant="h1"
                className="text-xl font-bold lg:text-4xl md:text-3xl sm:text-2xl"
              >
                Sign Up
              </Typography>
              <Typography variant="p" className="text-sm sm:text-base">
                To start buying
              </Typography>
            </div>
            <div className="signupButton flex flex-col items-start justify-start gap-3 w-full">
              {buttonVariant
                .filter((variant) => variant !== "user")
                .map((variant: keyof typeof buttonVariantObject) => (
                  <Button
                    key={variant}
                    variant="grey"
                    className="flex w-full justify-center items-center  py-4 lg:py-7"
                  >
                    <div className="flex justify-center items-center w-fit flex-row gap-2">
                      <NextImage
                        src={buttonVariantObject[variant].icon}
                        width={20}
                        height={20}
                        className="w-5 h-5 lg:w-6 lg:h-6"
                        imgClassName="lg:w-6"
                        alt={`${variant} logo`}
                      />
                      <Typography variant="p" className="text-xs lg:text-lg">
                        {buttonVariantObject[variant].text}
                      </Typography>
                    </div>
                  </Button>
                ))}
            </div>
            <div className="divider flex justify-center items-center gap-3 w-full">
              {/* line, OR, line */}
              <div className="w-full h-0 border border-[#BBBCBF]"></div>
              <Typography variant="p" className="text-xs lg:text-lg">
                OR
              </Typography>
              <div className="w-full h-0 border border-[#BBBCBF]"></div>
            </div>
            <Button
              variant="grey"
              className="w-full flex items-center justify-center py-4 lg:py-7"
            >
              <div className="flex justify-center items-center w-fit flex-row gap-2">
                <NextImage
                  src={buttonVariantObject.user.icon}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  imgClassName="lg:w-6"
                  alt={`Cart logo`}
                />
                <Typography variant="p" className="text-xs lg:text-lg">
                  {buttonVariantObject.user.text}
                </Typography>
              </div>
            </Button>
            {/* Already have an account? Log in Instead + -> icon */}
            <div className="loginInstead flex flex-row items-center justify-center gap-2">
              <Typography
                variant="p"
                className="text-xs lg:text-lg min-[300px]:text-[9px]"
              >
                Already have an account?
              </Typography>
              <div className="flex flex-row items-center text-black justify-center gap-1 border-b border-black cursor-pointer hover:border-black/50  hover:text-black/50">
                <Typography
                  variant="p"
                  italic={true}
                  className="text-xs lg:text-lg font-bold hover:text-black/50 min-[300px]:text-[9px]"
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
              className="text-[9px] min-[300px]:text-[8px] md:text-sm lg:text-xs"
            >
              By continuing, you agree to Design Simplified’s
            </Typography>
            <Typography
              variant="p"
              italic={true}
              className="text-[9px] min-[300px]:text-[8px] md:text-sm lg:text-xs font-bold hover:text-black/50 underline cursor-pointer"
            >
              Terms & Policies
            </Typography>
          </div>
        </div>
      </main>
    </Layout>
  );
}
