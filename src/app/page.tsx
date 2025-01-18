import Layout from "@/layouts/Layout";
import Image from "next/image";
import FirstSection from "./(LandingPage)/_components/LandingPage/FirstSection";
import SecondSection from "./(LandingPage)/_components/LandingPage/SecondSection";
import NextImage from "@/components/NextImage";

export default function Home() {
  return (
    <Layout withFooter={false} withNavbar={true}>
      <main className="w-full">
        <FirstSection />
        <SecondSection />
        <NextImage
          src="/LandingPage/StickyRobot.svg"
          alt="Robot"
          width={100}
          height={100}
          className="sticky bottom-0 right-0 ml-auto mr-4 mb-4 z-[1000]"
          imgClassName="object-cover w-28 h-28"
        />
      </main>
    </Layout>
  );
}
