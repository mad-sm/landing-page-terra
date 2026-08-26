import { useState, useEffect } from "react";

const MENU = [
  { id: "tentang", label: "Tentang" },
  { id: "sistem", label: "Sistem" },
  { id: "instalasi", label: "Instalasi" },
  { id: "mitra", label: "Mitra" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll badan halaman selama menu mobile terbuka, kalau tidak
  // halaman di belakang ikut bergeser saat menu di-scroll.
  useEffect(() => {
    document.body.style.overflow = menuTerbuka ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuTerbuka]);

  // Esc menutup menu — tanpa ini pengguna keyboard terjebak di dalamnya.
  useEffect(() => {
    if (!menuTerbuka) return;
    const onKey = (e) => e.key === "Escape" && setMenuTerbuka(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuTerbuka]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || menuTerbuka
          ? "bg-hijau-900/95 backdrop-blur-md border-b border-hijau-700"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#beranda" className="flex items-center gap-3 group">
          {/* Logo tampil warna aslinya, tidak lagi dipaksa hitam: hijaunya
              memang warna merek, dan sekarang seluruh temanya diturunkan
              dari situ. Kotak gading dipakai supaya ujung daun yang pucat
              tidak hilang di latar hijau pekat. */}
          <div className="w-10 h-10 bg-gading-050 rounded-sm flex items-center justify-center p-1.5">
            <img
              src="/images/logo.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* Wordmark tetap huruf besar — ini nama merek, dibaca sebagai
              satu bentuk, bukan kalimat. */}
          <span className="judul-besar text-xl text-gading-050">
            Terra<span className="text-emas">Parking</span>
          </span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-[0.14em]">
          {MENU.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gading-300 hover:text-emas transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-emas transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setMenuTerbuka((v) => !v)}
          aria-expanded={menuTerbuka}
          aria-controls="menu-mobile"
          aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-gading-050 transition-transform duration-300 ${
              menuTerbuka ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gading-050 transition-opacity duration-300 ${
              menuTerbuka ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gading-050 transition-transform duration-300 ${
              menuTerbuka ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panel menu mobile */}
      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden bg-hijau-900 transition-[max-height] duration-300 ease-out ${
          menuTerbuka ? "max-h-svh border-t border-hijau-700" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col">
          {MENU.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuTerbuka(false)}
              className="judul text-3xl text-gading-050 py-4 border-b border-hijau-800 hover:text-emas transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/6281329338899"
            className="mt-8 mb-2 px-6 py-4 bg-emas text-hijau-900 aksi text-center rounded-sm"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
