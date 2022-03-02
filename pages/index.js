import Enjoy from "../components/Enjoy";
import Frequently from "../components/Frequently";
import Kid from "../components/Kid";
import LandingPage from "../components/LandingPage";
import PhoneSection from "../components/PhoneSection";
import WatchEverywhere from "../components/WatchEverywhere";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <PhoneSection />
      <WatchEverywhere />
      <Enjoy/>
      <Kid/>
      <Frequently/>
    </div>
  );
}
