import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import clsxm from "@/lib/clsxm";

const Image = [
  {
    src: "/ContentsHub/SocialMedia.png",
    alt: "Social Media Image",
    text: "Social Media",
  },
  {
    src: "/ContentsHub/Business.png",
    alt: "Business Image",
    text: "Business",
  },
  {
    src: "/ContentsHub/Multimedia.png",
    alt: "Multimedia Image",
    text: "Multimedia",
  },
  {
    src: "/ContentsHub/Marketplace.png",
    alt: "Marketplace Image",
    text: "Marketplace",
  },
];

export default function SecondSection() {
  return (
    <section className="w-full relative background-gray px-3 xl:px-8 lg:px-6 md:px-4 py-6 xl:py-9 lg:py-8 md:py-7 ">
      <div className="w-full flex flex-col lg:gap-9 md:gap-7 sm:gap-5  xl:gap-11 gap-4 pt-6 xl:pt-10 lg:pt-8 md:pt-7 bg-white">
        <div className="title w-full flex flex-col sm:flex-row gap-3 items-start sm:justify-between sm:items-center sm:gap-5 px-4">
          <Typography
            variant="h1"
            weight="semibold"
            className="text-base xl:text-4xl lg:text-2xl md:text-xl sm:text-lg"
          >
            What's Your Focus Today?
          </Typography>
          <Typography
            variant="h3"
            weight="regular"
            className="text-[10px] text-[#00000099] xl:text-2xl lg:text-lg md:text-base sm:text-sm"
          >
            Select your niche to explore tailored contents!
          </Typography>
        </div>
        <div className="image w-full flex flex-row gap-0.5 lg:gap-1.5 xl:gap-2 md:gap-1">
          {Image.map((img, index) => (
            <div
              key={index}
              className={clsxm(
                "w-full relative shrink",
                index === 3 && "hidden sm:block",
              )}
            >
              <NextImage
                src={img.src}
                alt={img.alt}
                width={120}
                height={184}
                className="w-full h-full"
                imgClassName="object-cover w-full h-full"
              />
              <Typography
                variant="h3"
                weight="semibold"
                className="text-white absolute transform left-1/2 -translate-x-1/2 bottom-5 text-[11px] xl:text-2xl lg:text-xl md:text-base sm:text-sm rounded-sm bg-[#000000]/50 p-1 min-w-max"
              >
                {img.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
