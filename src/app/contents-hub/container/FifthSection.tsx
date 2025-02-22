"use client";
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { MdKeyboardArrowRight } from "react-icons/md";
import useUserStore from "@/store/userStore";

const Images = [
  {
    image: "/ContentsHub/sampleImage1.png",
    title: "Sample Image 1",
    tier: "Free",
  },
  {
    image: "/ContentsHub/sampleImage2.png",
    title: "Sample Image 2",
    tier: "Exclusive",
  },
  {
    image: "/ContentsHub/sampleImage3.png",
    title: "Sample Image 3",
    tier: "Premium",
  },
  {
    image: "/ContentsHub/sampleImage4.png",
    title: "Sample Image 4",
    tier: "Bundle",
  },
];

export default function FifthSection() {
  const { userData } = useUserStore();
  if (userData.userId)
    return (
      <section className="w-full relative background-gray px-3 xl:px-8 lg:px-6 md:px-4 pb-6 xl:pb-9 lg:pb-8 md:pb-7">
        <div className="w-full  relative flex flex-col lg:gap-20 md:gap-16 sm:gap-12 xl:gap-24 gap-8 py-8 xl:py-16 lg:py-14 md:py-12 sm:py-10 px-3.5 xl:px-7 lg:px-6 md:px-5 sm:px-4 bg-white">
          <div className="w-full flex flex-row gap-4 justify-between items-center">
            <Typography
              variant="h1"
              weight="semibold"
              className="text-sm xl:text-4xl lg:text-2xl md:text-lg sm:text-base"
            >
              Others Also Viewed
            </Typography>
            <Button
              variant="white"
              type="button"
              className="p-2 rounded-lg flex flex-row gap-1 justify-center items-center text-black hover:font-bold"
            >
              <Typography
                variant="h4"
                weight="regular"
                className="text-xs xl:text-2xl lg:text-base md:text-sm sm:text-xs hover:font-bold"
              >
                See More
              </Typography>
              <MdKeyboardArrowRight />
            </Button>
          </div>
          <div className="w-full relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            <Button
              variant="green"
              className="hidden z-20 sm:flex absolute -right-2 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-full"
            >
              <MdKeyboardArrowRight color="white" size={60} />
            </Button>
            {Images.map((image, index) => (
              <div
                key={index}
                className="w-full relative h-48 xl:h-[460px] lg:h-[400px] md:h-[340px] sm:h-[280px] min-[500px]:h-[250px]"
              >
                {image.tier === "Exclusive" && (
                  <NextImage
                    width={160}
                    height={172}
                    src="/ContentsHub/ExclusiveBadge.png"
                    alt="Exclusive Badge"
                    className="absolute -top-7 -left-9 z-20"
                  />
                )}
                {image.tier === "Free" && (
                  <NextImage
                    width={71}
                    height={45}
                    src="/ContentsHub/FreeBadge.png"
                    alt="Free Badge"
                    className="absolute top-3 -left-2.5 z-20"
                  />
                )}
                {image.tier === "Bundle" && (
                  <NextImage
                    width={160}
                    height={172}
                    src="/ContentsHub/BundleBadge.png"
                    alt="Bundle Badge"
                    className="absolute -top-[37px] -left-[30px] z-20"
                  />
                )}
                <NextImage
                  width={160}
                  height={195}
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full overflow-hidden rounded-lg"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
