import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  Baby,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Flame,
  HeartPulse,
  Info,
  Lock,
  PhoneCall,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Video,
  Volume2,
  WifiOff,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { KANGURU_SIAGA_META } from "../data/kanguruSiagaLegal";

const CLINICAL_STATS = [
  {
    value: "≥ 8 Jam",
    label: "Target PMK Harian",
    sub: "Standar IDAI & WHO untuk kestabilan suhu & napas",
    badge: "Kangaroo Mother Care",
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-300",
  },
  {
    value: "Fenton 2025",
    label: "Kurva Pertumbuhan Resmi",
    sub: "Koreksi PMA 22–50 minggu terintegrasi fentongrowth.ca",
    badge: "Gold Standard",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
  },
  {
    value: "12 Jadwal",
    label: "Alarm Nutrisi Harian",
    sub: "Interval 2 jam untuk ASI & bayi selang OGT/NGT",
    badge: "Cegah Hipoglikemia",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    value: "100% Offline",
    label: "Privasi Data Terenkripsi",
    sub: "SQLite Room v13 lokal, bebas iklan & pelacak komersial",
    badge: "UU PDP No. 27/2022",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
  },
];

const FOUR_PILLARS = [
  {
    number: "01",
    title: "Perawatan Metode Kanguru (PMK) Terpadu",
    tagline: "Dekapan hangat dada-ke-dada kontinu untuk cegah hipotermia dan stabilkan denyut jantung si kecil.",
    accent: "from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    icon: HeartPulse,
    points: [
      "Timer Kontak Kulit Real-Time: Stopwatch presisi detik-demi-detik dengan pencatatan suhu tubuh aksila sebelum & sesudah sesi.",
      "Kolaborasi Estafet 3 Pengasuh: Fitur serah terima pengasuh (Ibu, Ayah, Pendamping) tanpa memutus sesi timer yang berjalan.",
      "Visualisasi 24 Jam & Target 8 Jam: Lacak capaian dekapan harian dengan progress bar multi-segmen dan tren kepatuhan 7 hari.",
      "3 Jadwal Pengingat Estafet Harian: Jadwal Pagi (07:00), Siang (15:00), dan Malam (23:00) dengan nada notifikasi khusus satu kali putar.",
    ],
    image: "/images/kanguru-siaga/screen-pmk-timer.png",
    imageAlt: "Tampilan Timer Perawatan Metode Kanguru di Kanguru Siaga",
  },
  {
    number: "02",
    title: "Kurva Pertumbuhan Fenton 2025 & Usia Koreksi",
    tagline: "Plotting pertumbuhan saintifik terstandar internasional berbasis Usia Pascamenstruasi (PMA 22–50 minggu).",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/30",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: Scale,
    points: [
      "Kalkulasi Usia Kronologis vs Koreksi: Penilaian tumbuh kembang bayi prematur yang adil dan objektif sesuai usia biologis sebenarnya.",
      "3 Parameter Antropometri Lengkap: Plotting Berat Badan (gram), Panjang Badan (cm), dan Lingkar Kepala (cm).",
      "Persentil Standar Internasional: Garis rujukan P97, P90, P50 (Median), P10, dan P3 dengan sinkronisasi resmi FentonGrowth.ca API.",
      "Pengingat Evaluasi Mingguan: Jadwal pengingat otomatis tiap 7 hari agar orang tua disiplin mencatat pertumbuhan ke faskes.",
    ],
    image: "/images/kanguru-siaga/screen-fenton-chart.png",
    imageAlt: "Tampilan Grafik Pertumbuhan Kurva Fenton 2025 di Kanguru Siaga",
  },
  {
    number: "03",
    title: "Nutrisi Enteral & Alarm ASI / OGT / NGT",
    tagline: "Pengingat nutrisi terstruktur berinterval 2 jam demi mencegah komplikasi hipoglikemia pada bayi kecil.",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    icon: Bell,
    points: [
      "12 Jadwal Harian Terstruktur: Mengakomodasi kebutuhan nutrisi bayi BBLR yang memiliki kapasitas lambung kecil dan rentan drop gula darah.",
      "Nada Notifikasi Khusus (Single-Play): Suara pengingat khas satu kali putar (non-looping) yang terdengar jelas tanpa mengagetkan bayi.",
      "Kontrol Cepat di Notifikasi: Aksi interaktif langsung untuk 'Matikan' atau 'Tunda 10 Menit' (Snooze) tanpa harus membuka aplikasi.",
      "Sequential Single Next-Alarm: Arsitektur penjadwalan cerdas hemat baterai dengan perlindungan henti otomatis.",
    ],
    image: "/images/kanguru-siaga/screen-pmk-reminder.png",
    imageAlt: "Tampilan Jadwal dan Pengingat Estafet di Kanguru Siaga",
  },
  {
    number: "04",
    title: "Deteksi Dini & Triase 7 Tanda Kegawatan",
    tagline: "Kesiapsiagaan mengenali bahaya klinis BBLR sebelum terlambat, dilengkapi tombol darurat faskes 119.",
    accent: "from-red-500/20 via-rose-500/10 to-transparent border-red-500/30",
    badge: "bg-red-500/15 text-red-300 border-red-500/30",
    icon: ShieldAlert,
    points: [
      "7 Modul Tanda Bahaya Kritis: Gangguan napas (apnea / napas cepat), bibir membiru (sianosis), lemas/letargis, kejang, hingga demam/hipotermia.",
      "Video Pembelajaran Triase Klinis: Tutorial visual terverifikasi dokter spesialis anak mengenai pertolongan pertama di rumah.",
      "Panggilan Darurat Satu Ketukan: Akses langsung ke nomor darurat 119 atau sambungan kontak nakes/bidan pendamping terdaftar.",
      "Katalog Skrining Prematur: Pengingat USG Kepala, Skrining Mata ROP, Tes Pendengaran OAE/BERA, dan Skrining Tiroid.",
    ],
    image: "/images/kanguru-siaga/screen-emergency.png",
    imageAlt: "Tampilan Modul Tanda Kegawatan Bayi BBLR di Kanguru Siaga",
  },
];

