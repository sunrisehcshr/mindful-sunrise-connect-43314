import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Darby, PA | Sunrise",
  description: "Our terms of service outline the rules, guidelines, and agreements for using Sunrise Human Care Services' website and services in Darby, PA.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
