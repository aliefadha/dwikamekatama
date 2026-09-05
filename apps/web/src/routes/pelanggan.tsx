import { createFileRoute } from "@tanstack/react-router";

import { CustomersPage } from "@/components/site";

export const Route = createFileRoute("/pelanggan")({
  component: CustomersPage,
  head: () => ({ meta: [{ title: "Pelanggan — PT. Dwita Mekatama" }, { name: "description", content: "Customer proof dan hubungan kerja PT. Dwita Mekatama." }] }),
});
