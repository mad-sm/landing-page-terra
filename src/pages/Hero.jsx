import { useState, useEffect } from "react";

export default function Hero() {
  // === PENGATURAN FOTO ===
  // Ganti angka ini sesuai dengan jumlah foto yang kamu taruh di folder public/images/home
  // Kalau kamu nambah foto jadi 5, tinggal ganti angka 3 di bawah ini jadi 5.
  const jumlahFoto = 18; 
  
  // React akan otomatis membuat daftar: ['/images/home/1.jpg', '/images/home/2.jpg', ...]
  const images = Array.from({ length: jumlahFoto }, (_, i) => `/images/home/${i + 1}.jpeg`);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi Auto-Play (Ganti foto otomatis setiap 4 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [images.length]);

  // Fungsi Manual Pindah Foto
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Background Glowing Blobs (Bisa dipertahankan agar tetap mewah) */}
      <div className="absolute top-20 -left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 -right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Teks Kiri */}
        <div className="text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold mb-6 text-xs tracking-widest uppercase border border-blue-200">
            PT Tiga Putra Sukses Abadi
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Parking Aman<br/> <span className="text-gradient"> Mudah & Terintegrasi</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Hadirkan pengalaman parkir tanpa hambatan (seamless) di properti Anda. Kami memadukan teknologi gate otomatis termutakhir dengan transparansi operasional kelas satu.
          </p>
          <div className="flex gap-4">
            <a href="#layanan" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/30">
              Lihat Solusi Kami
            </a>
            <a href="#kontak" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-lg hover:bg-slate-100 transition-all border border-slate-300 shadow-sm">
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* --- IMAGE SLIDER (CAROUSEL) KANAN --- */}
        <div className="relative mx-auto w-full group">
          <div className="glass-card rounded-2xl p-2 border border-white shadow-2xl relative overflow-hidden">
            
            {/* Wadah Foto dengan rasio 4:3 agar konsisten */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Proyek Terra Parking ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Tombol Kiri & Kanan (Akan muncul saat di-hover / disentuh mouse) */}
            <button 
              onClick={prevSlide} 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white backdrop-blur shadow-md rounded-full flex items-center justify-center text-slate-800 transition-all opacity-0 group-hover:opacity-100"
            >
              &#10094;
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white backdrop-blur shadow-md rounded-full flex items-center justify-center text-slate-800 transition-all opacity-0 group-hover:opacity-100"
            >
              &#10095;
            </button>

            {/* Indikator Titik (Dots) di bagian bawah foto */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-8" : "bg-white/80 hover:bg-white w-2.5"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}