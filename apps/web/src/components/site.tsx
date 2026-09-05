import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  Factory,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import { contact, customerMarks, navItems, productExamples, productGroups, whatsappHref } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Dwita Mekatama, kembali ke Beranda">
          <span className="brand-mark">DM</span>
          <span className="brand-name">Dwita Mekatama</span>
        </Link>

        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
        </button>

        <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: "is-active" }} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="header-cta" to="/kontak" onClick={() => setOpen(false)}>
            Konsultasikan Proyek Anda <ArrowUpRight size={16} />
          </Link>
        </nav>
        <span className="header-current" aria-hidden="true">{pathname === "/" ? "01" : ""}</span>
      </div>
    </header>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-copy">{description}</p>
    </section>
  );
}

export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`Placeholder gambar: ${label}`}>
      <div className="placeholder-grid" />
      <span className="placeholder-caption">{label}</span>
      <span className="placeholder-corner">foto proyek</span>
    </div>
  );
}

export function InquiryLink({ className = "" }: { className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={whatsappHref} target="_blank" rel="noreferrer">
      <MessageCircle size={18} />
      Konsultasikan Proyek Anda
      <ArrowUpRight size={17} />
    </a>
  );
}

export function EmailLink({ className = "" }: { className?: string }) {
  return (
    <a className={`button button-secondary ${className}`} href={`mailto:${contact.email}`}>
      Kirim email <ArrowUpRight size={17} />
    </a>
  );
}

export function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">PT. Dwita Mekatama · Bekasi</p>
          <h1>Fabrikasi stainless steel untuk kebutuhan proyek Anda.</h1>
          <p className="hero-lede">Dari kebutuhan, gambar, hingga kondisi lapangan—kami membantu mewujudkan fabrikasi yang siap bekerja.</p>
          <div className="hero-actions">
            <InquiryLink />
            <Link className="text-link" to="/produk">Lihat kemampuan kami <MoveRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="status-dot" /> General fabrication untuk Jabodetabek serta sekitarnya</div>
        </div>
        <div className="hero-visual-wrap">
          <ImagePlaceholder label="Placeholder foto workshop / tangki stainless" className="hero-visual" />
          <div className="hero-visual-meta"><span>01</span><span>Workshop / Bekasi</span></div>
        </div>
      </section>

      <section className="intro-band shell section-rule">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Yang kami kerjakan</p>
          <h2>Solusi fabrikasi yang berangkat dari kebutuhan nyata.</h2>
        </div>
        <div className="intro-statement">
          <p>Stainless steel adalah kekuatan utama kami. Di saat yang sama, kami memahami bahwa proyek sering membutuhkan lebih dari satu produk.</p>
          <Link className="text-link" to="/tentang">Kenali Dwita Mekatama <ChevronRight size={17} /></Link>
        </div>
      </section>

      <section className="capabilities shell section-rule">
        <div className="capability-feature">
          <span className="capability-icon"><Factory size={22} /></span>
          <h3>Fabrikasi untuk proses yang spesifik.</h3>
          <p>Mulai dari requirement, dimensi, gambar kerja, atau kondisi proyek. Kami membantu menerjemahkannya menjadi pekerjaan fabrikasi yang jelas.</p>
          <Link className="text-link" to="/produk">Jelajahi produk <MoveRight size={17} /></Link>
        </div>
        <div className="capability-list">
          <div><span>01</span><h3>Industrial equipment</h3><p>Peralatan yang mengikuti alur kerja operasional.</p></div>
          <div><span>02</span><h3>Spare parts</h3><p>Komponen pendukung untuk kebutuhan mesin.</p></div>
          <div><span>03</span><h3>Engineering & maintenance</h3><p>Dukungan mekanikal, elektrikal, dan perawatan sesuai kebutuhan.</p></div>
        </div>
      </section>

      <section className="products-preview shell section-rule">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">Contoh pekerjaan</p><h2>Beberapa bentuk yang kami kerjakan.</h2></div>
          <Link className="text-link desktop-link" to="/produk">Lihat semua produk <MoveRight size={17} /></Link>
        </div>
        <div className="product-grid">
          {productExamples.map((product, index) => (
            <Link to="/produk" className={`product-card tone-${product.tone}`} key={product.name}>
              <div className="product-card-visual"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={18} /></div>
              <div className="product-card-copy"><p>{product.category}</p><h3>{product.name}</h3></div>
            </Link>
          ))}
        </div>
        <Link className="text-link mobile-link" to="/produk">Lihat semua produk <MoveRight size={17} /></Link>
      </section>

      <section className="proof-band shell section-rule">
        <div><p className="eyebrow">Dipercaya dalam hubungan kerja</p><h2>Pengalaman dibangun dari pekerjaan yang konkret.</h2></div>
        <div className="proof-copy"><p>Kami menjaga komunikasi tetap terbuka, pekerjaan tetap terarah, dan hasil tetap relevan dengan kebutuhan di lapangan.</p><Link className="text-link" to="/pelanggan">Lihat pelanggan <MoveRight size={17} /></Link></div>
      </section>

      <InquiryBanner />
    </main>
  );
}

