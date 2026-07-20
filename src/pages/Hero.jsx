const DATA = [
  { nilai: "2018", label: "Tahun berdiri" },
  // Harus cocok dengan panjang daftar MITRA di Mitra.jsx.
  { nilai: "15", label: "Lokasi terpasang" },
  { nilai: "Surakarta", label: "Home base" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-svh flex flex-col justify-center pt-32 pb-16 overflow-hidden"
    >
      {/* Garis marka jalan — sangat samar, cuma untuk memberi tekstur permukaan
          supaya latar gelapnya tidak terbaca sebagai kotak hitam kosong. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 118px, #F2F3F4 118px 120px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- PALANG: dibuka sekali saat halaman dimuat -------------------
            Panjangnya dikunci 15rem, bukan w-full: saat terangkat ke vertikal
            panjang itu jadi TINGGI, jadi palang selebar kolom akan berubah
            jadi tiang setinggi ratusan piksel yang mendominasi hero. */}
        <div className="relative h-40 mb-4" aria-hidden="true">
          <div className="absolute left-0 bottom-0 w-3 h-8 bg-hijau-700 rounded-sm" />
          <div className="palang palang-naik absolute left-2 bottom-2.5 h-2.5 w-60 rounded-sm" />
        </div>

        <p className="eyebrow mb-6">PT Tiga Putra Sukses Abadi</p>

        {/* <br> hanya dari sm ke atas: di layar sempit "Parkir yang bisa"
            satu baris lebih lebar dari viewport, dan itu melebarkan container
            sehingga seluruh isi hero ikut terpotong. Biarkan wrap sendiri. */}
        <h1 className="judul-besar text-display text-gading-050 max-w-4xl mb-8 [text-wrap:balance]">
          Parkir yang bisa
          <br className="hidden sm:block" />{" "}
          <span className="text-emas">diperiksa</span>
        </h1>

        <p className="text-lg md:text-xl text-gading-300 max-w-xl leading-relaxed mb-10">
          Kami memasang dan mengoperasikan sistem parkir otomatis di rumah
          sakit, pasar, dan tempat wisata — dengan pelaporan keuangan yang bisa
          diperiksa mitra kapan saja.
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
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

        {/* --- Strip data --------------------------------------------------- */}
        {/* 2 kolom dulu, baru 3 dari sm: di layar sempit sepertiga lebar tidak
            muat menampung kata sepanjang "Surakarta" dan nilainya terpotong. */}
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 md:gap-12 max-w-2xl border-t border-hijau-700 pt-8">
          {DATA.map((d) => (
            <div key={d.label}>
              <dt className="sr-only">{d.label}</dt>
              <dd>
                <span className="judul-besar block text-judul-2 text-gading-050 mb-2">
                  {d.nilai}
                </span>
                <span className="font-mono text-[0.65rem] md:text-xs uppercase tracking-[0.14em] text-gading-300">
                  {d.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
