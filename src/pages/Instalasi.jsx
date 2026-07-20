import Geser from "../components/Geser";

// Nama fasilitas per foto. Hanya diisi untuk yang papan namanya terbaca jelas
// di gambar — sisanya sengaja null supaya tidak ada keterangan karangan yang
// ikut tayang. Foto tanpa nama tetap tampil, cuma tanpa caption.
const FOTO = [
  { file: "1.webp", lokasi: "RSJD Dr. Arif Zainudin" },
  { file: "2.webp", lokasi: null },
  { file: "3.webp", lokasi: null },
  { file: "4.webp", lokasi: null },
  { file: "5.webp", lokasi: null },
  { file: "6.webp", lokasi: null },
  { file: "7.webp", lokasi: null },
  { file: "8.webp", lokasi: null },
  { file: "9.webp", lokasi: null },
  { file: "10.webp", lokasi: null },
  { file: "11.webp", lokasi: null },
  { file: "12.webp", lokasi: "RSUD Mantingan" },
  { file: "13.webp", lokasi: null },
  { file: "14.webp", lokasi: null },
  { file: "15.webp", lokasi: null },
  { file: "16.webp", lokasi: null },
  { file: "17.webp", lokasi: null },
  { file: "18.webp", lokasi: null },
];

export default function Instalasi() {
  return (
    <section id="instalasi" className="bg-beton-050 text-aspal-900 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6 !text-aspal-900">Instalasi</p>
          <h2 className="judul-besar text-judul-1 mb-6">
            Foto lapangan,
            <br className="hidden sm:block" />
            bukan foto stok
          </h2>
          <p className="text-lg text-aspal-900/70 leading-relaxed">
            Setiap gambar di bawah ini diambil di lokasi yang kami pasang dan
            operasikan sendiri.
          </p>
        </div>
      </div>

      {/* Filmstrip: tinggi dikunci, lebar mengikuti rasio asli. Foto di sini
          campuran potret dan lanskap — cara ini menampilkan keduanya utuh
          tanpa dipotong, dan panjangnya tidak menghabiskan halaman. */}
      <div className="container mx-auto px-6">
        <Geser label="Galeri foto instalasi">
          {FOTO.map((f, i) => (
            <figure key={f.file} className="shrink-0 snap-start">
              <div className="h-64 md:h-80 bg-beton-100 overflow-hidden">
                <img
                  src={`/images/home/${f.file}`}
                  alt={
                    f.lokasi
                      ? `Instalasi sistem parkir Terra Parking di ${f.lokasi}`
                      : "Instalasi sistem parkir Terra Parking"
                  }
                  /* Tiga foto pertama dimuat langsung karena sudah terlihat
                     sebelum digeser; sisanya menunggu didekati. */
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                  className="h-full w-auto max-w-none object-cover grayscale"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-aspal-900/60">
                {f.lokasi ?? " "}
              </figcaption>
            </figure>
          ))}
        </Geser>
      </div>
    </section>
  );
}
