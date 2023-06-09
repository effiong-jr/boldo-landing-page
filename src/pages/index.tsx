import Hero from "@/components/landingPage/hero/Hero";
import OurServices from "@/components/landingPage/ourServices/OurServices";
import StartNow from "@/components/landingPage/startNow/StartNow";
import Reviews from "@/components/landingPage/reviews/Reviews";
import Connect from "@/components/landingPage/connect/Connect";
import OurBlog from "@/components/landingPage/ourBlog/ourBlog";
import Subscribe from "@/components/landingPage/subscribe/Subscribe";
import Footer from "@/components/landingPage/footer/Footer";

export default function Home() {
  return (
    <div className="overflow-clip max-w-screen-2xl flex flex-col mx-auto relative">
      <Hero />
      <div className="px-4 md:px-[156px]">
        <OurServices />
        <StartNow />
      </div>
      <Reviews />
      <div className="px-6 lg:px-[150px]">
        <Connect />
        <OurBlog />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
