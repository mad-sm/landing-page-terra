export default function Clients() {
  const clients = [
    { name: "RSUD Pandan Arang", img: "rspa.jpg" },
    { name: "RS Nirmala Suri", img: "nirmala.png" },
    { name: "RSUP Soeradji", img: "rsup.png" },
    { name: "Pura Mangkunegaran", img: "mangku.png" },
    { name: "Mall Klaten Town Square", img: "klatoz.png" },
    { name: "RS Kasih Ibu", img: "rski.png" },
  ];

  return (
    <section id="klien" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Dipercaya Oleh <span className="text-blue-600">Mitra Terbaik</span></h2>
            <p className="text-slate-600 text-lg">Dari Pusat Perbelanjaan, Rumah Sakit, hingga Situs Warisan Budaya, kami memberikan standar pelayanan parkir yang sama ekselennya.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner relative">
             <div className="text-6xl text-blue-200 absolute top-4 left-4 font-serif">"</div>
             <p className="text-slate-700 font-medium italic relative z-10 pt-4">
               "Dari pengalaman kemitraan kami dengan PT Tiga Putra Sukses Abadi (Terra Parking) selama ini, tim manajemen mereka mempunyai komitmen tinggi, sangat transparan, dan dapat dipercaya penuh untuk mengurus aset parkir kami."
             </p>
             <p className="mt-4 font-bold text-slate-900">- Representatif Mitra RSUD</p>
          </div>
        </div>
      </div>

      {/* Marquee Logo Berjalan */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="animate-marquee w-max flex gap-8 px-4">
          {[1, 2, 3].map((loop) => (
            <div key={loop} className="flex gap-8">
              {clients.map((client, i) => (
                <div key={i} className="w-56 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="h-20 w-full flex items-center justify-center mb-4">
                    {/* Pastikan file gambar ini benar-benar ada di folder public/images */}
                    <img src={`/images/${client.img}`} alt={client.name} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold text-slate-700 text-center text-xs uppercase tracking-wide">{client.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}