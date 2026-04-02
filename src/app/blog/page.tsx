"use client";

import React from "react";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { CalendarIcon, Clock3 } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [{
    id: "finding-therapist-darby-pa-guide",
    title: "Finding the Right Therapist in Darby, PA: A Complete Guide",
    excerpt: "Discover how to find the perfect therapist in Darby, PA. Learn about therapy types, insurance options, and what to look for in a mental health professional in Delaware County.",
    date: "October 28, 2025",
    readTime: "12 min read",
    image: "/images/finding-therapist-havertown.webp",
    altText: "Professional therapy consultation in Darby, PA"
  }, {
    id: "anxiety-treatment-delaware-county-pa",
    title: "Anxiety Treatment Options in Delaware County, PA: What You Need to Know",
    excerpt: "Comprehensive guide to anxiety treatment in Delaware County. Learn about therapy approaches, medication options, and local resources available in Darby and surrounding areas.",
    date: "October 27, 2025",
    readTime: "10 min read",
    image: "/images/anxiety-treatment-delaware-county.webp",
    altText: "Calm anxiety therapy session in Delaware County, PA"
  }, {
    id: "depression-therapy-darby-pa-complete-guide",
    title: "Depression Therapy in Darby, PA: Your Complete Guide to Recovery",
    excerpt: "Understanding depression treatment options in Darby, PA. From evidence-based therapies to medication management, find the right path to recovery.",
    date: "October 26, 2025",
    readTime: "11 min read",
    image: "/images/depression-therapy-havertown.webp",
    altText: "Hopeful depression recovery therapy in Darby, PA"
  }, {
    id: "family-therapy-darby-pa-guide",
    title: "Family Therapy in Darby, PA: Strengthening Your Family Bonds",
    excerpt: "Learn how family therapy in Darby can help resolve conflicts, improve communication, and strengthen relationships. Expert guidance for Delaware County families.",
    date: "October 25, 2025",
    readTime: "9 min read",
    image: "/images/family-therapy-havertown-guide.webp",
    altText: "Family therapy session in Darby, PA"
  }, {
    id: "adhd-treatment-darby-pa-comprehensive-guide",
    title: "ADHD Treatment in Darby, PA: A Comprehensive Guide for Families",
    excerpt: "Complete guide to ADHD treatment in Darby, PA. Explore therapy options, medication management, and local resources for children and adults with ADHD.",
    date: "October 24, 2025",
    readTime: "13 min read",
    image: "/images/adhd-treatment-havertown.webp",
    altText: "Child focused in ADHD therapy in Darby, PA"
  }];

  return (
    <>
      <SEOHead 
        title="Mental Health Resources & Blog | Sunrise Human Care Services Darby" 
        description="Expert mental health insights for Darby residents. Read our professional articles on anxiety management, depression treatment, family support strategies, and seasonal affective disorder. Evidence-based guidance from licensed therapists." 
        canonicalUrl="https://sunrisehumancare.com/blog"
        keywords="mental health blog Darby, anxiety tips Pennsylvania, depression resources Delaware County, SAD treatment, family mental health support, therapist advice, psychology articles"
        article={true}
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-28 pb-16 bg-[#faf8f4]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Blog</span>
                <h1 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
                  Mental Health
                  <span className="block font-instrument-serif italic text-amber-700/70 font-normal">Resources</span>
                </h1>
                <p className="text-lg text-stone-600 font-barlow max-w-3xl mx-auto leading-relaxed text-center">
                  Mental health insights and resources for Darby residents from the experts at Sunrise Human Care Services.
                </p>
              </div>
              
              <div className="grid gap-6 mt-12">
                {blogPosts.map(post => (
                  <div key={post.id} className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                    <div className="p-6">
                      <div className="pb-2">
                        <h2 className="text-xl md:text-2xl font-barlow font-semibold text-stone-800">
                          <Link href={`/blog/${post.id}`} className="hover:text-amber-700 transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <div className="flex items-center gap-4 mt-3 text-sm text-stone-400 font-barlow">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4 text-amber-600" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock3 className="h-4 w-4 text-amber-600" /> {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="py-4">
                        <p className="text-stone-600 font-barlow leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="pt-2">
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center text-amber-600 font-barlow font-semibold hover:text-amber-700 transition-colors group">
                          Read More 
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
