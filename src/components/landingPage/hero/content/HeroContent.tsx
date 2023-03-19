import Button from "@/components/Button";
import { FC } from "react";
import HeroImage1 from "./HeroImage1";
import HeroImage2 from "./HeroImage2";
import HeroImage3 from "./HeroImage3";

const HeroContent: FC = () => {
  return (
    <section className="flex justify-between items-center mt-[73px]">
      <div className="max-w-[567px]">
        <h1 className="text-5xl text-white leading-[72px] font-thin mb-4">
          Save time by building fast with Boldo Template
        </h1>
        <p className="font-openSans text-base text-light-grey font-thin leading-7">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="mt-10 space-x-5">
          <Button className="bg-green rounded-[56px]">Buy template</Button>
          <Button className="rounded-[56px] border border-white text-white ">
            Explore
          </Button>
        </div>
      </div>

      <div>
        <div className="max-w-[493.80px]">
          <div className="mb-6">
            <HeroImage1 />
          </div>
          <div className="flex justify-between">
            <HeroImage2 />
            <HeroImage3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
