import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Medicaid Therapy & Mental Health Services | Darby, PA | No Waitlist",
  description: "Looking for therapy that accepts Medicaid in Darby, PA? Sunrise Human Care offers expert mental health services with 100% Medicaid acceptance and no waitlist.",
  path: "/medicaid-therapy",
  keywords: ["Medicaid therapy Darby PA", "Medical Assistance counseling PA", "Medicaid psychiatrist Delaware County", "affordable therapy Darby", "no waitlist Medicaid therapy"],
});

export default function MedicaidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
