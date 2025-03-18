
import React from 'react';
import { Link } from 'react-router-dom';
import { linkToPageHero } from '../../utils/linkHelper';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  serviceLink?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  date,
  author,
  slug,
  serviceLink
}) => {
  // If there's a service link provided (for "Learn More" to a service/condition page)
  const learnMoreLink = serviceLink ? linkToPageHero(serviceLink) : `/blog/${slug}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${slug}`} className="block relative pb-[56.25%] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        
        <Link to={`/blog/${slug}`} className="hover:text-primary-600 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/blog/${slug}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            Read More
          </Link>
          
          {serviceLink && (
            <Link 
              to={learnMoreLink}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
