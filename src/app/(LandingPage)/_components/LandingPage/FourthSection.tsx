import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function FourthSection() {
  return (
    <div className="w-full relative flex pt-20 pb-32 px-8 bg-[#525B44]">
      <div className="flex flex-col gap-8 isi w-full">
        <div className="title flex flex-col w-full gap-2 ">
          <Typography
            font="Lora"
            weight="regular"
            className="text-center text-sm text-white"
          >
            125+ Users have already shared their thoughts
          </Typography>
          <Typography
            font="Lora"
            weight="semibold"
            className="text-xl text-center text-white"
          >
            Let’s Hear What They Said
          </Typography>
        </div>
        <div className="3card w-full flex flex-col gap-10">
          <div className="eachcard w-full relative pt-16 bg-white pb-44 rounded-lg">
            <Typography
              font="Lora"
              weight="regular"
              className="text-sm text-center px-9"
            >
              “Selling my templates has never been easier. I love how
              transparent the platform is”
            </Typography>
            <div className="absolute rounded-b-lg bottom-0 w-full bg-[#D9D9D9] min-h-28 flex flex-row gap-6 py-4 px-5">
              <NextImage
                src="/LandingPage/MasGanteng.png"
                alt="Profile 1"
                width={80}
                height={80}
                className="rounded-full w-[25%]"
                imgClassName="rounded-full w-full object-cover"
              />
              <div className="identity flex flex-col w-fit gap-4">
                <div className="jobNname flex flex-col items-start justify-start">
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Mike Ross
                  </Typography>
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Designer
                  </Typography>
                </div>
                <Typography font="Lora" weight="bold" className="text-sm">
                  Seller
                </Typography>
              </div>
            </div>
          </div>
          <div className="eachcard w-full relative pt-16 bg-white pb-44 rounded-lg">
            <Typography
              font="Lora"
              weight="regular"
              className="text-sm text-center px-9"
            >
              “Design Simplified helped me find the perfect banner for my
              campaign in no time! I love how they simplify the process, making
              everything feel so efficient.”
            </Typography>
            <div className="absolute rounded-b-lg bottom-0 w-full bg-[#D9D9D9] min-h-28 flex flex-row gap-6 py-4 px-5">
              <NextImage
                src="/LandingPage/janeD.png"
                alt="Profile 2"
                width={80}
                height={80}
                className="rounded-full w-[25%]"
                imgClassName="rounded-full w-full object-cover"
              />
              <div className="identity flex flex-col w-fit gap-4">
                <div className="jobNname flex flex-col items-start justify-start">
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Jane D
                  </Typography>
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Marketing Specialist
                  </Typography>
                </div>
                <Typography font="Lora" weight="bold" className="text-sm">
                  Buyer
                </Typography>
              </div>
            </div>
          </div>
          <div className="eachcard w-full relative pt-16 bg-white pb-44 rounded-lg">
            <Typography
              font="Lora"
              weight="regular"
              className="text-sm text-center px-9"
            >
              “I was able to customize the photo I was about to take and even
              ask the AI about the latest trends, it made the whole process so
              much easier and more insightful”
            </Typography>
            <div className="absolute rounded-b-lg bottom-0 w-full bg-[#D9D9D9] min-h-28 flex flex-row gap-6 py-4 px-5">
              <NextImage
                src="/LandingPage/kim-min-ji.png"
                alt="Profile 3"
                width={80}
                height={80}
                className="rounded-full w-[25%]"
                imgClassName="rounded-full w-full object-cover"
              />
              <div className="identity flex flex-col w-fit gap-4">
                <div className="jobNname flex flex-col items-start justify-start">
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Kim Min-ji
                  </Typography>
                  <Typography font="Lora" weight="regular" className="text-sm">
                    Content Creator
                  </Typography>
                </div>
                <Typography font="Lora" weight="bold" className="text-sm">
                  Buyer
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
