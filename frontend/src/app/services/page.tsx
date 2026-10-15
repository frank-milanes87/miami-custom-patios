import type { Metadata } from "next";
import Services from "@/components/services/Services";
export const metadata: Metadata = {
  title: "Outdoor Living Services in Miami | Miami Custom Patios",
  description:
    "Pergolas, louvered roofs, outdoor kitchens, pavers, fencing, epoxy, impact windows, shutters and more across Miami-Dade and Broward.",
};
export default function ServicesPage() {
  return <Services />;
}