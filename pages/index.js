import Enjoy from "../components/Enjoy";
import Kid from "../components/Kid";
import Footer from "../components/Footer";
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
      <Footer/>
    </div>
  );
}
