import Button from "@/components/Button";
import Image from "next/image";

const OurServices = () => {
  const featureImageURL = [
    "/assets/landingPage/ourServices/our_services_image_1.svg",
    "/assets/landingPage/ourServices/our_services_image_2.svg",
    "/assets/landingPage/ourServices/our_services_image_3.svg",
  ];

  const featuresDesc = featureImageURL.map((featureImageURL: string) => (
    <div
      className="w-[300px] mb-11 lg:mb-0 mx-auto md:mx-2"
      key={featureImageURL}
    >
      <div>
        <Image
          src={featureImageURL}
          width={300}
          height={354}
          alt="cool feature title"
        />
      </div>
      <div className="mt-6">
        <p className="font-openSans text-2xl">Cool feature title</p>
        <p className="font-openSans text-xl text-gray mt-3">
          Learning curve network effects return on investment.
        </p>
      </div>
      <div className="mt-4 lg:mt-7">
        <Button className="px-0 py-0 font-bold text-xl flex pb-2 items-center border-b-2 border-b-dark-blue rounded-none">
          <span className="mr-4">Explore page</span>
          <span>
            <Image
              src="/assets/landingPage/ourServices/arrow-right.svg"
              width={24}
              height={26}
              alt="Explore button arrow"
            />
          </span>
        </Button>
      </div>
    </div>
  ));

  return (
    <div className="pt-20">
      <h3 className="font-openSans text-xl text-center text-gray">
        Our Services
      </h3>
      <p className="text-3xl lg:text-5xl lg:w-[842px] text-center mx-auto mt-3 leading-[50px] lg:leading-[72px]">
        Handshake infographic mass market crowdfunding iteration.
      </p>

      <section className="flex flex-wrap justify-between items-center mt-[78px]">
        {featuresDesc}
      </section>
    </div>
  );
};

export default OurServices;
