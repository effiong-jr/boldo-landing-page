import { FC } from "react";
import HeroContent from "./content/HeroContent";
import Navbar from "../navbar/Navbar";
import Footer from "./footer/Footer";

const Hero: FC = () => {
  return (
    <div className="bg-dark-blue min-h-[798px] w-screen ">
      <div className="absolute flex justify-end right-0 ml-0 w-screen">
        <svg
          width="623"
          height="504"
          viewBox="0 0 623 504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="646.5" cy="-142.5" r="646.5" fill="#1C3D5B" />
        </svg>
      </div>

      <div className="absolute px-5 md:px-[100px] py-7 w-full">
        <Navbar />
        <HeroContent />
        <div className="mt-14 flex justify-center pt-8">
          <div className="max-w-full">
            <Footer />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
