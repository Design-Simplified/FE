import NextImage from "@/components/NextImage";
import Layout from "@/layouts/Layout";
import FirstSection from "../_container/SellerPage/FirstSection";
import SecondSection from "../_container/SellerPage/SecondSection";
import ThirdSection from "../_container/SellerPage/ThirdSection";
import FourthSection from "../_container/SellerPage/FourthSection";
import FifthSection from "../_container/SellerPage/FifthSection";

export default function SellerPage() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full seller-page">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <NextImage
          src="/LandingPage/StickyRobot.svg"
          alt="Robot"
          width={48}
          height={48}
          className="sticky bottom-5 right-5 ml-auto z-[1900] w-[3rem] h-[3rem] hover:transform hover:scale-110 transition-transform duration-300"
          imgClassName="object-cover w-full"
        />
      </main>
    </Layout>
  );
}
