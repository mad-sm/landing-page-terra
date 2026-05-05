export default function Services() {
  const features = [
    { title: "Mobile QR Code / Cashless", desc: "Mendukung pembayaran E-Money, Flazz, TapCash, Brizzi, dan QRIS." },
    { title: "Membership Smartcard", desc: "Akses parkir berlangganan (tenant/karyawan) dengan kartu RFID khusus." },
    { title: "AI System", desc: "Sistem Cerdas untuk otomatisasi gate darurat seperti pintu IGD." },
    { title: "Ticket Dispenser Button", desc: "Sistem tiket termal otomatis dengan kecepatan tinggi dan akurat." },
  ];

  const hardware = [
    "Barrier Gate / Boomgate High-Speed", 
    "Ticket Dispenser & Controller", 
    "Pos Kasir & Komputer Server",
    "Loop Detector & Sensor Kendaraan"
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Produk & <span className="text-blue-600">Fitur Operasi</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Infrastruktur parkir tangguh dengan peralatan kelas industrial yang dikonfigurasi untuk bekerja 24/7 tanpa henti.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Kolom Fitur Software/Sistem */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg mb-6 font-bold text-xl">
                  0{i+1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Kolom Hardware / Equipment */}
          <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Hardware Kami</h3>
            <ul className="space-y-6">
              {hardware.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-4 bg-slate-800 rounded-lg text-sm text-slate-400 border border-slate-700">
              *Seluruh instalasi dikonfigurasi dan dipelihara secara rutin oleh tim teknisi internal Terra Parking.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}