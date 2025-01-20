import Typography from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

export default function FifthSection() {
  return (
    <div className="relative w-full px-5 py-10">
      <div className="isi flex flex-col gap-7 items-start justify-center w-full">
        <Typography
          font="Lora"
          weight="bold"
          className="text-xl text-center w-full"
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
              <AccordionTrigger className="text-black">
                <Typography
                  font="Lora"
                  weight="medium"
                  className="text-xl text-black"
                >
                  For Buyers - Find it. Customize it
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
                <div className="flex flex-col gap-3">
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-[#525B44] text-xl hover:font-semibold"
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
