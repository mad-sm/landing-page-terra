const KONTAK = [
  {
    label: "Alamat",
    isi: "Jl. Tiga Negeri 50, Makamhaji, Kartasura, Surakarta",
  },
  {
    label: "Telepon",
    isi: "081 329 338899",
    href: "tel:+6281329338899",
  },
  {
    label: "Surel",
    isi: "tigaputerasukses@gmail.com",
    href: "mailto:tigaputerasukses@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-aspal-900 pt-24 pb-12">
      {/* Pita garis bahaya — motifnya diambil dari bolar kuning-hitam di foto
          instalasi sendiri, jadi ini bukan dekorasi asal tempel. */}
      <div className="garis-bahaya h-2 w-full mb-24" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="eyebrow mb-6">Mulai percakapan</p>
            <h2 className="judul-besar text-judul-1 text-beton-050 mb-8 max-w-lg">
              Ceritakan lahan
              <br className="hidden sm:block" />
              yang mau dikelola
            </h2>
            <p className="text-beton-300 leading-relaxed max-w-md mb-10">
              Kirim lokasi dan perkiraan jumlah kendaraan per hari. Kami balas
              dengan gambaran sistem yang cocok dan skema kerja samanya.
            </p>
            <a
              href="https://wa.me/6281329338899"
              className="inline-block px-8 py-4 bg-sinyal-amber text-aspal-900 aksi rounded-sm hover:bg-beton-050 transition-colors"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          <div className="lg:pt-16">
            <dl className="space-y-8">
              {KONTAK.map((k) => (
                <div
                  key={k.label}
                  className="border-t border-aspal-700 pt-4 grid sm:grid-cols-[8rem_1fr] gap-2"
                >
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-beton-300">
                    {k.label}
                  </dt>
                  <dd className="text-beton-050 leading-relaxed">
                    {k.href ? (
                      <a
                        href={k.href}
                        className="hover:text-sinyal-amber transition-colors"
                      >
                        {k.isi}
                      </a>
                    ) : (
                      k.isi
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="pt-8 border-t border-aspal-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-beton-300">
            &copy; {new Date().getFullYear()} PT Tiga Putra Sukses Abadi
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-beton-300">
            Surakarta, Jawa Tengah
          </p>
        </div>
      </div>
    </footer>
  );
}
