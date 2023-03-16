import { FC } from "react";
import Navbar from "../navbar/Navbar";

const Hero: FC = () => {
  return (
    <div className="bg-dark-blue h-screen w-screen relative">
      <div className="absolute flex justify-end right-0 ml-0 w-screen overflow-hidden">
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

      <div className="absolute px-8 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
