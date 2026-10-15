
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages } from "@/data/servicePages";
import ServicePageClient from "@/components/services/inner/ServicePageClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const seoMetadata: Record<string, { title: string; description: string }> = {
  "pergolas-screen-enclosures": {
    title: "Pergolas & Screen Enclosures in Miami | Miami Custom Patios",
    description:
      "Custom aluminum pergolas, patio covers and screen enclosures for Miami-Dade and Broward homes. Free virtual estimate.",
  },
  "motorized-louvered-roofs": {
    title: "Motorized Louvered Roofs in Miami | Miami Custom Patios",
    description:
      "Adjustable motorized louvered roofs for shade and rain protection in Miami-Dade and Broward. Free in-person estimate.",
  },
  "outdoor-kitchens": {
    title: "Outdoor Kitchens in Miami | Miami Custom Patios",
    description:
      "Custom outdoor kitchens and BBQ areas for Miami-Dade and Broward homes. Send your layout and measurements for a free virtual estimate.",
  },
  "concrete-pavers": {
    title: "Concrete & Pavers in Miami | Miami Custom Patios",
    description:
      "Concrete slabs, paver patios, walkways and driveways for Miami-Dade and Broward homes. Get a free virtual estimate.",
  },
  "modern-fencing": {
    title: "Aluminum, PVC & Wood Fencing Miami | Miami Custom Patios",
    description:
      "Modern aluminum, PVC and wood fencing for Miami-Dade and Broward properties. Send your linear footage for a free virtual estimate.",
  },
  "epoxy-flooring": {
    title: "Epoxy Flooring in Miami | Miami Custom Patios",
    description:
      "Epoxy floors for garages, patios and more in Miami-Dade and Broward. Free in-person estimate.",
  },
  "impact-windows-doors": {
    title: "Impact Windows & Doors in Miami | Miami Custom Patios",
    description:
      "Hurricane impact windows and doors for Miami-Dade and Broward homes. Free in-person estimate.",
  },
  "accordion-shutters": {
    title: "Accordion Hurricane Shutters Miami | Miami Custom Patios",
    description:
      "Accordion hurricane shutters for Miami-Dade and Broward homes. Send your window and door measurements for a free virtual estimate.",
  },
  "modern-mailboxes": {
    title: "Modern Aluminum Mailboxes Miami | Miami Custom Patios",
    description:
      "Modern aluminum mailboxes for Miami-Dade and Broward homes. Free in-person estimate.",
  },
  "interior-design": {
    title: "Interior Design in Miami | Miami Custom Patios",
    description:
      "Residential interior design in collaboration with Garcells Interiors, connecting your indoor and outdoor spaces. Free in-person estimate.",
  },
  "artificial-turf": {
    title: "Artificial Turf Installation Miami | Miami Custom Patios",
    description:
      "Artificial turf for yards, pool decks and patios in Miami-Dade and Broward. Send your square footage for a free virtual estimate.",
  },
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    return {};
  }

  const seo = seoMetadata[slug];

  if (!seo) {
    return {
      title: "Outdoor Living Services in Miami | Miami Custom Patios",
      description:
        "Explore custom outdoor living services across Miami-Dade and Broward with Miami Custom Patios.",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
