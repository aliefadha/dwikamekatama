import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  head: () => ({ meta: [{ title: "Beranda — PT. Dwita Mekatama" }, { name: "description", content: "Fabrikasi stainless steel dan general fabrication untuk kebutuhan proyek Anda." }] }),
});

function HomeComponent() {
  return <HomePage />;
}
