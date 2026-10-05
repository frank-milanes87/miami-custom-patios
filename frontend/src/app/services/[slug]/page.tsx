import { notFound } from "next/navigation";
import { servicePages } from "@/data/servicePages";
import ServicePageClient from "@/components/services/inner/ServicePageClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}