import Layout from "@/layouts/Layout";
import Image from "next/image";
import FirstSection from "./(LandingPage)/_components/LandingPage/FirstSection";
import SecondSection from "./(LandingPage)/_components/LandingPage/SecondSection";
import NextImage from "@/components/NextImage";
import ThirdSection from "./(LandingPage)/_components/LandingPage/ThirdSection";

export default function Home() {
  return (
    <Layout withFooter={false} withNavbar={true}>
      <main className="w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <NextImage
          src="/LandingPage/StickyRobot.svg"
          alt="Robot"
          width={80}
          height={80}
          className="sticky bottom-0 right-0 ml-auto mr-4 mb-4 z-[1000]"
          imgClassName="object-cover w-full"
        />
      </main>
    </Layout>
  );
}
