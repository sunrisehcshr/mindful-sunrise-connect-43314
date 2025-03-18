
/**
 * Helper utility to ensure consistent linking throughout the site
 */

// Map of service/condition links - central source of truth for all internal links
export const pageRoutes = {
  // Main pages
  home: "/",
  about: "/about",
  services: "/services",
  blog: "/blog",
  contact: "/contact",
  appointment: "/appointment",
  faq: "/faq",
  
  // Service pages
  depressionTherapy: "/services/depression-therapy",
  anxietyTherapy: "/services/anxiety-therapy",
  adhd: "/services/adhd-treatment",
  bipolar: "/services/bipolar-disorder-therapy",
  childTherapy: "/services/child-therapy",
  couplesCounseling: "/services/couples-counseling",
  familyTherapy: "/services/family-therapy",
  individualTherapy: "/services/individual-therapy",
  medicationManagement: "/services/medication-management",
  ocd: "/services/ocd-therapy",
  psychiatricEvaluations: "/services/psychiatric-evaluations",
  traumaPTSD: "/services/trauma-ptsd-therapy",
  
  // Condition pages
  bpd: "/conditions/bpd-therapy",
  dissociativeDisorders: "/conditions/dissociative-disorders-therapy",
  eatingDisorders: "/conditions/eating-disorders-therapy",
  grief: "/conditions/grief-therapy",
  relationship: "/conditions/relationship-therapy",
  schizophrenia: "/conditions/schizophrenia-therapy",
  sleepDisorders: "/conditions/sleep-disorders-therapy",
  somaticDisorders: "/conditions/somatic-disorders-therapy",
  substanceUse: "/conditions/substance-use-therapy",
};

/**
 * Creates a scroll-to-section link
 * @param route Basic route path
 * @param section Optional section anchor
 * @returns Full link path
 */
export const createSectionLink = (route: string, section?: string): string => {
  if (!section) return route;
  return `${route}#${section}`;
};

/**
 * Ensures all links to service pages include the hero section anchor
 * @param route The page route
 * @returns Link with hero section anchor
 */
export const linkToPageHero = (route: string): string => {
  return createSectionLink(route, "hero");
};
