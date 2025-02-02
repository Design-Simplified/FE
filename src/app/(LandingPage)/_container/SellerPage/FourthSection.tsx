import Typography from "@/components/Typography";
import DiscountCard from "../../_components/DiscountCard";

export default function FourthSection() {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "$0",
      features: [
        "Access to 1 niche",
        "Within each niche, access up to 5 sub-niches",
        "Upload up to 10 contents per sub-niche",
      ],
    },
    {
      title: "Pro Plan",
      price: "$19.99",
      features: [
        "Access to all 4 niches",
        "Upload in every sub-niche",
        "Unlimited content uploads across all sub-niches",
        "Cancel anytime",
        "Boost sales",
        "Trend tracker",
      ],
      isHighlighted: true,
      promoText: "10x The Features",
    },
    {
      title: "Annual Pro Plan",
      price: "$189.99",
      features: [
        "Access to all 4 niches",
        "Upload in every sub-niche",
        "Unlimited content uploads across all sub-niches",
        "Cancel anytime",
        "Boost sales",
        "Trend tracker",
      ],
      isHighlighted: true,
      annual: true,
      promoText: "Save 20%",
    },
  ];

  return (
    <section className="relative w-full px-7 py-10 xl:py-32 lg:py-28 md:py-24 sm:py-20 pb-32 sm:pb-auto flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-32 xl:gap-40 justify-center items-center bg-[#D9D9D980]">
      <div className="title flex flex-col gap-4 justify-center items-center w-full sm:w-[70%]">
        <Typography
          font="Lora"
          weight="regular"
          className="text-[#000000B2] text-base sm:text-lg md:text-xl lg:text-2xl text-center"
        >
          Optional Plans
        </Typography>
        <Typography
          font="Lora"
          weight="bold"
          className="text-black text-[20px]/7 sm:text-2xl md:text-3xl lg:text-[36px]/[48px] xl:text-[40px]/[52px] text-center"
        >
          Maximize Your Store’s Potential With Strategic Plans
        </Typography>
      </div>
      <div className="w-full flex flex-col md:flex-wrap md:flex-row gap-32 md:gap-auto xl:gap-14 justify-center items-center">
        {pricingPlans.map((plan, index) => (
          <DiscountCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isHighlighted={plan.isHighlighted}
            promoText={plan.promoText}
            annual={plan.annual}
          />
        ))}
      </div>
    </section>
  );
}
