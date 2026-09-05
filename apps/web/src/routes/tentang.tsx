import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site";

export const Route = createFileRoute("/tentang")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "Tentang — PT. Dwita Mekatama" }, { name: "description", content: "Kenali perjalanan, kapabilitas, dan cara kerja PT. Dwita Mekatama sejak 2010." }] }),
});
