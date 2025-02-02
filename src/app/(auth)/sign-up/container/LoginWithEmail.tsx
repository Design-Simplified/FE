import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { ArrowLeft } from "lucide-react";
import EmailForm from "./EmailForm";

export default function LoginWithEmail({
  setClickEmail,
  setDoneEmail,
  doneEmail,
}: {
  setClickEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setDoneEmail: React.Dispatch<React.SetStateAction<boolean>>;
  doneEmail: boolean;
}): JSX.Element {
  return (
    <div className="flex flex-col w-[330px] sm:w-[35%] min-h-[300px] sm:min-h-[400px] sm:min-w-[400px] lg:min-w-[450px] sm:px-12 sm:py-16 py-8 px-6 rounded-lg justify-start items-center gap-10 sm:gap-14 bg-white">
      <div className="title w-full flex flex-row gap-10 lg:gap-[70px] sm:gap-[40px] justify-start items-center">
        <Button
          onClick={() => setClickEmail(false)}
          variant="white"
          className="flex flex-row items-center shadow-none"
        >
          <ArrowLeft size={9} strokeWidth={3} className="sm:size-3" />
        </Button>
        <Typography
          font="Lora"
          weight="semibold"
          className="text-black text-sm text-center xl:text-xl lg:text-lg md:text-lg sm:text-base"
        >
          Create Your Acccount
        </Typography>
      </div>
      <Typography
        font="Lora"
        weight="regular"
        className="text-black text-[10px] lg:text-base md:text-base sm:text-sm"
      >
        You’re creating a Design Simplified account with [example@gmail.com]
      </Typography>
      <EmailForm />
    </div>
  );
}
