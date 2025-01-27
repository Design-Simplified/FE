import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { Check } from "lucide-react";

export default function FourthSection() {
  return (
    <>
      <div className="relative w-full px-7 py-10 flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 justify-center items-center bg-[#bfbfbfd1]">
        <div className="title flex flex-col gap-4 justify-center items-center max-w-[70%]">
          <Typography
            font="Lora"
            weight="regular"
            className="text-slate-700 text-sm sm:text-lg md:text-xl lg:text-2xl text-center"
          >
            Optional Plans
          </Typography>
          <Typography
            font="Lora"
            weight="bold"
            className="text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center"
          >
            Maximize Your Store’s Potential With Strategic Plans
          </Typography>
        </div>
        <div className="PriceList w-full flex flex-col sm:flex-wrap sm:flex-row gap-16 justify-center items-center">
          <div className="card1 w-full justify-between items-center gap-32 flex flex-col bg-white shadow-lg min-h-[650px] sm:min-h-[790px] md:min-h-[830px] py-8 px-2 max-w-[350px] lg:max-w-[400px] xl:min-h-[900px] rounded-xl">
            <div className="isicard w-full flex flex-col gap-20">
              <div className="w-full flex flex-col title gap-3 justify-center items-center">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                >
                  Free Plan
                </Typography>
                <div className="w-full flex flex-row gap-2 items-center justify-center">
                  <Typography
                    font="Lora"
                    weight="bold"
                    className="text-black text-5xl md:text-5xl xl:text-6xl text-center"
                  >
                    $0
                  </Typography>
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                  >
                    /month
                  </Typography>
                </div>
              </div>
              <div className="w-full flex flex-col gap-7 justify-center items-start px-4">
                <Typography
                  font="Lora"
                  weight="semibold"
                  className="text-black text-lg md:text-xl lg:text-2xl text-left"
                >
                  Features
                </Typography>
                <div className="w-full flex flex-row gap-3 justify-start items-center">
                  <Check size={24} color="#525B44" strokeWidth={4} />
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                  >
                    Access to 1 niche
                  </Typography>
                </div>
                <div className="w-full flex flex-row gap-3 justify-start items-center">
                  <Check size={24} color="#525B44" strokeWidth={4} />
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                  >
                    Within each niche, access up to 5 sub-niches
                  </Typography>
                </div>
                <div className="w-full flex flex-row gap-3 justify-start items-center">
                  <Check size={24} color="#525B44" strokeWidth={4} />
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                  >
                    Upload up to 10 contents per sub-niche
                  </Typography>
                </div>
              </div>
            </div>
            <Button variant="green" className="w-fit p-2 px-3">
              Choose this
            </Button>
          </div>
          <div className="card2 relative w-full justify-center items-center gap-32 flex bg-[#525B44] shadow-lg min-h-[650px] p-3 rounded-xl rounded-tl-none max-w-[350px] lg:max-w-[400px] ">
            <div className="discount min-w-24 absolute -top-[30px] left-0 bg-[#525B44] min-h-9 rounded-lg">
              <Typography
                font="Lora"
                weight="bold"
                className="text-white text-base text-center py-2 px-3 sm:text-base md:text-lg lg:text-xl"
              >
                10x The Features
              </Typography>
            </div>
            <div className="card2 w-full justify-between items-center gap-32 flex flex-col bg-white shadow-lg min-h-[650px] py-8 px-2 rounded-xl">
              <div className="isicard w-full flex flex-col gap-20">
                <div className="w-full flex flex-col title gap-3 justify-center items-center">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                  >
                    Pro Plan
                  </Typography>
                  <div className="w-full flex flex-row gap-2 items-center justify-center">
                    <Typography
                      font="Lora"
                      weight="bold"
                      className="text-black text-5xl md:text-5xl xl:text-6xl text-center"
                    >
                      $19.99
                    </Typography>
                    <Typography
                      font="Lora"
                      weight="semibold"
                      className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                    >
                      /month
                    </Typography>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-7 justify-center items-start px-4">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-black text-lg md:text-xl lg:text-2xl text-left"
                  >
                    Features
                  </Typography>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Access to all 4 niche
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Upload in every sub-niche
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Unlimited content uploads across all sub-niches
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Cancel Anytime
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Boost Sales
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Trend Tracker
                    </Typography>
                  </div>
                </div>
              </div>
              <Button variant="green" className="w-fit p-2 px-3">
                Choose this
              </Button>
            </div>
          </div>
          <div className="card3 relative w-full justify-center items-center gap-32 flex bg-[#525B44] shadow-lg min-h-[650px] p-3 rounded-xl rounded-tl-none max-w-[350px] lg:max-w-[400px] ">
            <div className="discount min-w-24 absolute -top-[30px] left-0 bg-[#525B44] min-h-9 rounded-lg">
              <Typography
                font="Lora"
                weight="bold"
                className="text-white text-base text-center py-2 px-3 sm:text-base md:text-lg lg:text-xl"
              >
                Save 20%
              </Typography>
            </div>
            <div className="card2 w-full justify-between items-center gap-32 flex flex-col bg-white shadow-lg min-h-[650px] py-8 px-2 rounded-xl">
              <div className="isicard w-full flex flex-col gap-20">
                <div className="w-full flex flex-col title gap-3 justify-center items-center">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                  >
                    Annual Pro Plan
                  </Typography>
                  <div className="w-full flex flex-row gap-2 items-center justify-center">
                    <Typography
                      font="Lora"
                      weight="bold"
                      className="text-black text-5xl md:text-5xl xl:text-6xl text-center"
                    >
                      $189.99
                    </Typography>
                    <Typography
                      font="Lora"
                      weight="semibold"
                      className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                    >
                      /month
                    </Typography>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-7 justify-center items-start px-4">
                  <Typography
                    font="Lora"
                    weight="semibold"
                    className="text-black text-lg md:text-xl lg:text-2xl text-left"
                  >
                    Features
                  </Typography>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Access to all 4 niche
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Upload in every sub-niche
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Unlimited content uploads across all sub-niches
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Cancel Anytime
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Boost Sales
                    </Typography>
                  </div>
                  <div className="w-full flex flex-row gap-3 justify-start items-center">
                    <Check size={24} color="#525B44" strokeWidth={4} />
                    <Typography
                      font="Lora"
                      weight="regular"
                      className="text-black text-base xl:text-2xl lg:text-xl md:text-lg  text-left"
                    >
                      Trend Tracker
                    </Typography>
                  </div>
                </div>
              </div>
              <Button variant="green" className="w-fit p-2 px-3">
                Choose this
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
