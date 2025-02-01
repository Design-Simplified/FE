import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { Check } from "lucide-react";

type CardProps = {
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
  promoText?: string;
  annual?: boolean;
};

export default function DiscountCard({
  title,
  price,
  features,
  isHighlighted,
  promoText,
  annual,
}: CardProps) {
  return (
    <div
      className={`relative w-full max-w-[350px] lg:max-w-[400px] rounded-xl shadow-lg flex flex-col justify-between bg-white py-8 px-2 min-h-[650px] sm:min-h-[790px] md:min-h-[830px] xl:min-h-[900px] ${
        isHighlighted ? "border-[5px] border-[#525B44] rounded-tl-none" : ""
      }`}
    >
      {isHighlighted && promoText && (
        <div className="absolute -top-[45px] md:-top-[50px] -left-[5px] bg-[#525B44] rounded-lg rounded-b-none px-5 py-3 ">
          <Typography
            font="Lora"
            weight="regular"
            className="text-xs lg:text-xl text-white"
          >
            {promoText}
          </Typography>
        </div>
      )}
      <div className="w-full flex flex-col gap-16 justify-center items-center sm:gap-20">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <Typography
            font="Lora"
            weight={isHighlighted ? "bold" : "semibold"}
            className="text-black text-xl md:text-2xl lg:text-[28px] text-center"
          >
            {title}
          </Typography>
          <div className="flex items-center gap-1">
            <Typography
              font="Lora"
              weight="bold"
              className="text-black text-5xl md:text-5xl"
            >
              {price}
            </Typography>
            <Typography
              font="Lora"
              weight="semibold"
              className="text-black text-xl md:text-2xl lg:text-[32px]"
            >
              {annual ? "/year" : "/month"}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-4">
          <Typography
            font="Lora"
            weight="semibold"
            className="text-black text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Features
          </Typography>
          <div className="w-full flex flex-col items-start gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <Check
                  size={11}
                  color="#525B44"
                  strokeWidth={4}
                  className="sm:size-4 min-w-fit"
                />
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-black text-sm xl:text-2xl lg:text-xl md:text-lg"
                >
                  {feature}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="green"
        className="w-fit py-3.5 px-5 sm:px-6 sm:py-[18px] self-center"
      >
        <Typography
          font="Lora"
          weight="medium"
          className="text-white text-xs md:text-sm xl:text-base"
        >
          Choose this
        </Typography>
      </Button>
    </div>
  );
}
