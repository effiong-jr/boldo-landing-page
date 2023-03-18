import { FC } from "react";
import Image from "next/image";

export interface ReviewCardProps {
  reviewText: string;
  reviewerName: string;
  reviewerTitle: string;
  imageName: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  reviewText,
  reviewerName,
  reviewerTitle,
  imageName,
}) => {
  return (
    <div className="w-[350px] h-auto rounded-xl p-10 bg-white font-openSans h-max">
      <p className="text-2xl leading-9 text-black">{`"${reviewText}"`}</p>

      <div className="mt-10 flex items-center">
        <div className="rounded-full mr-4">
          <Image
            src={`/assets/landingPage/reviewers/${imageName}`}
            alt="Reviewer's Image"
            height={58}
            width={58}
            className="object-cover object-top"
          />
        </div>

        <div>
          <div className="text-dark-blue font-bold text-base">
            {reviewerName}
          </div>
          <div className="text-dark-blue text-sm">{reviewerTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
