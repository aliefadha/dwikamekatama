import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage } from "@/components/site";

export const Route = createFileRoute("/produk")({
  component: ProductsPage,
  head: () => ({ meta: [{ title: "Produk — PT. Dwita Mekatama" }, { name: "description", content: "Produk fabrikasi stainless steel, industrial equipment, dan spare parts." }] }),
});
