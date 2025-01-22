import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

const Testimonies = [
  {
    name: "Mike Ross",
    job: "Designer",
    review:
      "“Selling my templates has never been easier. I love how transparent the platform is”",
    img: "/LandingPage/MasGanteng.png",
    role: "Seller",
  },
  {
    name: "Jane D",
    job: "Marketing Specialist",
    review:
      "“Design Simplified helped me find the perfect banner for my campaign in no time! I love how they simplify the process, making everything feel so efficient.”",
    img: "/LandingPage/janeD.png",
    role: "Buyer",
  },
  {
    name: "Kim Min-ji",
    job: "Content Creator",
    review:
      "“I was able to customize the photo I was about to take and even ask the AI about the latest trends, it made the whole process so much easier and more insightful”",
    img: "/LandingPage/kim-min-ji.png",
    role: "Buyer",
  },
];

export default function FourthSection() {
  return (
    <div className="w-full relative flex pt-20 pb-32 px-8 bg-[#525B44] sm:px-10 lg:px-16">
      <div className="flex flex-col gap-8 isi w-full sm:gap-20">
        <div className="title flex flex-col w-full gap-2 sm:gap-5 lg:gap-8 ">
          <Typography
            font="Lora"
            weight="regular"
            className="text-center text-sm text-white sm:text-xl md:text-xl lg:text-[28px]"
          >
            125+ Users have already shared their thoughts
          </Typography>
          <Typography
            font="Lora"
            weight="semibold"
            className="text-xl text-center text-white sm:text-[36px] md:text-[36px] lg:text-[45px]"
          >
            Let’s Hear What They Said
          </Typography>
        </div>
        <div className="3card w-full flex flex-col gap-10 sm:flex-row sm:gap-4 lg:gap-8 sm:justify-between">
          {Testimonies.map((testimony, index) => (
            <div
              key={index}
              className="eachcard w-full relative pt-16 bg-white pb-44 rounded-lg sm:min-h-[400px] lg:min-h-[500px]"
            >
              <Typography
                font="Lora"
                weight="regular"
                className="text-sm text-center px-9 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                {testimony.review}
              </Typography>
              <div className="absolute rounded-b-lg bottom-0 w-full bg-[#D9D9D9] min-h-28 flex flex-row gap-6 py-4 px-5 sm:min-h-[145px] md:min-h-[160px]">
                <NextImage
                  src={testimony.img}
                  alt={`Profile ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-full w-[25%] sm:w-[30%]"
                  imgClassName="rounded-full w-full object-cover"
                />
                <div className="identity flex flex-col w-fit gap-4">
                  <div className="jobNname flex flex-col items-start justify-start">
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    >
                      {testimony.name}
                    </Typography>
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    >
                      {testimony.job}
                    </Typography>
                  </div>
                  <Typography
                    font="Lora"
                    weight="bold"
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  >
                    {testimony.role}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
