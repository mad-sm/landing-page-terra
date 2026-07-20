const SISTEM = [
  {
    judul: "Pembayaran nontunai",
    isi: "QRIS, e-money, Flazz, TapCash, dan Brizzi langsung di gerbang keluar.",
  },
  {
    judul: "Kartu langganan",
    isi: "Akses RFID untuk tenant dan karyawan, tanpa ambil tiket setiap masuk.",
  },
  {
    judul: "Gate darurat otomatis",
    isi: "Palang membuka sendiri untuk jalur ambulans dan pintu IGD.",
  },
  {
    judul: "Tiket termal",
    isi: "Dispenser cetak cepat dengan barcode, akurat saat antrean padat.",
  },
];

const PERANGKAT = [
  "Barrier gate high-speed",
  "Ticket dispenser & controller",
  "Pos kasir & komputer server",
  "Loop detector & sensor kendaraan",
];

export default function Services() {
  return (
    <section id="sistem" className="bg-aspal-900 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6">Sistem & perangkat</p>
          <h2 className="judul-besar text-judul-1 text-beton-050 mb-6">
            Dipasang untuk
            <br className="hidden sm:block" />
            jalan <span className="text-sinyal-amber">24 jam</span>
          </h2>
          <p className="text-lg text-beton-300 leading-relaxed">
            Perangkat kelas industrial, dikonfigurasi dan dirawat rutin oleh
            teknisi internal kami — bukan vendor pihak ketiga.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Fitur sistem — tanpa penomoran 01/02/03: ini daftar kemampuan
              yang berdiri sendiri, bukan urutan langkah. */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-aspal-700 border border-aspal-700">
            {SISTEM.map((s) => (
              <div
                key={s.judul}
                className="bg-aspal-900 p-8 hover:bg-aspal-800 transition-colors"
              >
                <h3 className="judul text-xl text-beton-050 mb-3">{s.judul}</h3>
                <p className="text-beton-300 leading-relaxed">{s.isi}</p>
              </div>
            ))}
          </div>

          {/* Daftar perangkat keras — dibuat terang supaya terbaca sebagai
              lembar spesifikasi yang terpisah dari fitur sistem. */}
          <div className="bg-beton-050 text-aspal-900 p-8">
            <h3 className="judul text-xl mb-8 pb-4 border-b-2 border-aspal-900">
              Perangkat keras
            </h3>
            <ul className="space-y-5">
              {PERANGKAT.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-4 pb-5 border-b border-beton-100 last:border-0"
                >
                  <span
                    className="mt-1.5 w-2 h-2 bg-sinyal-merah rounded-full shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
