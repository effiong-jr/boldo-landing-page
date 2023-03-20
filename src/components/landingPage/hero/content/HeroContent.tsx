import Button from "@/components/Button";
import { FC } from "react";
import HeroImage1 from "./HeroImage1";
import HeroImage2 from "./HeroImage2";
import HeroImage2Graph from "./HeroImage2Graph";
import HeroImage3 from "./HeroImage3";

const HeroContent: FC = () => {
  return (
    <section className="block lg:flex lg:justify-between lg:items-center mt-[73px]">
      <div className="max-w-[567px] text-center lg:text-left mx-auto lg:ml-0 space-y-20 lg:space-y-10">
        <h1 className="text-3xl lg:text-5xl text-white leading-[60px] lg:leading-[72px] font-thin mb-4">
          Save time by building fast with Boldo Template
        </h1>
        <p className="font-openSans text-base text-light-grey font-thin leading-7">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="mt-10 space-y-10 sm:space-x-5 md:space-y-5">
          <Button className="bg-green rounded-[56px]">Buy template</Button>
          <Button className="rounded-[56px] border border-white text-white ">
            Explore
          </Button>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="max-w-[493.80px]">
          <div className="mb-6">
            <HeroImage1 />
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <div className="absolute top-4 left-5">
                <svg
                  width="48"
                  height="11"
                  viewBox="0 0 48 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="5.1133"
                    cy="5.60049"
                    rx="4.71999"
                    ry="4.75784"
                    fill="#FC5B00"
                  />
                  <ellipse
                    cx="23.9933"
                    cy="5.60049"
                    rx="4.71999"
                    ry="4.75784"
                    fill="#ECAA00"
                  />
                  <ellipse
                    cx="42.8732"
                    cy="5.60049"
                    rx="4.71999"
                    ry="4.75784"
                    fill="#009D10"
                  />
                </svg>
              </div>
              <HeroImage2 />
              <div className="absolute top-9 flex justify-center items-center mx-auto w-full">
                <HeroImage2Graph />
              </div>
            </div>
            <HeroImage3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