const EDUCATIONAL_MODULES = [
  {
    icon: Video,
    title: "Tutorial Video Dekapan Kanguru",
    desc: "Panduan posisi katak (frog position), penggunaan kain gendong jarik/khusus, dan keamanan jalan napas bayi.",
    duration: "3 Modul Video",
  },
  {
    icon: BookOpen,
    title: "9 Modul Panduan Tertulis BBLR",
    desc: "Edukasi dasar medis, perawatan termal, higiene tali pusat, pencegahan infeksi, serta asupan ASI eksklusif.",
    duration: "Standar IDAI & Kemenkes",
  },
  {
    icon: Activity,
    title: "Video Pengukuran Antropometri",
    desc: "Teknik pengukuran berat badan, panjang badan telentang, dan lingkar kepala fronto-oksipital yang presisi.",
    duration: "Khusus Nakes & Keluarga",
  },
  {
    icon: Sparkles,
    title: "Video Cara Memandikan Bayi Kecil",
    desc: "Langkah memandikan cepat dan aman tanpa risiko kedinginan atau penurunan suhu tubuh drastis (hipotermia).",
    duration: "Praktis & Higienis",
  },
];

const FAQS = [
  {
    q: "Apakah aplikasi Kanguru Siaga gratis dan apakah memuat iklan?",
    a: "Kanguru Siaga 100% gratis untuk diunduh dan digunakan oleh seluruh keluarga maupun tenaga medis di Indonesia. Aplikasi ini TIDAK MENAMPILKAN IKLAN komersial apa pun, tidak menggunakan SDK Firebase Analytics, serta tidak mengumpulkan Advertising ID (AD_ID) guna menjaga ketenangan dan privasi ruang perawatan bayi.",
  },
  {
    q: "Mengapa Perawatan Metode Kanguru (PMK) memerlukan target minimal 8 jam per hari?",
    a: "Berdasarkan pedoman klinis WHO dan Ikatan Dokter Anak Indonesia (IDAI), kontak kulit-ke-kulit (skin-to-skin) minimal 8 jam hingga 24 jam kontinu memberikan efek inkubator alami. Suhu tubuh ibu/ayah secara dinamis menghangatkan bayi (thermal synchronization), menstabilkan saturasi oksigen, mengurangi episode henti napas (apnea), dan mempercepat kenaikan berat badan bayi prematur.",
  },
  {
    q: "Apa perbedaan Usia Kronologis dan Usia Koreksi pada Kurva Pertumbuhan Fenton?",
    a: "Usia Kronologis dihitung dari tanggal bayi lahir ke dunia, sedangkan Usia Koreksi adalah usia perkembangan biologis yang disesuaikan dengan perkiraan lahir normal (40 minggu kehamilan). Karena organ bayi prematur lahir lebih dini, evaluasi kurva Fenton 2025 menggunakan Usia Koreksi agar grafik pertumbuhan dinilai secara adil dan objektif.",
  },
  {
    q: "Bagaimana jika ponsel mati atau tertidur sehingga jadwal alarm terlewat?",
    a: "Kanguru Siaga dilengkapi Sistem Pemulihan Pengingat Terlewat (Catch-Up Mechanism) cerdas. Begitu ponsel menyala ulang (reboot) atau sistem aktif kembali, aplikasi otomatis mendeteksi jadwal terlewat: jika pengingat mendesak (PMK & ASI) terlewat ≤ 30 menit akan dimunculkan notifikasi informatif tanpa nada keras mengagetkan, dan jadwal otomatis dimajukan ke slot aktif berikutnya.",
  },
  {
    q: "Di mana data kesehatan dan foto bayi saya disimpan?",
    a: "Privasi Anda adalah prioritas utama. Seluruh berkas lampiran medis, foto profil bayi, dan riwayat operasional tersimpan privat di memori internal perangkat Anda (SQLite Room v13 terisolasi Sandbox). Sinkronisasi medis ke Cloud Firestore terlindungi enkripsi TLS dan aturan CEL terproteksi, bebas dari ID Iklan (AD_ID) dan analitik komersial pihak ketiga.",
  },
  {
    q: "Apakah aplikasi ini dapat menggantikan pemeriksaan dokter spesialis anak?",
    a: "TIDAK. Kanguru Siaga adalah instrumen pendamping edukatif dan alat bantu pemantauan mandiri di rumah (home monitoring). Aplikasi ini tidak memberikan diagnosis medis otomatis. Apabila bayi menunjukkan tanda bahaya (seperti bibir membiru, kejang, napas megap-megap, atau suhu tubuh < 36,0°C), orang tua wajib segera membawa bayi ke Unit Gawat Darurat (UGD) terdekat.",
  },
];

