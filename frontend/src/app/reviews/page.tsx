import BackToTop from "@/components/BackToTop";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsExperienceSection from "@/components/reviews/ReviewsExperienceSection";
import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import ReviewsProcessSection from "@/components/reviews/ReviewsProcessSection";
import ReviewsProjectsCTA from "@/components/reviews/ReviewsProjectsCTA";
import ReviewsServicesSlider from "@/components/reviews/ReviewsServicesSlider";
import ReviewsFinalCTA from "@/components/reviews/ReviewsFinalCTA";

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