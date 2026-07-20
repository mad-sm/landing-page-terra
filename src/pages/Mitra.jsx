import Geser from "../components/Geser";

// 15 lokasi. Jumlahnya muncul di TIGA tempat yang harus selalu cocok:
// panjang daftar ini, angka di strip data Hero.jsx, dan kalimat pengantar
// di bawah. Kalau menambah mitra, ubah ketiganya.
//
// `img: null` = logonya belum ada. Kartunya tetap tampil dengan nama saja;
// jangan diisi logo hasil pencarian web, itu berisiko versi tidak resmi.
const MITRA = [
  { nama: "RSUD Pandan Arang", kota: "Boyolali", img: "rspa.webp" },
  { nama: "RSUD Simo", kota: "Boyolali", img: "rssimo.webp" },
  { nama: "Cimory Cheese Park", kota: "Cepogo, Boyolali", img: "cepogo.webp" },
  { nama: "RS Panti Waluyo", kota: "Solo", img: "panti.webp" },
  { nama: "RS Kasih Ibu", kota: "Solo", img: "rski.webp" },
  { nama: "Pura Mangkunegaran", kota: "Solo", img: "mangku.webp" },
  { nama: "RSJD Dr. Arif Zainudin", kota: "Solo", img: "rsjd.webp" },
  { nama: "Pasar Jongke", kota: "Surakarta", img: null },
  { nama: "RS Dr. Oen", kota: "Solo Baru, Sukoharjo", img: "droen.webp" },
  { nama: "RS Nirmala Suri", kota: "Sukoharjo", img: "nirmala.webp" },
  { nama: "D'Kambodja", kota: "Semarang", img: "semarang.webp" },
  { nama: "RSUD Mantingan", kota: "Ngawi", img: "mantingan.webp" },
  { nama: "RSUD Dr. Soeroto", kota: "Ngawi", img: "rsngawi.webp" },
  {
    nama: "RSUP Dr. Soeradji Tirtonegoro",
    kota: "Klaten",
    img: "rsup.webp",
  },
  { nama: "RSUD Bagas Waras", kota: "Klaten", img: "bagaswaras.webp" },
];

export default function Mitra() {
  return (
    <section id="mitra" className="bg-hijau-900 py-24 md:py-32">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Mitra</p>
          <h2 className="judul-besar text-judul-1 text-gading-050 mb-6">
            Rumah sakit, pasar,
            <br className="hidden sm:block" />{" "}
            <span className="text-emas">dan tempat wisata</span>
          </h2>
          <p className="text-lg text-gading-300 leading-relaxed">
            Lima belas lokasi di Boyolali, Solo, Sukoharjo, Klaten, Ngawi, dan
            Semarang — dari gerbang IGD sampai pelataran cagar budaya.
          </p>
        </div>
      </div>

      {/* Jalan sendiri, tapi berhenti begitu kursor masuk atau treknya diseret
          — supaya logo yang sedang dilihat orang tidak kabur duluan. */}
      <div className="container mx-auto px-6">
        <Geser otomatis label="Daftar mitra Terra Parking">
          {MITRA.map((m) => (
            <div
              key={m.nama}
              className="shrink-0 w-52 bg-gading-050 flex flex-col p-6"
            >
              <div className="h-20 w-full flex items-center justify-center mb-4">
                {m.img ? (
                  <img
                    src={`/images/${m.img}`}
                    alt={m.nama}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  // Tanpa logo, namanya sendiri yang jadi isi kartu — jadi
                  // tidak diulang lagi di bawah supaya tidak kembar.
                  <p className="judul text-lg text-hijau-900 text-center leading-tight">
                    {m.nama}
                  </p>
                )}
              </div>

              <div className="mt-auto text-center">
                {m.img && (
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-hijau-900/70 leading-relaxed">
                    {m.nama}
                  </p>
                )}
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-hijau-900/45 mt-1">
                  {m.kota}
                </p>
              </div>
            </div>
          ))}
        </Geser>
      </div>
    </section>
  );
}
