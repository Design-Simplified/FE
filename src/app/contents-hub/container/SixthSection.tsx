import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { ImQuotesLeft } from "react-icons/im";

export default function SixthSection() {
  return (
    <section className="w-full relative background-gray px-3 xl:px-8 lg:px-6 md:px-4 pb-6 xl:pb-9 lg:pb-8 md:pb-7">
      <div className="w-full  relative flex flex-col justify-center items-center lg:gap-40 md:gap-32 sm:gap-24 xl:gap-48 gap-16 py-8 xl:py-16 lg:py-14 md:py-12 sm:py-10 pb-20 xl:pb-56 lg:pb-48 md:pb-36 sm:pb-28  px-3.5 xl:px-7 lg:px-6 md:px-5 sm:px-4 bg-white">
        <div className="w-full flex flex-row gap-4 justify-between items-start">
          <div className="w-2/3 flex flex-col gap-2 xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3">
            <Typography
              variant="h1"
              weight="semibold"
              className="text-sm xl:text-4xl lg:text-2xl md:text-lg sm:text-base"
            >
              Top Seller
            </Typography>
            <Typography
              variant="h2"
              weight="medium"
              className="text-[10px] xl:text-2xl lg:text-xl md:text-base sm:text-sm opacity-50 font-black"
            >
              Your Journey to Success Starts Here Be the Top Seller and Earn the{" "}
              <i>“Trusted”</i> Seller Badge to Gain Credibility
            </Typography>
          </div>
          <NextImage
            src="/ContentsHub/Medali.png"
            width={162}
            height={111}
            className="xl:w-[450px] lg:w-[370px] md:w-[290px] sm:w-[210px]"
            imgClassName="object-cover w-full h-full"
            alt="Medal Image"
          />
        </div>
        <div className="w-[80%] xl:max-w-[928px] lg:max-w-[742px] md:max-w-[556px] sm:max-w-[467px] min-w-[280px] max-w-[280px] relative flex flex-col bg-[#D9D9D980]">
          <Typography
            variant="p"
            weight="regular"
            className="text-[8px] text-black opacity-50 absolute left-1/2 transform -translate-x-1/2 -bottom-10 lg:-bottom-28 md:-bottom-20 sm:-bottom-14 xl:-bottom-32 xl:text-2xl lg:text-xl md:text-base sm:text-sm min-w-max"
          >
            Based on total content sold by sellers, excluding free items.*
          </Typography>
          <div className="quotes absolute -top-10 -left-[34px]   md:-top-20 md:-left-[65px] sm:-top-16 sm:-left-[55px]  lg:-top-28 lg:-left-[86px] xl:-top-32 xl:-left-[110px]">
            <NextImage
              src="/ContentsHub/TopSellerQuotes.png"
              width={339}
              height={43}
              className=" xl:w-[1150px] lg:w-[920px] md:w-[690px] sm:w-[580px] w-[348px]"
              imgClassName="object-cover w-full h-full"
              alt="Top Seller Image"
            />
            <ImQuotesLeft
              size={7}
              className="absolute top-2 xl:top-10 left-[20%] xl:size-7 lg:size-6 md:size-5 sm:size-4 sm:top-4  lg:top-8"
              color="white"
            />
            <ImQuotesLeft
              size={7}
              className="absolute top-2 xl:top-10 right-[20%] xl:size-7 lg:size-6 md:size-5 sm:size-4 transform scale-x-[-1] sm:top-4  lg:top-8"
              color="white"
            />
            <Typography
              variant="p"
              weight="medium"
              className="text-white top-2 sm:top-4   text-center text-[8px] xl:text-2xl lg:text-xl md:text-base sm:text-sm max-w-[255px] xl:max-w-[778px] lg:max-w-[635px] md:max-w-[500px] sm:max-w-[363px] absolute xl:top-11 left-1/2 transform -translate-x-1/2 lg:top-8"
            >
              Our Top Sellers deliver the highest quality contents trusted by
              hundred of buyers!
            </Typography>
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="eachcard w-full flex flex-row gap-10 justify-between items-center px-3 xl:px-12 lg:px-8 md:px-6 sm:px-4 border-b border-[#525B4499]  py-2 xl:py-7 lg:py-6 md:py-4 sm:py-3"
            >
              <div className="w-fit flex flex-row justify-center items-center gap-2 xl:gap-8 lg:gap-6 md:gap-4 ">
                <Typography
                  variant="h1"
                  weight="bold"
                  className="text-base xl:text-5xl lg:text-3xl md:text-xl sm:text-lg text-[#525B44]"
                >
                  {index + 1}
                </Typography>
                <NextImage
                  src="/ContentsHub/Tokyo.png"
                  width={35}
                  height={35}
                  className="xl:w-28 lg:w-23 md:w-18 sm:w-13 w-9"
                  imgClassName="object-cover w-full h-full rounded-full"
                  alt="Profile Image"
                />
                <Typography
                  variant="h3"
                  weight="medium"
                  className="text-[9px] xl:text-2xl lg:text-xl md:text-base sm:text-sm"
                >
                  Silene Oliviera
                </Typography>
              </div>
              <Typography
                variant="h3"
                weight="medium"
                className="text-[9px] xl:text-2xl lg:text-xl md:text-base sm:text-sm text-[#525B44]"
              >
                5,3K Downloaded
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
