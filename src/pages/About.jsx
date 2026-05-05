export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Tim Terra Parking" 
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-black mb-1">2018</h3>
              <p className="font-medium text-blue-100">Tahun Berdiri</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-slate-900">
              Transformasi Bisnis Parkir <br/><span className="text-blue-600">Yang Transparan & Modern</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Terra Parking hadir sejak 2018 berawal dari kepercayaan mengelola lahan di wilayah Surakarta. Dulu, bisnis parkir kerap diidentikkan dengan premanisme, pelayanan minim, dan pertanggungjawaban yang tidak jelas.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Oleh karena itu, kami hadir dengan tekad mengubah sektor ini menjadi bisnis yang dikelola 100% profesional. Kami memadukan SDM berkualitas dengan <strong>teknologi digital (Cashless)</strong> serta pelaporan keuangan yang transparan bagi mitra kami.
            </p>
            
            <ul className="space-y-4">
              {['Integritas & Transparansi Finansial', 'Teknologi Terdepan (Leading Technology)', 'Kenyamanan Pelanggan (Customer Convenience)'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}