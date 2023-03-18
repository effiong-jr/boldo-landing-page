import Hero from "@/components/landingPage/hero/Hero";
import OurServices from "@/components/landingPage/ourServices/OurServices";
import StartNow from "@/components/landingPage/startNow/StartNow";
import Testimonials from "@/components/landingPage/reviews/Reviews";

export default function Home() {
  return (
    <div className="overflow-clip max-w-screen-2xl flex flex-col mx-auto relative">
      <Hero />
      <div className="px-[156px]">
        <OurServices />
        <StartNow />
      </div>
      <Testimonials />
    </div>
  );
}
