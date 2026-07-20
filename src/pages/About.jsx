const KOMITMEN = [
  {
    judul: "Integritas & transparansi finansial",
    isi: "Setiap transaksi tercatat dan bisa diperiksa mitra kapan saja, tanpa perlu menunggu laporan bulanan.",
  },
  {
    judul: "Teknologi terdepan",
    isi: "Gate otomatis, pembayaran nontunai, dan pencatatan digital di setiap titik masuk dan keluar.",
  },
  {
    judul: "Kenyamanan pelanggan",
    isi: "Antrean bergerak cepat, petugas terlatih, dan sistem yang tetap jalan saat jam sibuk.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="bg-hijau-800 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Kenapa kami ada</p>
            <h2 className="judul-besar text-judul-1 text-gading-050">
              Bisnis parkir
              <br className="hidden sm:block" />
              tidak harus
              <br className="hidden sm:block" />
              <span className="text-emas">seperti dulu</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-gading-050 leading-relaxed mb-6">
              Terra Parking berdiri sejak 2018, berawal dari kepercayaan
              mengelola lahan di wilayah Surakarta. Dulu, bisnis parkir kerap
              diidentikkan dengan premanisme, pelayanan minim, dan
              pertanggungjawaban yang tidak jelas.
            </p>
            <p className="text-lg text-gading-300 leading-relaxed mb-12">
              Kami hadir untuk mengubah itu. SDM yang dilatih, teknologi digital
              nontunai, dan pelaporan keuangan yang terbuka bagi mitra — supaya
              lahan parkir jadi aset yang terukur, bukan sumber keresahan.
            </p>

            <dl className="border-t border-hijau-700">
              {KOMITMEN.map((k) => (
                <div
                  key={k.judul}
                  className="py-6 border-b border-hijau-700 grid md:grid-cols-[1.5rem_1fr] gap-x-6 gap-y-2"
                >
                  <div
                    className="hidden md:block w-2 h-2 bg-emas mt-2.5 rounded-full"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="judul text-lg text-gading-050 mb-2">
                      {k.judul}
                    </dt>
                    <dd className="text-gading-300 leading-relaxed">{k.isi}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
