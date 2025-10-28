
import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock3 } from "lucide-react";

const Blog = () => {
  const blogPosts = [{
    id: "finding-therapist-havertown-pa-guide",
    title: "Finding the Right Therapist in Havertown, PA: A Complete Guide",
    excerpt: "Discover how to find the perfect therapist in Havertown, PA. Learn about therapy types, insurance options, and what to look for in a mental health professional in Delaware County.",
    date: "October 28, 2025",
    readTime: "12 min read",
    image: "/images/Therapy-in-havertown.webp",
    altText: "Therapy session in Havertown, PA"
  }, {
    id: "anxiety-treatment-delaware-county-pa",
    title: "Anxiety Treatment Options in Delaware County, PA: What You Need to Know",
    excerpt: "Comprehensive guide to anxiety treatment in Delaware County. Learn about therapy approaches, medication options, and local resources available in Havertown and surrounding areas.",
    date: "October 27, 2025",
    readTime: "10 min read",
    image: "/images/Therapy-in-havertown.webp",
    altText: "Anxiety treatment in Delaware County, PA"
  }, {
    id: "depression-therapy-havertown-pa-complete-guide",
    title: "Depression Therapy in Havertown, PA: Your Complete Guide to Recovery",
    excerpt: "Understanding depression treatment options in Havertown, PA. From evidence-based therapies to medication management, find the right path to recovery.",
    date: "October 26, 2025",
    readTime: "11 min read",
    image: "/images/Therapy-in-havertown.webp",
    altText: "Depression therapy in Havertown, PA"
  }, {
    id: "family-therapy-havertown-pa-guide",
    title: "Family Therapy in Havertown, PA: Strengthening Your Family Bonds",
    excerpt: "Learn how family therapy in Havertown can help resolve conflicts, improve communication, and strengthen relationships. Expert guidance for Delaware County families.",
    date: "October 25, 2025",
    readTime: "9 min read",
    image: "/images/family-counseling-havertown.webp",
    altText: "Family therapy session in Havertown, PA"
  }, {
    id: "adhd-treatment-havertown-pa-comprehensive-guide",
    title: "ADHD Treatment in Havertown, PA: A Comprehensive Guide for Families",
    excerpt: "Complete guide to ADHD treatment in Havertown, PA. Explore therapy options, medication management, and local resources for children and adults with ADHD.",
    date: "October 24, 2025",
    readTime: "13 min read",
    image: "/images/Therapy-in-havertown.webp",
    altText: "ADHD treatment in Havertown, PA"
  }];

  return (
    <>
      <SEOHead 
        title="Mental Health Resources & Blog | Sunrise Human Care Services Havertown" 
        description="Expert mental health insights for Havertown residents. Read our professional articles on anxiety management, depression treatment, family support strategies, and seasonal affective disorder. Evidence-based guidance from licensed therapists." 
        canonicalUrl="https://sunrisehumancare.com/blog"
        keywords="mental health blog Havertown, anxiety tips Pennsylvania, depression resources Delaware County, SAD treatment, family mental health support, therapist advice, psychology articles"
        article={true}
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mental Health Resources</h1>
              <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mental health insights and resources for Havertown residents from the experts at Sunrise Human Care Services.
              </p>
              
              <div className="grid gap-10 mt-12">
                {blogPosts.map(post => <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md border-border/40 bg-white">
                    <div className="p-6">
                      <CardHeader className="pb-2 px-0 pt-0">
                        <CardTitle className="text-2xl md:text-3xl">
                          <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-3 text-sm">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4 text-orange-500" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock3 className="h-4 w-4 text-orange-500" /> {post.readTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4 pb-6 px-0">
                        <p className="text-muted-foreground text-base leading-relaxed">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-0 px-0">
                        <Button asChild className="btn-sunrise">
                          <Link to={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>)}
              </div>
              
              <div className="mt-20 text-center p-8 rounded-lg backdrop-blur-sm border border-border/30 bg-white">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Professional Mental Health Support in Havertown?</h2>
                <p className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed">Our team of licensed therapists and psychiatrists is ready to help you navigate your mental health journey.</p>
                <Button asChild size="lg" className="btn-sunrise">
                  <Link to="/appointment">Book Your Appointment Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
