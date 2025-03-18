
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { pageRoutes, linkToPageHero } from '../../utils/linkHelper';

interface ServicesSectionProps {
  className?: string;
  showViewAll?: boolean;
  limit?: number;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  className = '',
  showViewAll = true,
  limit = 6,
}) => {
  const services = [
    {
      title: 'Depression Therapy',
      description:
        'Effective therapy to help overcome depression and regain a sense of joy and purpose in life.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.depressionTherapy,
    },
    {
      title: 'Anxiety Therapy',
      description:
        'Evidence-based techniques to manage anxiety and find peace of mind.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.anxietyTherapy,
    },
    {
      title: 'Couples Counseling',
      description:
        'Rebuild connection and resolve conflicts to strengthen your relationship.',
      image: '/images/couple-counseling-havertown-pa.webp',
      link: pageRoutes.couplesCounseling,
    },
    {
      title: 'Child Therapy',
      description:
        'Supportive therapy to help children navigate emotional challenges and develop healthy coping skills.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.childTherapy,
    },
    {
      title: 'Family Therapy',
      description:
        'Improve family dynamics and create a more harmonious home environment.',
      image: '/images/family-counseling-havertown.webp',
      link: pageRoutes.familyTherapy,
    },
    {
      title: 'Trauma & PTSD Therapy',
      description:
        'Specialized treatment to heal from trauma and reclaim your life.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.traumaPTSD,
    },
    {
      title: 'ADHD Treatment',
      description:
        'Comprehensive approaches to manage ADHD symptoms and improve focus and functioning.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.adhd,
    },
    {
      title: 'OCD Therapy',
      description:
        'Effective treatment for obsessive-compulsive disorder to reduce symptoms and intrusive thoughts.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.ocd,
    },
    {
      title: 'Psychiatric Evaluations',
      description:
        'Thorough assessments to understand your mental health needs and develop appropriate treatment plans.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.psychiatricEvaluations,
    },
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={`py-12 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mental Health Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive mental health services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>

        {showViewAll && limit && services.length > limit && (
          <div className="mt-12 text-center">
            <Link
              to={pageRoutes.services}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
