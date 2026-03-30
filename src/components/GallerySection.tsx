import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const InfiniteGallery = React.lazy(() => import('@/components/ui/3d-gallery-photography'));

const sampleImages = [
  { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60', alt: 'Mental health care' },
  { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=600&auto=format&fit=crop', alt: 'Therapy session' },
  { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60', alt: 'Counseling' },
  { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60', alt: 'Wellness' },
  { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60', alt: 'Community care' },
  { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60', alt: 'Support' },
  { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60', alt: 'Healing' },
  { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60', alt: 'Peace' },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">
            Gallery
          </span>
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            A Glimpse Into{' '}
            <span className="font-instrument-serif italic text-amber-400 font-normal">Our World</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-barlow">
            Explore the spaces and moments that define compassionate care at Sunrise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <Suspense fallback={<div className="h-[500px] bg-muted rounded-2xl animate-pulse" />}>
            <InfiniteGallery
              images={sampleImages}
              className="h-[400px] md:h-[500px] w-full"
            />
          </Suspense>
        </motion.div>

        <p className="text-center text-sm text-stone-400 font-barlow mt-4">
          Use mouse wheel or arrow keys to navigate
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
