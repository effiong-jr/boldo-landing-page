import { FC } from "react";

const HeroImage2: FC = () => {
  return (
    <>
      <svg
        width="193"
        height="166"
        viewBox="0 0 193 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_64_1021)">
          <rect
            x="0.215698"
            y="0.664978"
            width="192.175"
            height="165.335"
            rx="15.0305"
            fill="white"
            fillOpacity="0.18"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_64_1021"
            x="-68.495"
            y="-68.0457"
            width="329.596"
            height="302.756"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="34.3553" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_64_1021"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_64_1021"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default HeroImage2;
