export const contact = {
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812 3456 7890",
  email: "halo@dwitamekatama.example",
  whatsappMessage:
    "Halo PT. Dwita Mekatama, saya ingin berkonsultasi tentang kebutuhan proyek.",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/tentang" },
  { label: "Produk", to: "/produk" },
  { label: "Pelanggan", to: "/pelanggan" },
  { label: "Kontak", to: "/kontak" },
] as const;

export const productGroups = [
  {
    title: "Fabrikasi Stainless Steel",
    description:
      "Produk dan komponen stainless steel yang dibuat atau disesuaikan untuk kebutuhan ruang, proses, dan operasional Anda.",
    items: ["Tank & vessel", "Meja kerja dan komponen higienis", "Konstruksi stainless steel"],
  },
  {
    title: "Industrial Equipment",
    description:
      "Peralatan kerja dan perpindahan material yang dikembangkan dari kondisi serta alur kerja di lapangan.",
    items: ["Chain Conveyor", "Modification Tank", "Roller Conveyor"],
  },
  {
    title: "Spare Parts",
    description:
      "Komponen pendukung dan suku cadang untuk membantu menjaga mesin tetap berjalan sesuai kebutuhan operasional.",
    items: ["Shoe Barrier Step Bench", "Komponen mesin", "Part sesuai kebutuhan"],
  },
] as const;

export const productExamples = [
  { name: "Chain Conveyor", category: "Industrial Equipment", tone: "mesh" },
  { name: "Modification Tank", category: "Industrial Equipment", tone: "steel" },
  { name: "Roller Conveyor", category: "Industrial Equipment", tone: "blueprint" },
  { name: "Shoe Barrier Step Bench", category: "Spare Parts", tone: "amber" },
] as const;

export const customerMarks = ["Logo 01", "Logo 02", "Logo 03", "Logo 04", "Logo 05", "Logo 06", "Logo 07", "Logo 08"];
