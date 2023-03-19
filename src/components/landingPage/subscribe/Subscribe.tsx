import { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Subscribe: FC = () => {
  return (
    <div className="bg-dark-blue text-white max-w-[90%] h-[391px] rounded-xl mx-auto w-full mt-[124px] flex justify-center items-center relative overflow-clip">
      <div className="absolute top-0 right-0">
        <Image
          src="/assets/landingPage/subscribe/ellipse.svg"
          alt=""
          height={700}
          width={850}
        />
      </div>
      <div className=" w-[716px] text-center z-10">
        <p className="text-5xl leading-[72px] font-light">
          An enterprise template to ramp up your company website
        </p>

        <div className="mt-[50px] flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-white rounded-[240px] w-[370px] h-14 outline-none px-8 text-black"
          />
          <Button className="bg-green text-dark-blue rounded-[56px] w-[210px] h-[60px] text-sm font-bold">
            Start now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
