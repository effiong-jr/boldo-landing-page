import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="flex space-x-44 mt-[84px] p-[100px] font-openSans">
      <div className="max-w-[300px]">
        <div className="flex items-center space-x-2">
          <span>
            <Image
              src="/assets/landingPage/footer/footer_logo.svg"
              alt="footer logo"
              height={32.37}
              width={24.29}
            />
          </span>
          <span className="font-manrope text-dark-blue font-bold text-[43.25px]">
            Boldo
          </span>
        </div>

        <div className="text-gray text-base leading-7 mt-[60px]">
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="mt-16">All rights reserved.</p>
        </div>
      </div>

      <div>
        <h4 className="font-openSans font-bold text-sm">Landings</h4>
        <ul className="normal-case mt-8 text-gray space-y-8 text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>

      <div>
        <h4 className="font-openSans font-bold text-sm">Company</h4>
        <ul className="normal-case mt-8 text-gray space-y-8 text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="space-x-3 cursor-pointer">
            <span>Careers</span>
            <span className="bg-green text-dark-blue text-[13px] font-bold rounded-[120px] h-[30px] w-[72px] px-[14px] py-2">
              Hiring!
            </span>
          </li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>

      <div>
        <h4 className="font-openSans font-bold text-sm">Landings</h4>
        <ul className="normal-case mt-8 text-gray space-y-8 text-xl">
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
