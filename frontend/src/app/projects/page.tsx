import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsApproach from "@/components/projects/ProjectsApproach";
import ProjectsSouthFlorida from "@/components/projects/ProjectsSouthFlorida";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import BackToTop from "@/components/BackToTop";

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