export function AboutPage() {
  return <main><PageIntro eyebrow="Tentang perusahaan" title="Tim fabrikasi untuk kebutuhan proyek yang tidak selalu sama." description="PT. Dwita Mekatama adalah perusahaan fabrikasi berbasis Bekasi yang mengutamakan kualitas pengerjaan dan respons yang cepat." />
    <section className="about-story shell section-rule"><div className="story-year">2010<span>awal perjalanan</span></div><div className="story-copy"><p>Dwita Mekatama berawal sebagai CV. Dwita Mekatama pada 2010. Seiring berkembangnya kebutuhan pelanggan, badan usaha ini beralih menjadi PT. Dwita Mekatama pada November 2013.</p><p>Kami hadir untuk mendukung kebutuhan proyek—dari fabrikasi stainless steel hingga equipment, spare parts, maintenance, dan engineering sesuai ketersediaan.</p></div><ImagePlaceholder label="Placeholder foto tim / area kerja" className="about-image" /></section>
    <section className="values shell section-rule"><div className="section-heading"><p className="eyebrow">Cara kami bekerja</p><h2>Jelas sejak awal, berguna sampai akhir.</h2></div><div className="value-grid"><Value title="Memahami konteks" text="Kami mulai dengan memahami kebutuhan, ukuran, gambar, dan kondisi kerja yang melatarbelakanginya." icon={<Sparkles size={21} />} /><Value title="Mengerjakan dengan teliti" text="Detail konstruksi, sambungan, dan fungsi menjadi bagian dari percakapan selama pengerjaan." icon={<ShieldCheck size={21} />} /><Value title="Mendukung seperlunya" text="Maintenance, troubleshooting, dan dukungan engineering tersedia sebagai kapabilitas pendukung proyek." icon={<Wrench size={21} />} /></div></section>
    <InquiryBanner />
  </main>;
}

