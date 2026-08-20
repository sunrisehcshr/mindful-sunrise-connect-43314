import { Metadata } from "next";

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
  image?: string;
  noIndex?: boolean;
}

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords,
  image,
  noIndex = false,
}: PageMetadataProps): Metadata => {
  const baseUrl = "https://sunrisehumancare.com";
  const url = `${baseUrl}${path}`;
  const defaultKeywords = "mental health Darby, therapy Darby PA, counseling Delaware County, psychiatry Darby, anxiety treatment Darby, depression therapy Darby, ADHD treatment Darby, trauma therapy PA, Medicaid only, no waitlist";
  
  const formattedKeywords = Array.isArray(keywords) 
    ? keywords.join(", ") 
    : keywords || defaultKeywords;

  return {
    title: { absolute: title },
    description,
    keywords: formattedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: { absolute: title },
      description,
      url,
      siteName: "Sunrise Human Care Services",
      locale: "en_US",
      type: "website",
      images: image ? [{ url: image }] : [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: title },
      description,
      images: image ? [image] : ["/og-image.png"],
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  };
};
