import NextImage from "@/components/NextImage";
import SwappableImage from "../components/SwapImage";

export default function FirstSection() {
  return (
    <section className="w-full px-3 py-5 flex flex-col gap-2 sm:flex-row sm:gap-4">
      <SwappableImage />
      <div className="flex flex-row gap-2 sm:flex-col w-full justify-center items-center">
        <NextImage
          src="/ContentsHub/miniBanner1.png"
          width={176}
          height={135}
          className="min-h-[135px] sm:min-h-[100px] lg:min-h-[200px] xl:min-h-[240px] grow"
          imgClassName="object-cover w-full"
          alt="Banner Image"
        />
        <NextImage
          src="/ContentsHub/miniBanner2.png"
          width={176}
          height={135}
          className="min-h-[135px] sm:min-h-[100px] lg:min-h-[200px] xl:min-h-[240px] grow"
          imgClassName="object-cover w-full"
          alt="Banner Image"
        />
      </div>
    </section>
  );
}
