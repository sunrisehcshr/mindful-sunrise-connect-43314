
import React from 'react';
import { Link } from 'react-router-dom';
import { linkToPageHero } from '../../utils/linkHelper';

interface WarmServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alt?: string;
}

const WarmServiceCard: React.FC<WarmServiceCardProps> = ({
  title,
  description,
  image,
  link,
  alt = '',
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative pb-[65%] overflow-hidden">
        <img
          src={image}
          alt={alt || `${title} image`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to={linkToPageHero(link)}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <svg
            className="ml-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default WarmServiceCard;
