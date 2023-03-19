import { FC, Fragment } from "react";
import Image from "next/image";
import ReviewCard, { ReviewCardProps } from "./ReviewCard";
import reviews from "./reviews.json";

const Reviews: FC = () => {
  const displayReviews = reviews.map((review: ReviewCardProps, index) => (
    <Fragment key={index}>
      <ReviewCard
        reviewText={review.reviewText}
        reviewerName={review.reviewerName}
        reviewerTitle={review.reviewerTitle}
        imageName={review.imageName}
      />
    </Fragment>
  ));

  return (
    <div className="min-h-[797px] bg-dark-blue text-white px-[150px] py-24">
      <div className="flex justify-between items-end">
        <h3 className="max-w-[716px] text-5xl leading-[72px] font-light ">
          An enterprise template to ramp up your company website
        </h3>

        <div className="flex space-x-6">
          <div className="w-[72px] h-[72px] rounded-full bg-white text-dark-blue flex justify-center items-center hover:cursor-pointer ">
            <Image
              className="mx-auto"
              src="/assets/icons/arrow-left.svg"
              alt="arrow-left"
              width={36}
              height={39}
            />
          </div>
          <div className="w-[72px] h-[72px] rounded-full bg-white text-dark-blue flex justify-center items-center hover:cursor-pointer ">
            <Image
              className="mx-auto"
              src="/assets/icons/arrow-right.svg"
              alt="arrow-left"
              width={36}
              height={39}
            />
          </div>
        </div>
      </div>

      <div className="mt-[72px] flex justify-around items-start">
        {displayReviews}
      </div>
    </div>
  );
};

export default Reviews;
