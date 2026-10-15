import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsExperienceSection from "@/components/reviews/ReviewsExperienceSection";
import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import ReviewsProcessSection from "@/components/reviews/ReviewsProcessSection";
import ReviewsProjectsCTA from "@/components/reviews/ReviewsProjectsCTA";
import ReviewsServicesSlider from "@/components/reviews/ReviewsServicesSlider";
import ReviewsFinalCTA from "@/components/reviews/ReviewsFinalCTA";

export const metadata: Metadata = {
  title: "Customer Reviews | Miami Custom Patios",
  description:
    "Read what Miami-area homeowners say about their pergola, patio and outdoor living projects with Miami Custom Patios.",
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsHero />
      <ReviewsExperienceSection />
      <FeaturedReviews />
      <ReviewsProcessSection />
      <ReviewsProjectsCTA />
      <ReviewsServicesSlider />
      <ReviewsFinalCTA />
      <BackToTop />
    </main>
  );
}