import Layout from "@/layouts/Layout";
import Image from "next/image";
import FirstSection from "./(LandingPage)/_components/LandingPage/FirstSection";

export default function Home() {
  return (
    <Layout withFooter={false} withNavbar={true}>
      <main className="w-full">
        <FirstSection />
      </main>
    </Layout>
  );
}
