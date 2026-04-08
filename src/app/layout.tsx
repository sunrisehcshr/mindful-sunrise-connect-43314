import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans, Barlow, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrisehumancare.com"),
  title: {
    default: "Sunrise Human Care Services | Mental Health Clinic in Darby, PA",
    template: "%s | Sunrise Human Care Services"
  },
  description: "Comprehensive mental health care in Darby, PA. Medicaid only, no waitlist. Licensed therapists & psychiatrists for anxiety, depression, ADHD & trauma. Call (814) 620-2162.",
  keywords: "mental health Darby, therapy Darby PA, counseling Delaware County, psychiatry Darby, anxiety treatment Darby, depression therapy Darby, ADHD treatment Darby, trauma therapy PA, PTSD counseling Darby, OCD treatment Darby, bipolar disorder Darby, medication management Darby, psychologist Darby, therapist near me, Darby mental health clinic",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Sunrise Human Care Services" }],
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Darby",
    "geo.position": "39.9184;-75.2590",
    "ICBM": "39.9184, -75.2590",
    "google": "notranslate",
    "language": "English",
    "content-language": "en-US",
  },
  icons: {
    icon: [
      { url: "/sun-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/sun-favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://sunrisehumancare.com",
    title: "Sunrise Human Care Services | Mental Health Clinic in Darby, PA",
    description: "Experience comprehensive mental health care in Darby, PA at Sunrise Human Care Services. Our dedicated team provides counseling, therapy, psychiatry, and medication management for anxiety, depression, ADHD, trauma, and more.",
    images: [
      {
        url: "https://sunrisehumancare.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    siteName: "Sunrise Human Care Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Human Care Services | Mental Health Clinic in Darby, PA",
    description: "Experience comprehensive mental health care in Darby, PA at Sunrise Human Care Services.",
    images: ["https://sunrisehumancare.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className={`${inter.variable} ${openSans.variable} ${barlow.variable} ${instrumentSerif.variable} font-barlow antialiased`}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
          <ScrollIndicator />
          <ChatWidget />
        </TooltipProvider>
      </body>
    </html>
  );
}
