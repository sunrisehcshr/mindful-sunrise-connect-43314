"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { CalendarIcon, Clock3, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/section-tag";
import CurveTransition from "@/components/ui/CurveTransition";

const blogPosts = [
  {
    id: "finding-therapist-darby-pa-guide",
    title: "Finding the Right Therapist in Darby, PA: A Complete Guide",
    excerpt:
      "Discover how to find the perfect therapist in Darby, PA. Learn about therapy types, insurance options, and what to look for in a mental health professional.",
    date: "Oct 28, 2025",
    readTime: "12 min read",
    image: "/images/finding-therapist-havertown.webp",
    category: "Guidance",
  },
  {
    id: "anxiety-treatment-delaware-county-pa",
    title: "Anxiety Treatment Options in Delaware County, PA",
    excerpt:
      "Comprehensive guide to anxiety treatment in Delaware County. Learn about therapy approaches, medication options, and local resources.",
    date: "Oct 27, 2025",
    readTime: "10 min read",
    image: "/images/anxiety-treatment-delaware-county.webp",
    category: "Anxiety",
  },
  {
    id: "depression-therapy-darby-pa-complete-guide",
    title: "Depression Therapy in Darby, PA: Guide to Recovery",
    excerpt:
      "Understanding depression treatment options in Darby, PA. From evidence-based therapies to medication management.",
    date: "Oct 26, 2025",
    readTime: "11 min read",
    image: "/images/depression-therapy-havertown.webp",
    category: "Depression",
  },
  {
    id: "family-therapy-darby-pa-guide",
    title: "Family Therapy in Darby, PA: Strengthening Bonds",
    excerpt:
      "Learn how family therapy in Darby can help resolve conflicts, improve communication, and strengthen relationships.",
    date: "Oct 25, 2025",
    readTime: "9 min read",
    image: "/images/family-therapy-havertown-guide.webp",
    category: "Family",
  },
  {
    id: "adhd-treatment-darby-pa-comprehensive-guide",
    title: "ADHD Treatment in Darby, PA: A Guide for Families",
    excerpt:
      "Complete guide to ADHD treatment in Darby, PA. Explore therapy options, medication management, and local resources.",
    date: "Oct 24, 2025",
    readTime: "13 min read",
    image: "/images/adhd-treatment-havertown.webp",
    category: "ADHD",
  },
];

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="Mental Health Resources & Blog | Sunrise Human Care Services Darby"
        description="Expert mental health insights for Darby residents. Read our professional articles on anxiety management, depression treatment, and family support."
        canonicalUrl="https://sunrisehumancare.com/blog"
        keywords="mental health blog Darby, anxiety tips Pennsylvania, depression resources Delaware County, therapist advice"
        article={true}
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Blog Hero */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="mb-6 flex justify-center">
                  <SectionTag className="border-white/20 text-white bg-white/10">
                    Expert Insights
                  </SectionTag>
                </div>
                <h1 className="font-barlow font-bold text-4xl md:text-7xl text-white tracking-tighter leading-none mb-8">
                  Healing Through <br />
                  <span className="font-instrument-serif italic text-orange-500 font-normal">
                    Understanding.
                  </span>
                </h1>
                <p className="text-stone-300 text-lg md:text-xl font-barlow max-w-2xl mx-auto leading-relaxed">
                  Deep dives into mental wellness, clinical strategies, and Darby
                  community resources from our licensed professionals.
                </p>
              </motion.div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* Blog Feed */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {blogPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="group flex flex-col"
                    >
                      <Link
                        href={`/blog/${post.id}`}
                        className="block relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-stone-100 shadow-sm mb-6"
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-1.5 bg-white/95 rounded-full text-[10px] font-bold uppercase tracking-widest text-orange-600 border border-white/50">
                            {post.category}
                          </span>
                        </div>
                      </Link>

                      <div className="flex items-center gap-4 mb-3 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarIcon className="w-3 h-3 text-orange-500" />{" "}
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock3 className="w-3 h-3 text-orange-500" />{" "}
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>

                      <p className="text-stone-500 font-barlow leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.id}`}
                        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-stone-900 group-hover:text-orange-600 transition-colors"
                      >
                        Read Full Article
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}