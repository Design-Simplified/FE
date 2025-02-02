import Typography from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

export default function FifthSection() {
  return (
    <div className="relative w-full px-5 py-10 xl:px-24 xl:py-32 lg:py-28 md:py-24 sm:py-20 lg:px-20 md:px-16 sm:px-12">
      <div className="isi flex flex-col gap-10 items-start justify-center w-full sm:gap-20">
        <Typography
          font="Lora"
          weight="bold"
          className="text-[15px] text-center w-full sm:text-2xl md:text-3xl lg:text-[36px]/[48px] xl:text-[45px]/[57px]"
        >
          Frequently Asked Questions
        </Typography>
        <Accordion type="single" collapsible className="w-full">
          {[...Array(5)].map((_, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="w-full border-b border-slate-300"
            >
              <AccordionTrigger className="text-black my-3.5 sm:my-4 md:my-5 lg:my-7 xl:my-9">
                <Typography
                  font="Lora"
                  weight="regular"
                  className="text-[10px] text-black sm:text-sm md:text-base lg:text-lg xl:text-xl "
                >
                  For Buyers - Find it. Customize it
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
                <div className="flex flex-col gap-3">
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-[10px] text-black sm:text-sm md:text-base lg:text-lg xl:text-xl "
                  >
                    YNTKTS
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
