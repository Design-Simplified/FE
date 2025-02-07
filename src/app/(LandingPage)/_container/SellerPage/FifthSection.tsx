import Typography from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

const FAQ = [
  {
    question: "How do I start selling?",
    answer:
      "Sign up, setup your store, and upload your contents. Choose between Free, Premium, or Bundle models, and start earning based on downloads.",
  },
  {
    question: "What are the pricing models?",
    answer:
      "• Free – No cost for buyers. • Premium & Bundle – Earnings are based on downloads. • Exclusive – Sellers set a price per template + earn from customization.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are based on downloads and custom work, sent via PayPal or bank transfer.",
  },
  {
    question: "How do I qualify for Exclusive?",
    answer:
      "A content must reach 150 downloads in Premium or Bundle before being eligible for Exclusive pricing. Once qualified, sellers can set a fixed price and offer customizations.",
  },
  {
    question: "How does customization work?",
    answer:
      "Buyers can request: • Basic – Small edits • Standard – Moderate changes • Advanced – Full redesign.",
  },
  {
    question: "Can I chat with buyers?",
    answer:
      "Yes, you can chat with buyers but only for Standard and Advanced customizations.",
  },
  {
    question: "How much is the commission?",
    answer:
      "A small percentage is taken per sale, with better rates for Exclusive sellers.",
  },
  {
    question: "Can I sell on other platforms?",
    answer:
      "Yes, except for Exclusive templates, which must be sold only here.",
  },
  {
    question: "Can I upload designs that already exist on the platform?",
    answer:
      "Yes, you can upload designs that already exist on the platform, but keep in mind that you will be competing with the original design. We recommend making slight changes or customizations to stand out and offer something unique to buyers. This can help your design be more attractive and increase your chances of getting noticed and downloaded.",
  },
];

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
          {FAQ.map(({ question, answer }, index) => (
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
                  {question}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="flex bg-white justify-start items-center rounded-xl px-5 py-3">
                <div className="flex flex-col gap-3">
                  <Typography
                    font="Lora"
                    weight="regular"
                    className="text-[10px] text-black sm:text-sm md:text-base lg:text-lg xl:text-xl "
                  >
                    {answer}
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
