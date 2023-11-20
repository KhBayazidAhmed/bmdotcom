import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import HowTo from "@/components/HowTo";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <Pricing />
      <HowTo />
      <Footer />
    </>
  );
}
