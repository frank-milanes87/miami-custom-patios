import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsApproach from "@/components/projects/ProjectsApproach";
import ProjectsSouthFlorida from "@/components/projects/ProjectsSouthFlorida";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import BackToTop from "@/components/BackToTop";
export const metadata: Metadata = {
  title: "Our Patio & Outdoor Projects | Miami Custom Patios",
  description:
    "See completed pergolas, patio covers, outdoor kitchens, fencing and more from homes across Miami-Dade and Broward.",
};
export default function ProjectsPage() {
  return (
    <main className="bg-[var(--light-bg)]">
      <ProjectsHero />
      <ProjectsGallery />
       <ProjectsApproach />
       <ProjectsSouthFlorida />
         <ProjectsCTA />
         <BackToTop />
    </main>
  );
}