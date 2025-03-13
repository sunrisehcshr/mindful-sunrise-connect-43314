
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
  const blogPosts = [
    {
      id: "anxiety-signs-havertown",
      title: "5 Signs of Anxiety That Havertown Residents Shouldn't Ignore",
      excerpt: "Learn about common anxiety symptoms that people in Havertown might experience, especially considering local factors like commuting to Philadelphia or balancing suburban family life.",
      date: "June 20, 2024",
      readTime: "7 min read",
      image: "/images/anxiety-havertown.webp",
      altText: "Person experiencing anxiety in Havertown, PA",
    },
    {
      id: "supporting-depression-havertown",
      title: "How Havertown Families Can Support a Loved One with Depression",
      excerpt: "Practical guidance for local families supporting someone with depression, including local community resources and support groups in Delaware County.",
      date: "June 18, 2024",
      readTime: "8 min read",
      image: "/images/family-counseling-havertown.webp",
      altText: "Family counseling session in Havertown, PA",
    },
    {
      id: "seasonal-affective-disorder-havertown",
      title: "Seasonal Affective Disorder in Havertown: Coping with Pennsylvania's Winter Blues",
      excerpt: "How Pennsylvania's winter weather patterns affect mental health in Havertown specifically, with practical coping strategies for seasonal depression.",
      date: "June 15, 2024",
      readTime: "6 min read",
      image: "/images/winter-blues-havertown.webp",
      altText: "Winter scene in Havertown, Pennsylvania representing seasonal affective disorder",
    },
  ];

  return (
    <>
      <SEOHead 
        title="Mental Health Blog | Sunrise Human Care Services in Havertown, PA" 
        description="Expert mental health insights for Havertown residents from Sunrise Human Care Services. Read our blog for tips on anxiety, depression, and more."
        canonicalUrl="https://sunrisehcsllc.com/blog"
      />
      <SchemaMarkup />
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mental Health Blog</h1>
          <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mental health insights and resources for Havertown residents from the experts at Sunrise Human Care Services.
          </p>
          
          <div className="grid gap-16 mt-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg border-border/40 bg-white/80 backdrop-blur-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.altText} 
                      className="w-full h-full object-cover aspect-video md:aspect-square rounded-l-lg"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col p-6">
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
                    <CardContent className="pt-4 pb-6 px-0 flex-grow">
                      <p className="text-muted-foreground text-base leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-0 px-0 mt-auto">
                      <Button asChild className="btn-sunrise">
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 text-center p-8 rounded-lg bg-secondary/70 backdrop-blur-sm border border-border/30">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Professional Mental Health Support in Havertown?</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed">Our team of licensed therapists and psychiatrists is ready to help you navigate your mental health journey.</p>
            <Button asChild size="lg" className="btn-sunrise">
              <Link to="/appointment">Book Your Appointment Today</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
