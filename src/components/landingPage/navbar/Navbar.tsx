import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="flex text-white justify-between w-full pt-3">
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

      {/* Nav list */}
      <div className="">
        <ul className="flex items-center sm:space-x-10 font-openSans font-semibold">
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">
            <button
              type="button"
              role="button"
              className="w-32 h-10 rounded-3xl bg-white text-dark-blue font-bold"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
