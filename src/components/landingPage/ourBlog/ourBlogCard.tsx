import { FC } from "react";
import Image from "next/image";

export interface OurBlogCardProps {
  primaryImageURL: string;
  category: string;
  description: string;
  imageURL: string;
  name: string;
}

const OurBlogCard: FC<OurBlogCardProps> = ({
  category,
  description,
  imageURL,
  name,
  primaryImageURL,
}) => {
  return (
    <div className="flex items-stretch flex-col font-openSans mb-14 lg:mb-0 w-[300px] justify-between">
      <div>
        <div className="h-52 rounded-xl overflow-clip">
          <Image
            src={primaryImageURL}
            alt="blog primary image"
            height={209}
            width={300}
            className="object-cover h-[209px] w-[300px]"
          />
        </div>

        <div className="mt-6 font-openSans">
          <div>
            <p className="text-base space-x-3">
              <span className="font-bold text-dark-blue">Category</span>
              <span className="text-gray font-light">{category}</span>
            </p>

            <p className="text-xl leading-8 mt-3">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center space-x-3">
        <span>
          <Image src={imageURL} alt="writer\'s image" height={32} width={32} />
        </span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default OurBlogCard;
