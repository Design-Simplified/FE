import Layout from "@/layouts/Layout";
import FirstSection from "./(LandingPage)/_container/LandingPage/FirstSection";
import SecondSection from "./(LandingPage)/_container/LandingPage/SecondSection";
import NextImage from "@/components/NextImage";
import ThirdSection from "./(LandingPage)/_container/LandingPage/ThirdSection";
import FourthSection from "./(LandingPage)/_container/LandingPage/FourthSection";
import FifthSection from "./(LandingPage)/_container/LandingPage/FifthSection";
import SixthSection from "./(LandingPage)/_container/LandingPage/SixthSection";

export default function Home() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full landing-page">
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
          className="sticky ml-auto mr-1 z-[1900] bottom-5 right-5 h-[3rem] w-[3rem] hover:transform hover:scale-110 transition-transform duration-300"
          imgClassName="object-cover w-full"
        />
      </main>
    </Layout>
  );
}
