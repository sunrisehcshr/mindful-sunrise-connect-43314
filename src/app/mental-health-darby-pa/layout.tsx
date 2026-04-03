import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Services & Therapy in Darby, PA | Sunrise",
  description: "Comprehensive mental health services in Darby, PA. Expert therapy and psychiatry with no waitlist. Medicaid accepted. Call (814) 620-2162 to book today.",
  alternates: {
    canonical: "/mental-health-darby-pa",
  },
};

export default function MentalHealthDarbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
