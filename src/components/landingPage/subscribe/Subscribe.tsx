import { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Subscribe: FC = () => {
  return (
    <div className="bg-dark-blue text-white w-full lg:max-w-[90%] min-h-[391px] rounded-xl mx-auto mt-[124px] flex justify-center items-center relative overflow-clip">
      <div className="absolute top-0 right-0">
        <Image
          src="/assets/landingPage/subscribe/ellipse.svg"
          alt=""
          height={700}
          width={850}
        />
      </div>
      <div className=" lg:w-[716px] text-center z-10">
        <p className="text-3xl lg:text-5xl leading-10 lg:leading-[72px] font-light">
          An enterprise template to ramp up your company website
        </p>

        <div className="mt-9 lg:mt-[50px] flex flex-wrap space-y-16 sm:space-y-0 justify-center space-x-4">
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
