import type { Metadata } from "next";

export const SITE_NAME = "Sunrise Human Care Services";
export const BASE_URL = "https://sunrisehumancare.com";

export function buildTitle(title: string): string {
  const suffix = " | Sunrise Human Care";
  const maxTitle = 60 - suffix.length;
  return title.length > maxTitle
    ? title.slice(0, maxTitle - 1).trimEnd() + "…" + suffix
    : title + suffix;
}

export function clampDescription(desc: string): string {
  return desc.length > 160 ? desc.slice(0, 157).trimEnd() + "…" : desc;
}

export function pageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: buildTitle(title),
    description: clampDescription(description),
    openGraph: {
      title: buildTitle(title),
      description: clampDescription(description),
    },
    twitter: {
      title: buildTitle(title),
      description: clampDescription(description),
    },
  };
}