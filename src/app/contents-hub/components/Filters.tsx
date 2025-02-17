"use client";

import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { IoClose } from "react-icons/io5";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import { Slider } from "@/components/Slider";

type FilterTitle =
  | "Filter by"
  | "Niche"
  | "Sub-Niche"
  | "Pricing Model"
  | "priceRange";

const FilterMenu: {
  title: FilterTitle;
  multiple: boolean;
  options: string[];
}[] = [
  {
    title: "Filter by",
    multiple: true,
    options: ["Best-Selling", "Trending", "Exclusive", "Discount"],
  },
  {
    title: "Niche",
    multiple: true,
    options: ["Social Media", "Business", "Multimedia", "Marketplace"],
  },
  {
    title: "Sub-Niche",
    multiple: true,
    options: [
      "Presentation Slides",
      "Invoices",
      "Business Cards",
      "Meeting Agendas",
      "Letterheads",
      "Company Profiles",
      "Contracts & Agreements",
      "Reports & Proposals",
      "Certificates",
    ],
  },
  {
    title: "Pricing Model",
    multiple: false,
    options: ["Free", "Premium", "Exclusive", "Bundle"],
  },
];

interface FilterData {
  "Filter by": string[];
  Niche: string[];
  "Sub-Niche": string[];
  "Pricing Model": string;
  priceRange: number[];
}

export default function Filters({
  setOpenFilter,
}: {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const methods = useForm({
    defaultValues: {
      "Filter by": [],
      Niche: [],
      "Sub-Niche": [],
      "Pricing Model": "",
      priceRange: [5],
    },
  });

  const { handleSubmit, register } = methods;

  const watchFilters = methods.watch() as FilterData;

  const onSubmit = (data: FilterData) => {
    // console.log("Submitted Data:", data);
    setOpenFilter(false);
  };

  return (
    <div className="absolute bg-[#00000099] z-50 w-full h-full -left-0">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-row items-start justify-end relative px-[26px] xl:px-[60px] lg:px-12 md:px-9 sm:px-7 pt-8 xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10"
        >
          <div className="sm:w-[345px] bg-white relative -left-10 rounded-xl flex flex-col">
            <svg
              className="absolute top-4 -right-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M17.0796 10.5654L0.00634098 20.8687L0.0868912 10.4342L0.167441 -0.000317763L17.0796 10.5654Z"
                fill="white"
              />
            </svg>

            <div className="w-full flex flex-col gap-7 items-start justify-center px-4 py-5">
              {FilterMenu.map(({ title, options, multiple }) => (
                <div
                  key={title}
                  className="pb-8 pt-5 flex flex-col gap-6 border-b border-[#BBBCBF] w-full"
                >
                  <Typography
                    variant="h5"
                    font="Lora"
                    weight="semibold"
                    className="text-black md:text-xl text-xl"
                  >
                    {title}
                  </Typography>

                  {multiple ? (
                    <div className="grid gap-2">
                      {options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            value={option}
                            className="hidden"
                            {...register(title as keyof typeof watchFilters)}
                          />
                          <span className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
                            {Array.isArray(watchFilters[title]) &&
                              (watchFilters[title] as string[]).includes(
                                option,
                              ) && (
                                <span className="w-2.5 h-2.5 bg-black rounded-full" />
                              )}
                          </span>
                          {option}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <RadioGroup
                      value={watchFilters[title] as string}
                      onValueChange={(value) => methods.setValue(title, value)}
                    >
                      {options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <RadioGroupItem {...register(title)} value={option} />
                          {option}
                        </label>
                      ))}
                    </RadioGroup>
                  )}
                </div>
              ))}

              {watchFilters["Pricing Model"] === "Exclusive" && (
                <div className="pb-8 pt-5 flex flex-col gap-16 border-b border-[#BBBCBF] w-full">
                  <Typography
                    variant="h5"
                    font="Lora"
                    weight="semibold"
                    className="text-black md:text-xl text-xl"
                  >
                    Price Range
                  </Typography>
                  <Slider
                    defaultValue={watchFilters.priceRange}
                    value={watchFilters.priceRange}
                    onValueChange={(val) => {
                      methods.setValue("priceRange", val);
                    }}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>
              )}

              <div className="w-full flex items-end flex-row justify-end">
                <Button
                  variant="green"
                  type="submit"
                  className="px-4 py-2 rounded-lg"
                >
                  <Typography
                    variant="p"
                    font="Lora"
                    weight="medium"
                    className="text-white md:text-base text-base"
                  >
                    Apply
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
          <Button
            variant="white"
            type="button"
            className="p-2 rounded-lg"
            onClick={() => setOpenFilter(false)}
          >
            <IoClose
              color="#525B44"
              size={19}
              className="xl:size-8 lg:size-7 md:size-6 sm:size-5"
              strokeWidth={2}
            />
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
