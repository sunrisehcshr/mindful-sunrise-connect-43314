
import React from 'react';
import { Link } from 'react-router-dom';
import { pageRoutes, linkToPageHero } from '../utils/linkHelper';

interface InternalNavLinksProps {
  className?: string;
}

const InternalNavLinks: React.FC<InternalNavLinksProps> = ({ className = '' }) => {
  const links = [
    { title: 'Depression Therapy', url: linkToPageHero(pageRoutes.depressionTherapy) },
    { title: 'Anxiety Therapy', url: linkToPageHero(pageRoutes.anxietyTherapy) },
    { title: 'Couples Counseling', url: linkToPageHero(pageRoutes.couplesCounseling) },
    { title: 'Family Therapy', url: linkToPageHero(pageRoutes.familyTherapy) },
    { title: 'Child Therapy', url: linkToPageHero(pageRoutes.childTherapy) },
    { title: 'ADHD Treatment', url: linkToPageHero(pageRoutes.adhd) },
    { title: 'Trauma & PTSD', url: linkToPageHero(pageRoutes.traumaPTSD) },
    { title: 'OCD Therapy', url: linkToPageHero(pageRoutes.ocd) },
  ];

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light whitespace-nowrap px-2 py-1"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalNavLinks;
