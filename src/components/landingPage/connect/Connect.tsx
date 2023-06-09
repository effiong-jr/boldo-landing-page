import { FC } from "react";
import Image from "next/image";

const Connect: FC = () => {
  return (
    <div className="pt-11 lg:pt-[124px]">
      <div className="mx-auto flex justify-center">
        <Image
          className="object-cover w-full"
          src="/assets/landingPage/connectSection/workspace_image.svg"
          alt="workspace image"
          height={403}
          width={1100}
        />
      </div>

      <div className="mt-14 lg:flex justify-between font-openSans text-lg lg:text-xl">
        <div className="mb-10">
          <p className="lg:w-[500px] leading-9 lg:leading-[56px] text-3xl lg:text-4xl">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
        </div>

        <div>
          <ul className="space-y-10">
            <li className="flex justify-between items-center lg:w-[500px] pb-5 border-b border-b-light-grey hover:cursor-pointer">
              <div>We connect our customers with the best?</div>
              <div className="flex justify-center items-center rounded-full h-7 w-7 bg-dark-blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>

            <li className="flex justify-between lg:w-[500px] pb-5 border-b border-b-light-grey hover:cursor-pointer">
              <div>Android research & development rockstar? </div>
              <div className="flex justify-center items-center rounded-full h-7 w-7 bg-dark-blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
