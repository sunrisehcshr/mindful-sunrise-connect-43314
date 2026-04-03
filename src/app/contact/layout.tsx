import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Mental Health Clinic | Darby, PA | Sunrise",
  description: "Contact Sunrise Human Care Services in Darby, PA. Medicaid only, no waitlist. Get compassionate mental health support today. Phone: (814) 620-2162.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
