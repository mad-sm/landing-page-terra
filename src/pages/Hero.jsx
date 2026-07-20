import Karcis from "./Karcis";

// Angka perusahaan. Sengaja TIDAK ditaruh di karcis: karcis itu catatan satu
// transaksi, mencampur statistik perusahaan ke dalamnya bikin keduanya bohong.
// Jumlah lokasi harus cocok dengan panjang daftar MITRA di Mitra.jsx.
const DATA = ["Berdiri 2018", "15 lokasi terpasang", "Home base Surakarta"];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-svh flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Garis marka jalan — sangat samar, cuma untuk memberi tekstur permukaan
          supaya latar gelapnya tidak terbaca sebagai kotak kosong. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 118px, #F4F1E6 118px 120px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">PT Tiga Putra Sukses Abadi</p>

            {/* <br> hanya dari sm ke atas: di layar sempit "Parkir yang bisa"
                satu baris lebih lebar dari viewport, dan itu melebarkan
                container sehingga seluruh isi hero ikut terpotong. */}
            <h1 className="judul-besar text-display text-gading-050 mb-8 [text-wrap:balance]">
              Parkir yang bisa
              <br className="hidden sm:block" />{" "}
              <span className="text-emas">diperiksa</span>
            </h1>

            <p className="text-lg md:text-xl text-gading-300 max-w-xl leading-relaxed mb-10">
              Kami memasang dan mengoperasikan sistem parkir otomatis di rumah
              sakit, pasar, dan tempat wisata — dengan pelaporan keuangan yang
              bisa diperiksa mitra kapan saja.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/6281329338899"
                className="px-8 py-4 bg-emas text-hijau-900 aksi rounded-sm hover:bg-gading-050 transition-colors"
              >
                Hubungi via WhatsApp
              </a>
              <a
                href="#sistem"
                className="px-8 py-4 border border-hijau-700 text-gading-050 aksi rounded-sm hover:border-emas hover:text-emas transition-colors"
              >
                Lihat sistem kami
              </a>
            </div>

            {/* Satu baris tenang, bukan tiga angka besar berlabel kecil: pola
                itu jawaban template, dan di sini ia akan berebut perhatian
                dengan karcis yang justru jadi buktinya. */}
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gading-300">
              {DATA.map((d, i) => (
                <li key={d} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-hijau-700">
                      /
                    </span>
                  )}
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <Karcis />
          </div>
        </div>
      </div>
    </section>
  );
}
