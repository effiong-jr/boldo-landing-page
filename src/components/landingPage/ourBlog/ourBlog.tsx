import Button from "@/components/Button";
import { FC, Fragment } from "react";
import OurBlogCard, { OurBlogCardProps } from "./ourBlogCard";
import ourBlogDetails from "./ourBlogDetails.json";

const OurBlog: FC = () => {
  const displayBlogCards = ourBlogDetails.map(
    (blogDetail: OurBlogCardProps, index) => (
      <Fragment key={index}>
        <OurBlogCard
          primaryImageURL={blogDetail.primaryImageURL}
          category={blogDetail.category}
          description={blogDetail.description}
          imageURL={blogDetail.imageURL}
          name={blogDetail.name}
        />
      </Fragment>
    )
  );

  return (
    <div className="pt-20 lg:pt-[156px]">
      <div className="text-center lg:w-[842px] mx-auto">
        <h3 className="text-xl text-gray font-openSans">Our Blog</h3>
        <p className="text-3xl lg:text-5xl mt-2 leading-10 lg:leading-[72px]">
          Value proposition accelerator product management venture
        </p>
      </div>

      <div className="mt-[77px] sm:space-x-6 flex flex-wrap justify-center lg:justify-between">
        {displayBlogCards}
      </div>
      <div className="mt-10 lg:mt-[100px] text-center">
        <Button className="text-dark-blue text-sm font-bold border-2 border-dark-blue rounded-[56px]">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default OurBlog;
