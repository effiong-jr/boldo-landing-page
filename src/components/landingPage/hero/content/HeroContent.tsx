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
            {/* <div> */}
            <HeroImage2 />
            {/* <HeroImage2Graph /> */}
            {/* </div> */}
            <HeroImage3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
