import Layout from "@/layouts/Layout";
import FirstSection from "./(LandingPage)/_components/LandingPage/FirstSection";
import SecondSection from "./(LandingPage)/_components/LandingPage/SecondSection";
import NextImage from "@/components/NextImage";
import ThirdSection from "./(LandingPage)/_components/LandingPage/ThirdSection";
import FourthSection from "./(LandingPage)/_components/LandingPage/FourthSection";
import FifthSection from "./(LandingPage)/_components/LandingPage/FifthSection";
import SixthSection from "./(LandingPage)/_components/LandingPage/SixthSection";

export default function Home() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
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
