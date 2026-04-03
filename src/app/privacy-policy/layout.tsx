import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Darby, PA | Sunrise",
  description: "Our privacy policy details how we collect, use, and protect your personal information at Sunrise Human Care Services in Darby, PA.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
