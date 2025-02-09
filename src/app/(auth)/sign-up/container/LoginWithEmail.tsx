import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { BsArrowLeft } from "react-icons/bs";
import ResendButton from "../../components/ResendButton";
import React from "react";
import { IEmailForm } from "@/types/email";
import EmailForm from "./EmailForm";

export default function LoginWithEmail({
  setClickEmail,
  setDoneEmail,
  doneEmail,
  state,
}: {
  setClickEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setDoneEmail: React.Dispatch<React.SetStateAction<boolean>>;
  doneEmail: boolean;
  state: string;
}): JSX.Element {
  const [formData, setFormData] = React.useState<IEmailForm>({
    email: "",
    state: "",
  });
  return (
    <>
      <div className="flex flex-col w-[330px] sm:w-[35%] h-fit min-h-[300px] sm:min-h-[400px] sm:min-w-[400px] lg:min-w-[450px] sm:px-12 sm:py-16 py-8 px-6 rounded-lg justify-start items-center gap-10 sm:gap-14 bg-white">
        <div className="title w-full flex flex-row gap-10 lg:gap-[70px] sm:gap-[40px] justify-start items-center">
          <Button
            type="button"
            onClick={() => setClickEmail(false)}
            variant="white"
            className="flex flex-row items-center shadow-none"
          >
            <BsArrowLeft
              size={10}
              strokeWidth={1}
              color="black"
              className="sm:size-4"
            />
          </Button>
          <Typography
            font="Lora"
            weight="semibold"
            className="text-black text-sm text-center xl:text-xl lg:text-lg md:text-lg sm:text-base"
          >
            {doneEmail === true ? "Verify Your Email" : "Create Your Account"}
          </Typography>
        </div>
        <Typography
          font="Lora"
          weight="regular"
          className="text-black text-[10px] lg:text-base md:text-base sm:text-sm"
        >
          {doneEmail === true
            ? "We’ve sent a verification email to your email, please check your inbox."
            : "You’re creating a Design Simplified account with [example@gmail.com]."}
        </Typography>

        {doneEmail === true ? (
          <>
            <div className="w-full flex flex-col gap-3 sm:gap-[18px] justify-center items-center">
              <Typography
                font="Lora"
                weight="regular"
                className="text-[#00000099] text-[8px] md:text-[10px] lg:text-xs"
              >
                Please check your email and click the verification link to
                proceed.
              </Typography>
              <ResendButton formData={formData} />
            </div>
          </>
        ) : (
          <EmailForm
            setDoneEmail={setDoneEmail}
            state={state}
            setFormData={setFormData}
          />
        )}
      </div>
    </>
  );
}
