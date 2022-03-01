import FAQ from "../components/FAQ";
import LandingPage from "../components/LandingPage";
import PhoneSection from "../components/PhoneSection";
import WatchEverywhere from "../components/WatchEverywhere";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <PhoneSection />
      <WatchEverywhere />
      <FAQ />
    </div>
  );
}
