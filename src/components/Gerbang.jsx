import { useEffect, useState } from "react";

/**
 * Palang yang bisa dibuka-tutup. Bukan hiasan: menekannya memberi balasan
 * yang sama seperti gerbang sungguhan — lengan berputar, lampu berganti,
 * status berubah. Itu sekaligus peragaan produk yang dijual halaman ini.
 *
 * Balasannya sengaja tiga lapis, karena satu saja tidak cukup untuk semua
 * orang: gerakan (terlihat), warna lampu (terlihat sekilas), dan teks status
 * yang diumumkan lewat aria-live (terdengar pembaca layar). Lampu tidak
 * pernah jadi satu-satunya penanda — orang buta warna akan kehilangan itu.
 */
export default function Gerbang() {
  const [terbuka, setTerbuka] = useState(false);

  // Membuka sendiri sekali saat halaman dimuat, supaya gerakannya terlihat
  // dan orang paham benda ini bisa digerakkan.
  useEffect(() => {
    const t = setTimeout(() => setTerbuka(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full max-w-sm">
      {/* Tinggi wadah harus >= tinggi pangkal + panjang lengan. Saat lengan
          terangkat hampir tegak, panjangnya berubah jadi TINGGI: wadah yang
          terlalu pendek bikin lengan menjulur keluar dan menimpa isi di
          atasnya. Kalau panjang lengan diubah, tinggi ini ikut diubah. */}
      <div className="relative h-80 sm:h-96" aria-hidden="true">
        {/* Tiang. Diberi alas dan tepi lebih terang karena hijau-700 di atas
            hijau-900 nyaris tidak terlihat — tiangnya harus terbaca, kalau
            tidak lengannya seperti melayang tanpa tumpuan. */}
        <div className="absolute left-0 bottom-0 w-6 h-28 bg-hijau-800 border border-hijau-700 rounded-sm" />
        <div className="absolute -left-1.5 bottom-0 w-9 h-2 bg-hijau-700 rounded-sm" />
        <div className="absolute left-1 bottom-24 w-4 h-4 rounded-full bg-hijau-900 border border-hijau-700" />

        {/* Lampu status. Hijau terang saat terbuka, merah saat tertutup. */}
        <div
          className={`absolute left-1.5 bottom-[6.6rem] w-3 h-3 rounded-full transition-colors duration-500 ${
            terbuka
              ? "bg-hijau-400 shadow-[0_0_12px_2px] shadow-hijau-400/50"
              : "bg-merah shadow-[0_0_12px_2px] shadow-merah/50"
          }`}
        />

        {/* Lengan. Titik putarnya di pangkal, sama seperti barrier asli. */}
        <div
          className={`lengan-palang palang absolute left-5 bottom-[6.1rem] h-3 w-52 sm:w-72 rounded-sm origin-left transition-transform duration-700 ${
            terbuka ? "-rotate-[76deg]" : "rotate-0"
          }`}
          style={{ transitionTimingFunction: "var(--ease-keluar)" }}
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="button"
          onClick={() => setTerbuka((v) => !v)}
          className="px-6 py-3 border border-hijau-700 text-gading-050 aksi rounded-sm hover:border-emas hover:text-emas transition-colors"
        >
          {/* Tombol menyebut apa yang akan terjadi, bukan keadaan sekarang. */}
          {terbuka ? "Tutup palang" : "Buka palang"}
        </button>

        {/* Status diumumkan ke pembaca layar. aria-live="polite" supaya
            tidak memotong pembacaan yang sedang berjalan. */}
        <p
          aria-live="polite"
          className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gading-300"
        >
          Palang {terbuka ? "terbuka" : "tertutup"}
        </p>
      </div>
    </div>
  );
}
