import HomeSection from "@/components/HomeSection";
import HowTo from "@/components/HowTo";
import Pricing from "@/components/Pricing";
import Feedback from "@/components/Feedback";
import Team from "@/components/Team";
export default function Home() {
  return (
    <>
      <HomeSection />
      <Pricing />
      <HowTo />
      <Team />
      <Feedback />
    </>
  );
}
