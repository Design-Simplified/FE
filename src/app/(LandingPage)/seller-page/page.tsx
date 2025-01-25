import NextImage from "@/components/NextImage";
import Layout from "@/layouts/Layout";
import FirstSection from "../_components/SellerPage/FirstSection";
import SecondSection from "../_components/SellerPage/SecondSection";

export default function SellerPage() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full seller-page">
        <FirstSection />
        <SecondSection />
        <NextImage
          src="/LandingPage/StickyRobot.svg"
          alt="Robot"
          width={80}
          height={80}
          className="sticky bottom-0 right-0 ml-auto mr-4 z-[1900] w-20 sm:w-32 sm:mr-8 sm:bottom-4 hover:transform hover:scale-110 transition-transform duration-300"
          imgClassName="object-cover w-full"
        />
      </main>
    </Layout>
  );
}