function Value({ title, text, icon }: { title: string; text: string; icon: ReactNode }) { return <article className="value-card"><span className="capability-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>; }

export function ProductsPage() {
  return <main><PageIntro eyebrow="Produk & kapabilitas" title="Contoh produk, ruang untuk kebutuhan yang lebih spesifik." description="Kami menyajikan beberapa contoh pekerjaan sebagai titik awal. Kebutuhan custom fabrication tetap dapat dibicarakan." />
    <section className="product-groups shell section-rule">{productGroups.map((group, index) => <article className="product-group" key={group.title}><span className="group-index">0{index + 1}</span><div><h2>{group.title}</h2><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div></article>)}</section>
    <section className="examples shell section-rule"><div className="section-heading"><p className="eyebrow">Product examples</p><h2>Yang terlihat di sini bukan katalog lengkap.</h2></div><div className="product-grid">{productExamples.map((product, index) => <Link to="/kontak" className={`product-card tone-${product.tone}`} key={product.name}><div className="product-card-visual"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={18} /></div><div className="product-card-copy"><p>{product.category}</p><h3>{product.name}</h3></div></Link>)}</div></section>
    <section className="catalog-callout shell section-rule"><div><p className="eyebrow">Referensi produk</p><h2>Butuh melihat informasi di luar halaman ini?</h2></div><a className="button button-secondary" href="#catalog"><Download size={18} /> Unduh katalog aktif <ArrowUpRight size={17} /></a><p id="catalog" className="catalog-note">Placeholder katalog — tautan dokumen aktif perlu diganti sebelum peluncuran.</p></section>
    <InquiryBanner />
  </main>;
}

export function CustomersPage() {
  return <main><PageIntro eyebrow="Pelanggan" title="Hubungan kerja yang terus dibangun." description="Logo berikut ditampilkan sebagai materi customer proof yang disetujui. Tidak ada testimonial atau studi kasus yang ditambahkan di v1." />
    <section className="customer-wall shell section-rule"><div className="customer-wall-intro"><p>Beberapa organisasi yang pernah bekerja bersama Dwita Mekatama.</p><span>Logo wall / v1</span></div><div className="logo-grid">{customerMarks.map((mark) => <div className="logo-tile" key={mark} aria-label={`Logo pelanggan ${mark}`}><span>{mark}</span></div>)}</div></section>
    <section className="customer-note shell section-rule"><ShieldCheck size={24} /><p>Nama dan logo pada halaman ini perlu dikonfirmasi kembali oleh perwakilan perusahaan sebelum produksi.</p></section>
    <InquiryBanner />
  </main>;
}

export function ContactPage() {
  return <main><PageIntro eyebrow="Mulai percakapan" title="Ceritakan kebutuhan proyek Anda." description="Kirim requirement, dimensi, gambar, material yang dibutuhkan, atau konteks pekerjaan. Kami akan membantu melihat langkah berikutnya." />
    <section className="contact-grid shell section-rule"><div className="contact-primary"><p className="eyebrow">Kontak utama</p><h2>Satu percakapan untuk menemukan arah yang tepat.</h2><InquiryLink /><p className="contact-placeholder">Placeholder pengembangan · ganti nomor ini sebelum produksi.</p></div><div className="contact-details"><a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-detail"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>WhatsApp</small><strong>{contact.whatsappDisplay}</strong><em>Buka chat proyek <ArrowUpRight size={15} /></em></span></a><a href={`mailto:${contact.email}`} className="contact-detail"><span className="contact-icon"><Mail size={20} /></span><span><small>Email</small><strong>{contact.email}</strong><em>Tulis email <ArrowUpRight size={15} /></em></span></a><div className="contact-detail"><span className="contact-icon"><MapPin size={20} /></span><span><small>Basis layanan</small><strong>Bekasi</strong><em>Jabodetabek serta sekitarnya</em></span></div></div></section>
    <section className="inquiry-guide shell section-rule"><div className="section-heading"><p className="eyebrow">Sebelum menghubungi</p><h2>Informasi yang membantu kami memahami proyek.</h2></div><div className="guide-list"><div><span>01</span><p>Dimensi atau ukuran area kerja</p></div><div><span>02</span><p>Gambar, sketsa, atau foto kondisi lapangan</p></div><div><span>03</span><p>Material dan fungsi yang dibutuhkan</p></div><div><span>04</span><p>Target penggunaan atau konteks proyek</p></div></div></section>
    <section className="contact-footer shell"><Factory size={20} /><p>Fabrikasi stainless steel · industrial equipment · spare parts · engineering support</p><EmailLink /></section>
  </main>;
}

export function InquiryBanner() {
  return <section className="inquiry-banner shell"><div><p className="eyebrow">Punya kebutuhan yang ingin dibahas?</p><h2>Mari mulai dari kondisi proyek Anda.</h2></div><InquiryLink /></section>;
}
