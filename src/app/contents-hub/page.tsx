import Layout from "@/layouts/Layout";
import FirstSection from "./container/FirstSection";

export default function ContentHubPage() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <main className="w-full contents-hub">
        <FirstSection />
      </main>
    </Layout>
  );
}
