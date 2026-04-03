import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Darby, PA | Sunrise",
  description: "Find answers to common questions about mental health therapy, psychiatry, and insurance in Darby, PA. Medicaid only, no waitlist. Call (814) 620-2162.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
