import Hero from "@/components/landingPage/hero/Hero";
import Navbar from "@/components/landingPage/navbar/Navbar";
import OurServices from "@/components/landingPage/ourServices/OurServices";

export default function Home() {
  return (
    <div className="overflow-clip">
      <Hero />
      <OurServices />
    </div>
  );
}
