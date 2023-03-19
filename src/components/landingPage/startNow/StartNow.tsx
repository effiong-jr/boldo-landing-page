import { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const StartNow: FC = () => {
  const startNowListItems = [
    " We connect our customers with the best.",
    "Advisor success customer launch party.",
    "Business-to-consumer long tail.",
  ];

  const displayStartNowListItems = startNowListItems.map((item: string) => (
    <li key={item} className="flex items-center space-x-3 ">
      <span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#0A2640" />
          <path
            d="M26 12L15 23L10 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{item}</span>
    </li>
  ));
  return (
    <div className="pb-[120px]">
      <div className="block lg:flex justify-between mt-10 lg:mt-52">
        <div className="relative container">
          <div className=" top-0">
            <Image
              className="object-contain "
              src="/assets/landingPage/start_now_image_1.svg"
              alt="start now"
              height={506}
              width={494}
            />
          </div>
          <div className="absolute z-10 left-[186px] top-[222px] ">
            <Image
              className="object-contain "
              src="/assets/landingPage/start_now_image_2.svg"
              alt="start now graph"
              height={388}
              width={256}
              // style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div className="mt-24 lg:mt-0 ">
          <h3 className=" lg:w-[493px] text-3xl lg:text-4xl leading-10 lg:leading-[56px] mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <ul className="font-openSans text-xl space-y-7 mb-[52px]">
            {displayStartNowListItems}
          </ul>
          <div>
            <Button className="bg-dark-blue text-white rounded-[56px] h-[60px] w-[210px]">
              Start now
            </Button>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="lg:flex lg:flex-nowrap justify-end  items-center mt-32 lg:mt-[244px] ">
        <div className="w-full flex flex-col items-end h-max order-2">
          <div>
            <div className="">
              <Image
                src="/assets/landingPage/start_now_image_3.svg"
                alt="start now"
                height={506}
                width={494}
              />
            </div>
            <div className="ml-7 -mt-[50%] z-10 w-fit p-0  ">
              <Image
                src="/assets/landingPage/start_now_image_4.svg"
                alt="start now graph"
                height={388}
                width={291}
              />
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="lg:w-[493px] text-3xl lg:text-4xl leading-10 lg:leading-[56px] mb-10 order-1">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>

          <ul className="font-openSans text-xl space-y-7 ">
            <li className="flex items-center space-x-3 bg-dark-blue text-white py-4 px-7 rounded shadow-lg ">
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.24 14.24C23.3658 13.1142 23.9983 11.5872 23.9983 9.99504C23.9983 8.40285 23.3658 6.87588 22.24 5.75004C21.1142 4.62419 19.5872 3.9917 17.995 3.9917C16.4028 3.9917 14.8758 4.62419 13.75 5.75004L7 12.5V21H15.5L22.24 14.24Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 10L4 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 17H11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>We connect our customers with the best.</span>
            </li>

            <li className="flex items-center space-x-3 text-dark-blue py-4 px-7 rounded shadow-lg">
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_62_539)">
                    <path
                      d="M2.77502 13.6543C2.77502 13.6543 6.77502 5.6543 13.775 5.6543C20.775 5.6543 24.775 13.6543 24.775 13.6543C24.775 13.6543 20.775 21.6543 13.775 21.6543C6.77502 21.6543 2.77502 13.6543 2.77502 13.6543Z"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.775 16.6543C15.4319 16.6543 16.775 15.3112 16.775 13.6543C16.775 11.9974 15.4319 10.6543 13.775 10.6543C12.1182 10.6543 10.775 11.9974 10.775 13.6543C10.775 15.3112 12.1182 16.6543 13.775 16.6543Z"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_539">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(1.77502 1.6543)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Advisor success customer launch party.</span>
            </li>

            <li className="flex items-center space-x-3 text-dark-blue py-4 px-7 rounded shadow-lg">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_62_578)">
                    <path
                      d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1V3"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21V23"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.22 4.21997L5.64 5.63997"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.36 18.3601L19.78 19.7801"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 12H3"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12H23"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.22 19.7801L5.64 18.3601"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.36 5.63997L19.78 4.21997"
                      stroke="#0A2640"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <div>
                    <clipPath id="clip0_62_578">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </div>
                </svg>
              </span>
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
