import Gerbang from "../components/Gerbang";
import PetaLokasi from "../components/PetaLokasi";

// Jumlah lokasi harus cocok dengan panjang daftar MITRA di Mitra.jsx.
const DATA = [
  { nilai: "2018", label: "Berdiri sejak" },
  { nilai: "15", label: "Lokasi terpasang" },
  { nilai: "Surakarta", label: "Home base" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-svh flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* --- Latar ------------------------------------------------------------
          Tiga lapis, semuanya sangat samar dan semuanya di bawah z-10. Yang
          penting di sini adalah menahan diri: latar yang ramai akan berebut
          dengan judul, dan judul yang kalah membuat halaman gagal. */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Marka jalan */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 118px, #F4F1E6 118px 120px)",
          }}
        />

        {/* Peta sebaran lokasi, kanan atas. */}
        <PetaLokasi className="absolute right-0 top-16 w-[42rem] max-w-[85vw] text-hijau-400 opacity-[0.16]" />

        {/* Logo mengapung. Dipotong di tepi kiri bawah supaya terbaca sebagai
            tekstur, bukan gambar yang berdiri sendiri dan minta diperhatikan. */}
        <img
          src="/images/logo.webp"
          alt=""
          className="logo-apung absolute -left-24 -bottom-32 w-[34rem] max-w-[70vw] opacity-[0.05]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
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

            <div className="flex flex-wrap gap-4 mb-12">
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

            {/* 2 kolom dulu, baru 3 dari sm: di layar sempit sepertiga lebar
                tidak muat menampung kata sepanjang "Surakarta". */}
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 md:gap-10 max-w-2xl border-t border-hijau-700 pt-8">
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

          <div className="lg:col-span-5 flex lg:justify-end">
            <Gerbang />
          </div>
        </div>
      </div>
    </section>
  );
}
