import { FC, useState } from "react";
import Button from "@/components/Button";
import clsx from "clsx";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = ["Product", "Service", "About"];

  const displayMenuItems = menuItems.map((item: string) => (
    <li
      key={item}
      className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      {item}
    </li>
  ));

  return (
    <>
      <div className="flex text-white justify-between items-center w-full pt-1 md:pt-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <span className="leading-8 mr-[11.27px]">
            <svg
              width="26"
              height="34"
              viewBox="0 0 26 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z"
                fill="#65E4A3"
              />
              <path
                d="M0 0.526352H11.3927C15.0552 0.526352 18.0243 3.49541 18.0243 7.15793C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526352Z"
                fill="#65E4A3"
              />
            </svg>
          </span>
          <h1 className="font-bold text-3xl md:text-[43.25px]">Boldo</h1>
        </div>

        {/* Mobile Responsive navbar */}
        <div className="flex justify-center items-center">
          <div
            className="relative md:hidden hover:cursor-pointer flex justify-center items-center "
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && (
              // Hambuger Icon
              <div>
                <svg
                  className="fill-white"
                  width="40px"
                  height="40px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Nav list */}
        <div className="hidden md:block">
          <ul className="flex items-center sm:space-x-10 font-openSans font-semibold">
            {displayMenuItems}
            <li className="cursor-pointer">
              <Button
                type="button"
                className="rounded-3xl bg-white text-dark-blue"
                role="button"
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          isMenuOpen
            ? "h-screen w-screen block  md:hidden float-left clear-both fixed top-0 left-0 z-50"
            : "h-0 w-0 overflow-hidden",
          "transition-all ease-in-out duration-500"
        )}
      >
        <ul className="bg-dark-blue pt-5 py-14 space-y-12 text-center text-white font-light text-2xl font-openSans h-screen">
          <li
            className="text-right flex justify-end hover:cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="fill-white"
              width="50px"
              height="50px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" />
            </svg>
          </li>
          {displayMenuItems}
          <li className="cursor-pointer">
            <Button
              type="button"
              className="rounded-3xl bg-white text-dark-blue"
              role="button"
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default Navbar;