export default function KanguruSiagaLandingPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200">
      {/* Top Navbar */}
      <Navbar isHome={false} titleText="KANGURU SIAGA" />

      <main className="flex-1 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-[1200px] left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-32 sm:pt-36 pb-20 lg:pb-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8"
            >
              <a
                href="/"
                rel="home"
                title="Halaman Utama KuliTech"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>KuliTech</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-300">Produk In-House</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-rose-300 font-medium">Kanguru Siaga</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs sm:text-sm text-rose-300 mb-6 backdrop-blur-md">
                  <HeartPulse className="w-4 h-4 text-rose-400 animate-pulse" />
                  <span className="font-semibold text-white">Kanguru Siaga</span>
                  <span className="text-white/30">•</span>
                  <span>Inovasi Perawatan Bayi BBLR di Rumah</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
                  Dekapan Hangat &amp; Pantauan Tumbuh Kembang{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
                    Si Kecil BBLR di Rumah.
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Aplikasi mobile pendamping digital berbasis bukti klinis (<em className="italic text-slate-200">Evidence-Based Practice</em>) yang dirancang khusus membantu orang tua dan tenaga medis merawat <strong>Bayi Berat Lahir Rendah (BBLR)</strong> dan <strong>bayi prematur</strong> secara aman melalui timer Perawatan Metode Kanguru (PMK), Kurva Pertumbuhan Fenton 2025, alarm nutrisi presisi, dan deteksi dini tanda kegawatan.
                </p>

                {/* Clinical Trust Badges */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs text-slate-300">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>Standar IDAI &amp; Kemenkes RI</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Kurva Fenton 2025 Resmi</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>100% Offline-First &amp; Bebas Iklan</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#download"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 hover:from-rose-300 hover:to-amber-200 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Smartphone className="w-4 h-4 text-slate-950" />
                    <span>Dapatkan Aplikasi Android</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </a>

                  <a
                    href="#four-pillars"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:text-white transition-all hover:border-white/20"
                  >
                    <BookOpen className="w-4 h-4 text-rose-400" />
                    <span>Pelajari 4 Pilar Medis</span>
                  </a>
                </div>

                {/* Legal Quick Links */}
                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Legalitas &amp; Transparansi:</span>
                  <a
                    href={KANGURU_SIAGA_META.privacyPolicyUrl}
                    className="text-amber-400/90 hover:text-amber-300 underline underline-offset-4 transition-colors"
                  >
                    Kebijakan Privasi (v{KANGURU_SIAGA_META.version})
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href={KANGURU_SIAGA_META.termsOfUseUrl}
                    className="text-amber-400/90 hover:text-amber-300 underline underline-offset-4 transition-colors"
                  >
                    Ketentuan Penggunaan
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-[320px] sm:max-w-[340px] w-full">
                  {/* Subtle backglow */}
                  <div className="absolute -inset-3 bg-gradient-to-tr from-rose-500/30 via-pink-500/20 to-amber-500/30 rounded-[44px] blur-2xl opacity-75" />

                  {/* Device Frame */}
                  <div className="relative rounded-[40px] bg-[#0c101c] border-4 border-slate-700/60 p-2 shadow-2xl overflow-hidden">
                    <div className="relative rounded-[32px] overflow-hidden bg-[#FAF7F2] aspect-[9/19]">
                      <img
                        src="/images/kanguru-siaga/screen-dashboard.png"
                        alt="Tampilan Antarmuka Dasbor Aplikasi Kanguru Siaga"
                        width="1080"
                        height="1920"
                        fetchPriority="high"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Overlay Badge: IDAI & WHO */}
                  <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-[#0b0f19]/95 border border-white/10 backdrop-blur-xl shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Dekapan Hangat PMK
                      </div>
                      <div className="text-xs font-bold text-white">
                        Target Minimal ≥ 8 Jam/Hari
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Badge: Fenton 2025 */}
                  <div className="absolute -top-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-[#0b0f19]/95 border border-white/10 backdrop-blur-xl shadow-xl flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Kurva Fenton 2025
                      </div>
                      <div className="text-xs font-semibold text-white">
                        Koreksi PMA 22–50 mg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL STATS BAR */}
        <section className="py-12 border-b border-white/5 bg-[#090d16]/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CLINICAL_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${stat.color}`}>
                      {stat.badge}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 PILARS OF SPECIAL CARE */}
        <section id="four-pillars" className="py-24 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-mono text-rose-300 mb-3">
                <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                <span>INTEGRATED PERINATAL SYSTEM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                4 Pilar Pendampingan Bayi Prematur &amp; BBLR
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Dirancang sistematis untuk menjembatani fase rawat inap rumah sakit (NICU/Perinatologi) ke perawatan mandiri yang aman dan terukur di rumah.
              </p>
            </div>

            {/* Pillar Cards Stack */}
            <div className="space-y-12">
              {FOUR_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={pillar.number}
                    className={`rounded-3xl bg-[#0c101c]/90 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Background glow accent */}
                    <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${pillar.accent} rounded-full blur-3xl pointer-events-none`} />

                    {/* Text Details */}
                    <div className="flex-1 space-y-5 relative z-10">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                          PILAR {pillar.number}
                        </span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${pillar.badge}`}>
                          Fokus Medis
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-rose-300 flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-rose-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            {pillar.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                            {pillar.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        {pillar.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-1" />
                            <span className="leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* App Screenshot Mockup */}
                    <div className="w-full lg:w-80 flex-shrink-0 flex justify-center relative z-10">
                      <div className="w-64 sm:w-72 rounded-[32px] bg-[#090d16] border-2 border-white/15 p-2 shadow-2xl overflow-hidden aspect-[9/19]">
                        <img
                          src={pillar.image}
                          alt={pillar.imageAlt}
                          width="1080"
                          height="1920"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover rounded-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE FEATURE TABS (DEEP DIVE) */}
        <section className="py-24 border-b border-white/5 bg-[#080c16]/90 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>DEEP-DIVE FITUR OPERASIONAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dirancang Menjawab Kebutuhan Nyata Keluarga BBLR
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Pilih modul di bawah ini untuk melihat detail alur kerja dan keunggulan teknisnya di perangkat Anda.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {[
                { label: "Timer & Estafet PMK", icon: Timer },
                { label: "Kurva Pertumbuhan Fenton", icon: Scale },
                { label: "12 Alarm Nutrisi ASI", icon: Bell },
                { label: "Triase Tanda Bahaya", icon: ShieldAlert },
              ].map((tab, idx) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold shadow-lg shadow-rose-500/20"
                        : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            <div className="rounded-3xl bg-[#0c101c] border border-white/10 p-6 sm:p-8 lg:p-12 shadow-2xl">
              {activeTab === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono uppercase text-rose-400 tracking-wider font-semibold">
                      Modul Timer &amp; Estafet PMK
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Pencatatan Presisi Detik &amp; Pemantauan Suhu Aksila
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Merawat bayi BBLR membutuhkan kolaborasi seluruh keluarga agar ibu tidak kelelahan. Kanguru Siaga memfasilitasi pembagian peran antara <strong>Ibu (Aktif)</strong>, <strong>Ayah (Siaga)</strong>, dan <strong>Pendamping (Nenek/Bibi)</strong> dengan fitur serah terima langsung tanpa memutus sesi timer.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Pencatatan Suhu Tubuh</div>
                        <div className="text-xs text-slate-400 mt-1">Input suhu sebelum &amp; sesudah dekapan (rentang aman 36,5°C – 37,5°C).</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Input Sesi Manual</div>
                        <div className="text-xs text-slate-400 mt-1">Lupa menyalakan timer? Anda tetap dapat mencatat sesi yang telah usai secara manual.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Grafik 24 Jam Dinamis</div>
                        <div className="text-xs text-slate-400 mt-1">Visualisasi proporsi pembagian waktu dekapan antar anggota keluarga.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Rekor Konsistensi (Streak)</div>
                        <div className="text-xs text-slate-400 mt-1">Pemberian motivasi harian saat target ≥ 8 jam terpenuhi berturut-turut.</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src="/images/kanguru-siaga/screen-pmk-timer.png"
                      alt="Tampilan Timer PMK"
                      width="1080"
                      height="1920"
                      loading="lazy"
                      decoding="async"
                      className="w-64 sm:w-72 rounded-[28px] border border-white/10 shadow-2xl object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                      Modul Kurva Fenton 2025
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Standar Emas Pemantauan Tumbuh Kembang Bayi Prematur
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Bayi prematur tidak dapat dinilai menggunakan kurva bayi cukup bulan biasa. Kanguru Siaga mengintegrasikan kurva <strong>Fenton Preterm Growth Chart (2013/2025)</strong> resmi yang diakui secara global, disesuaikan dengan jenis kelamin bayi (Laki-laki / Perempuan) dan Usia Pascamenstruasi (PMA).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Kalkulasi Z-Score Presisi</div>
                        <div className="text-xs text-slate-400 mt-1">Dapat dihitung secara offline maupun sinkronisasi resmi fentongrowth.ca.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Kurva Persentil Lengkap</div>
                        <div className="text-xs text-slate-400 mt-1">Pantau tren apakah si kecil berada pada kurva normal (P50) atau butuh evaluasi nakes.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Cubit / Tap-to-Zoom</div>
                        <div className="text-xs text-slate-400 mt-1">Antarmuka grafik interaktif beresolusi tinggi yang mudah diperbesar di ponsel.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Ekspor Gambar Grafik</div>
                        <div className="text-xs text-slate-400 mt-1">Simpan grafik ke galeri perangkat untuk dikonsultasikan saat kontrol ke dokter anak.</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src="/images/kanguru-siaga/screen-fenton-chart.png"
                      alt="Tampilan Kurva Fenton 2025"
                      width="1080"
                      height="1920"
                      loading="lazy"
                      decoding="async"
                      className="w-64 sm:w-72 rounded-[28px] border border-white/10 shadow-2xl object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                      Modul Alarm &amp; Nutrisi Enteral
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      12 Jadwal Minum ASI Interval 2 Jam (OGT / NGT Friendly)
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Bayi kecil rentan mengalami penurunan kadar gula darah (hipoglikemia) yang berbahaya bagi otak apabila jadwal minumnya terlambat. Sistem alarm Kanguru Siaga dirancang andal dan hemat daya dengan arsitektur Sequential Single Next-Alarm dan saluran notifikasi khusus.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Nada Notifikasi Khusus (Single-Play)</div>
                        <div className="text-xs text-slate-400 mt-1">Suara pengingat khas satu kali putar (non-looping) agar lembut dan tidak mengagetkan bayi.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Hemat Baterai &amp; Henti Otomatis</div>
                        <div className="text-xs text-slate-400 mt-1">Hanya mendaftarkan 1 jadwal aktif terdekat dengan pemutaran audio sekali putar agar hemat daya.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Aksi Cepat Snooze / Matikan</div>
                        <div className="text-xs text-slate-400 mt-1">Kontrol langsung dari layar kunci atau notification drawer tanpa buka aplikasi.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Pemulihan Restart (Reboot)</div>
                        <div className="text-xs text-slate-400 mt-1">Jadwal alarm otomatis terjadwal ulang setelah HP dinyalakan ulang.</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src="/images/kanguru-siaga/screen-pmk-reminder.png"
                      alt="Tampilan Alarm Pengingat"
                      width="1080"
                      height="1920"
                      loading="lazy"
                      decoding="async"
                      className="w-64 sm:w-72 rounded-[28px] border border-white/10 shadow-2xl object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono uppercase text-red-400 tracking-wider font-semibold">
                      Modul Triase &amp; Tanda Bahaya
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Kenali Gejala Kritis BBLR Sebelum Terlambat
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Keluarga dibekali panduan triase komprehensif 7 tanda bahaya klinis yang telah diverifikasi oleh dokter spesialis anak. Setiap modul menyajikan ciri-ciri visual, langkah pertolongan pertama di rumah, serta petunjuk rujukan cepat.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Gangguan Pernapasan</div>
                        <div className="text-xs text-slate-400 mt-1">Napas cepat (&gt;60x/menit), tarikan dinding dada ke dalam, atau napas cuping hidung.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Perubahan Warna Kulit</div>
                        <div className="text-xs text-slate-400 mt-1">Deteksi bibir membiru (sianosis sentral), pucat pasi, atau kuning (ikterus) meluas.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Bayi Sulit Dibangunkan</div>
                        <div className="text-xs text-slate-400 mt-1">Tampak sangat lemas (letargis), lunglai, dan tidak merespons stimulasi lembut.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-bold text-white">Tombol Darurat 119</div>
                        <div className="text-xs text-slate-400 mt-1">Akses cepat satu ketukan untuk menghubungi ambulans atau layanan darurat faskes.</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src="/images/kanguru-siaga/screen-emergency.png"
                      alt="Tampilan Triase Kegawatan"
                      width="1080"
                      height="1920"
                      loading="lazy"
                      decoding="async"
                      className="w-64 sm:w-72 rounded-[28px] border border-white/10 shadow-2xl object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* EDUCATIONAL MODULES GRID */}
        <section className="py-24 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-300 mb-3">
                <Video className="w-3.5 h-3.5 text-amber-400" />
                <span>MULTIMEDIA LEARNING CENTER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Pusat Video Tutorial &amp; Literasi Keluarga
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                Materi disusun sistematis untuk dipraktikkan langsung oleh ayah dan bunda di rumah tanpa rasa ragu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EDUCATIONAL_MODULES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#0c101c] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider">
                        {item.duration}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECURITY & PRIVACY COMMITMENT */}
        <section className="py-24 border-b border-white/5 bg-[#090d16] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0c1220] to-[#0e1628] border border-white/10 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>KEAMANAN DATA &amp; PRIVASI SPESIFIK (UU PDP)</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Data Bayi Anda Adalah Amanat yang Kami Lindungi Penuh
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), data kesehatan bayi tergolong sebagai <em>Data Pribadi yang Bersifat Spesifik</em>. Kanguru Siaga dirancang dengan filosofi <strong>Privacy by Design &amp; Offline-First</strong>:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Bebas Pelacakan Komersial:</strong> Tidak memakai Firebase Analytics maupun Google Advertising ID (AD_ID).</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Sandbox Terisolasi:</strong> Foto profil bayi dan lampiran hasil skrining tersimpan 100% lokal di memori ponsel.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Aturan Database Ketat (CEL):</strong> Sinkronisasi Cloud Firestore dilindungi validasi skema dan aturan Common Expression Language (CEL) terproteksi.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Hak Penghapusan Penuh:</strong> Reset data lokal kapan pun dan permohonan hapus cloud via email resmi.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href={KANGURU_SIAGA_META.privacyPolicyUrl}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Kebijakan Privasi Resmi
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        Versi {KANGURU_SIAGA_META.version} • {KANGURU_SIAGA_META.effectiveDate}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </a>

                  <a
                    href={KANGURU_SIAGA_META.termsOfUseUrl}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.07] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Ketentuan Penggunaan
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        Batasan Tanggung Jawab &amp; Lisensi
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <section className="py-12 border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6 sm:p-8 flex items-start gap-4 shadow-lg shadow-amber-950/20">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <h3 className="font-bold text-amber-200 text-sm sm:text-base">
                  Penyangkalan Medis Penting (Medical Disclaimer)
                </h3>
                <p>
                  Aplikasi Kanguru Siaga <strong>bukan merupakan perangkat medis (medical device)</strong> dan bukan pengganti dokter spesialis anak. Seluruh kalkulasi, grafik kurva Fenton, timer PMK, dan materi edukasi disediakan semata-mata sebagai alat bantu informasi umum dan pemantauan mandiri di rumah (<em>home monitoring</em>).
                </p>
                <p>
                  Jika si kecil mengalami kondisi kegawatan seperti henti napas (apnea &gt;20 detik), tubuh membiru, suhu sangat dingin (&lt;36,0°C) atau demam (&gt;37,5°C), kejang, atau lemas lunglai, <strong>SEGERA BAWA KE UNIT GAWAT DARURAT (UGD) FASILITAS KESEHATAN TERDEKAT</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION (NATIVE DETAILS DISCLOSURE) */}
        <section id="faq" className="py-24 border-b border-white/5 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-mono text-rose-300 mb-3">
                <Info className="w-3.5 h-3.5 text-rose-400" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Pahami lebih lanjut mengenai aplikasi, metode klinis, dan keamanan data bayi Anda.
              </p>
            </div>

            {/* Exclusive Accordion Set */}
            <section aria-label="Pertanyaan yang Sering Diajukan" className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  name="kanguru-faq"
                  className="group rounded-2xl bg-[#0c101c] border border-white/10 p-5 sm:p-6 transition-all duration-300 hover:border-white/20 open:bg-[#0f1524] open:border-rose-500/40"
                >
                  <summary className="flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base cursor-pointer list-none select-none">
                    <span className="group-open:text-rose-300 transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-open:rotate-180 group-open:text-rose-300 transition-transform flex-shrink-0">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </section>
          </div>
        </section>

        {/* BOTTOM DOWNLOAD CTA BANNER */}
        <section id="download" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-rose-950/60 via-[#101524] to-amber-950/60 border border-white/15 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  <Baby className="w-4 h-4 text-rose-400" />
                  <span>KULITECH HEALTH TECH INITIATIVE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Mulai Dekapan Hangat Si Kecil Hari Ini Bersama Kanguru Siaga
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  Dukung tumbuh kembang buah hati tercinta dengan pemantauan suhu, timer estafet keluarga, kurva Fenton 2025, dan alarm nutrisi dalam satu genggaman.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 hover:from-rose-300 hover:to-amber-200 shadow-xl shadow-rose-500/25 transition-all hover:-translate-y-0.5"
                  >
                    <Smartphone className="w-5 h-5 text-slate-950" />
                    <span>Unduh di Google Play</span>
                  </a>

                  <a
                    href={`https://wa.me/6287864455828?text=${encodeURIComponent(
                      "Halo KuliTech! Saya ingin bertanya mengenai implementasi klinis dan kerjasama aplikasi Kanguru Siaga."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-white bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-rose-400" />
                    <span>Konsultasi &amp; Kemitraan Nakes</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
                  <div>Pengembang: {KANGURU_SIAGA_META.developer}</div>
                  <div>•</div>
                  <div>Kontak: {KANGURU_SIAGA_META.emails[0]}</div>
                  <div>•</div>
                  <div>Wilayah Hukum: {KANGURU_SIAGA_META.jurisdiction}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
