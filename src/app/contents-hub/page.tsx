import Layout from "@/layouts/Layout";
import FirstSection from "./container/FirstSection";
import SecondSection from "./container/SecondSection";
import ThirdSection from "./container/ThirdSection";
import FourthSection from "./container/FourthSection";

export default function ContentHubPage() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full contents-hub">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </Layout>
  );
}
