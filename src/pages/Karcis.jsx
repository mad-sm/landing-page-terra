// Karcis contoh — signature halaman. Isinya sengaja bukan hiasan: baris-baris
// inilah yang jadi bukti janji "bisa diperiksa" di judul hero.
//
// Ditandai CONTOH karena angkanya ilustrasi. Jangan diganti data transaksi
// asli: itu akan memajang catatan kendaraan orang di halaman publik.
const BARIS = [
  [
    ["Lokasi", "RSUD Mantingan"],
    ["Gerbang", "Masuk 2"],
  ],
  [
    ["Masuk", "07:14"],
    ["Keluar", "09:32"],
    ["Durasi", "2 jam 18 mnt"],
  ],
  [
    ["Tarif", "Rp 4.000"],
    ["Bayar", "QRIS"],
  ],
];

export default function Karcis() {
  return (
    // Sengaja TIDAK aria-hidden seluruhnya: pasangan label-nilai di bawah
    // justru menjelaskan apa saja yang dicatat sistem, dan kalimat penutupnya
    // adalah janji yang tidak muncul di tempat lain. Yang disembunyikan cuma
    // grafik barcode-nya. Badge "Contoh" dibacakan lebih dulu, jadi konteks
    // "ini ilustrasi" sudah terpasang sebelum angkanya terdengar.
    <div className="tiket karcis-keluar w-[19rem] max-w-full px-6 pt-6 pb-8 shadow-2xl shadow-black/40">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="judul-besar text-sm leading-none">Terra Parking</p>
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-hijau-900/50 mt-1.5">
            PT Tiga Putra Sukses Abadi
          </p>
        </div>
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-hijau-900/40 border border-hijau-900/20 px-1.5 py-0.5">
          Contoh
        </span>
      </div>

      {BARIS.map((grup, i) => (
        <dl
          key={i}
          className="border-t border-dashed border-hijau-900/25 py-3 font-mono text-[0.65rem]"
        >
          {grup.map(([label, nilai]) => (
            <div key={label} className="flex justify-between gap-4 py-0.5">
              <dt className="uppercase tracking-[0.1em] text-hijau-900/50">
                {label}
              </dt>
              <dd className="text-hijau-900">{nilai}</dd>
            </div>
          ))}
        </dl>
      ))}

      <div
        className="border-t border-dashed border-hijau-900/25 pt-4"
        aria-hidden="true"
      >
        <div className="barcode h-11 w-full" />
        <p className="font-mono text-[0.6rem] tracking-[0.25em] text-center mt-2">
          0294 8817 2233
        </p>
      </div>

      {/* Kalimat ini yang bikin karcisnya bukan sekadar properti: janji
          perusahaan tercetak di atas benda yang membuktikannya. */}
      <p className="font-mono text-[0.55rem] leading-relaxed text-hijau-900/55 mt-5 pt-4 border-t border-dashed border-hijau-900/25">
        Setiap transaksi tercatat di sistem pusat. Mitra bisa memeriksanya
        kapan saja.
      </p>
    </div>
  );
}
