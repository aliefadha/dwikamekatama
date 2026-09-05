import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site";

export const Route = createFileRoute("/kontak")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Kontak — PT. Dwita Mekatama" }, { name: "description", content: "Mulai konsultasi proyek fabrikasi stainless steel melalui WhatsApp atau email." }] }),
});
