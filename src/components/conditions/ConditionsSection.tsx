
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../services/ServiceCard';
import { pageRoutes, linkToPageHero } from '../../utils/linkHelper';

interface ConditionsSectionProps {
  className?: string;
  showViewAll?: boolean;
  limit?: number;
}

const ConditionsSection: React.FC<ConditionsSectionProps> = ({
  className = '',
  showViewAll = true,
  limit = 6,
}) => {
  const conditions = [
    {
      title: 'Borderline Personality Disorder',
      description:
        'Therapy for emotional regulation, interpersonal skills, and building a stable sense of self.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.bpd,
    },
    {
      title: 'Dissociative Disorders',
      description:
        'Specialized treatment for dissociative symptoms and fragmented experiences.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.dissociativeDisorders,
    },
    {
      title: 'Eating Disorders',
      description:
        'Comprehensive care for anorexia, bulimia, binge eating, and building a healthy relationship with food.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.eatingDisorders,
    },
    {
      title: 'Grief & Loss',
      description:
        'Support through the grief process and finding meaning after significant losses.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.grief,
    },
    {
      title: 'Relationship Issues',
      description:
        'Help navigating relationship challenges, communication problems, and attachment concerns.',
      image: '/images/couple-counseling-havertown-pa.webp',
      link: pageRoutes.relationship,
    },
    {
      title: 'Schizophrenia',
      description:
        'Evidence-based treatment for managing schizophrenia symptoms and improving quality of life.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.schizophrenia,
    },
    {
      title: 'Sleep Disorders',
      description:
        'Treatment for insomnia and other sleep disturbances to improve rest and daytime functioning.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.sleepDisorders,
    },
    {
      title: 'Somatic Symptom Disorders',
      description:
        'Therapy addressing the connection between physical symptoms and psychological distress.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.somaticDisorders,
    },
    {
      title: 'Substance Use Disorders',
      description:
        'Compassionate treatment for addiction and substance use challenges.',
      image: '/images/therapy-in-havertown.jpg',
      link: pageRoutes.substanceUse,
    },
  ];

  const displayedConditions = limit ? conditions.slice(0, limit) : conditions;

  return (
    <section className={`py-12 bg-white dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mental Health Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert care for a wide range of mental health conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedConditions.map((condition, index) => (
            <ServiceCard
              key={index}
              title={condition.title}
              description={condition.description}
              image={condition.image}
              link={condition.link}
            />
          ))}
        </div>

        {showViewAll && limit && conditions.length > limit && (
          <div className="mt-12 text-center">
            <Link
              to="/conditions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View All Conditions
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConditionsSection;
