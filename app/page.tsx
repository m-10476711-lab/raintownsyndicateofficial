
"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Menu,
  X,
  Megaphone,
  Trophy,
  Gift,
  Coins,
  Users,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Instagram,
} from "lucide-react";
import { useState } from "react";

const activities = [
  {
    icon: Megaphone,
    title: "Pengumuman",
    description: "Ikuti perkembangan dan berita terkini komuniti kami.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Trophy,
    title: "Pertandingan",
    description: "Tunjukkan kreativiti dan sertai pertandingan komuniti.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Coins,
    title: "RS Coin",
    description: "Kumpul mata melalui aktiviti dan penyertaan.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Gift,
    title: "Ganjaran",
    description: "Tebus hadiah eksklusif menggunakan RS Coin.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080812] text-white">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080812]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <a href="#" className="text-xl font-black tracking-wider">
            <span className="text-purple-500">RAIN</span>
            <span className="text-red-500">TOWN</span>
            <span className="ml-1 text-xs text-blue-400">RS</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#" className="hover:text-purple-400">Utama</a>
            <a href="#tentang" className="hover:text-purple-400">Tentang</a>
            <a href="#aktiviti" className="hover:text-purple-400">Aktiviti</a>
            <a href="#pengumuman" className="hover:text-purple-400">Pengumuman</a>
            <a href="#ganjaran" className="hover:text-purple-400">Ganjaran</a>
          </div>

          <div className="hidden md:block">
            <a href="/login"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-red-600 px-5 py-3 text-sm font-bold">
              LOG MASUK
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Buka menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#11111e] p-5 md:hidden">
            {[
              ["Utama", "#"],
              ["Tentang", "#tentang"],
              ["Aktiviti", "#aktiviti"],
              ["Pengumuman", "#pengumuman"],
              ["Ganjaran", "#ganjaran"],
              ["Log Masuk", "/login"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-4 text-sm text-gray-300"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center justify-center px-5 py-24 text-center">

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-bold tracking-widest text-purple-300">
            <Bike size={17} />
            KOMUNITI PERMOTORAN
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-8xl">
            RAINTOWN
            <span className="neon-text block">
              SYNDICATE
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-400 md:text-lg">
            Bukan sekadar komuniti motosikal.
            Kami berkongsi minat, persahabatan,
            kreativiti dan pengalaman bersama.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-red-600 to-blue-600 px-8 py-4 font-bold shadow-lg shadow-purple-900/30 transition hover:-translate-y-1"
            >
              SERTAI KOMUNITI <ArrowRight size={18} />
            </a>

            <a
              href="#tentang"
              className="rounded-lg border border-white/20 px-8 py-4 font-bold transition hover:border-purple-500"
            >
              KENALI KAMI
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
            <div>
              <Users className="mx-auto text-purple-400" />
              <p className="mt-3 text-xs text-gray-500">KOMUNITI</p>
            </div>
            <div>
              <Bike className="mx-auto text-red-400" />
              <p className="mt-3 text-xs text-gray-500">PERMOTORAN</p>
            </div>
            <div>
              <ShieldCheck className="mx-auto text-blue-400" />
              <p className="mt-3 text-xs text-gray-500">PERSAUDARAAN</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="mx-auto max-w-7xl px-5 py-24">
        <p className="text-xs font-bold tracking-[0.3em] text-purple-400">
          TENTANG KAMI
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          SATU MINAT.
          <span className="neon-text"> SATU KELUARGA.</span>
        </h2>

        <p className="mt-7 max-w-3xl text-sm leading-8 text-gray-400 md:text-base">
          Raintown Syndicate merupakan komuniti untuk peminat motosikal
          yang ingin berkongsi minat, berkawan, mempamerkan hasil kreativiti
          motosikal dan menyertai pelbagai aktiviti komuniti.
          Kami mengutamakan persahabatan, hormat-menghormati dan
          keselamatan semua ahli.
        </p>
      </section>

      {/* ACTIVITIES */}
      <section id="aktiviti" className="mx-auto max-w-7xl px-5 py-20">

        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-red-400">
            EKOSISTEM KAMI
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            AKTIVITI <span className="text-red-500">KOMUNITI</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group rounded-2xl border border-white/10 bg-[#11111e] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}>
                  <Icon size={28} className={item.color} />
                </div>

                <h3 className="mt-8 text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-purple-400">
                  KETAHUI LAGI <ChevronRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section id="pengumuman" className="mx-auto max-w-7xl px-5 py-20">

        <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
          BERITA KOMUNITI
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          PENGUMUMAN <span className="text-blue-400">TERKINI</span>
        </h2>

        <div className="mt-10 rounded-2xl border border-purple-500/20 bg-[#11111e] p-8 md:p-10">
          <div className="flex items-start gap-5">
            <Megaphone className="shrink-0 text-purple-400" size={35} />

            <div>
              <span className="text-xs font-bold text-purple-400">
                PENGUMUMAN RASMI
              </span>

              <h3 className="mt-4 text-xl font-black md:text-2xl">
                SELAMAT DATANG KE RAINTOWN SYNDICATE
              </h3>

              <p className="mt-4 text-sm leading-8 text-gray-400">
                Platform komuniti kami sedang dibangunkan.
                Nantikan pertandingan motosikal, aktiviti ahli,
                undian komuniti dan ganjaran eksklusif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section id="ganjaran" className="mx-auto max-w-7xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-purple-950 via-[#151024] to-blue-950 p-10 md:p-16">

          <div className="relative z-10 max-w-xl">
            <Gift size={45} className="text-blue-400" />

            <h2 className="mt-6 text-4xl font-black">
              KUMPUL RS COIN.
              <span className="block text-blue-400">
                TEBUS GANJARAN.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-300">
              Sertai aktiviti komuniti, kumpul RS Coin
              dan tebus hadiah menarik yang disediakan
              khas untuk ahli Raintown Syndicate.
            </p>

            <a
              href="/rewards"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
            >
              LIHAT GANJARAN <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-14 text-center">
        <h2 className="text-2xl font-black">
          <span className="text-purple-500">RAINTOWN</span>
          <span className="text-red-500"> SYNDICATE</span>
        </h2>

        <p className="mt-4 text-xs tracking-widest text-gray-500">
          SATU MINAT. SATU KOMUNITI. SATU KELUARGA.
        </p>

        <div className="mt-7 flex justify-center gap-5 text-gray-500">
          <Instagram size={19} />
        </div>

        <p className="mt-8 text-xs text-gray-700">
          © 2026 Raintown Syndicate. Hak cipta terpelihara.
        </p>
      </footer>

    </main>
  );
}
