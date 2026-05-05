import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-200" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
            <img src="/images/logo.png" alt="Logo Terra" className="w-full h-full object-contain filter brightness-0 invert" />
          </div>
          <span className="font-bold text-2xl text-slate-900 tracking-tight">Terra<span className="text-blue-600">Parking</span></span>
        </a>

        <div className="hidden md:flex gap-8 font-semibold text-sm tracking-wide">
          {["beranda", "tentang", "layanan", "klien", "kontak"].map((item) => (
            <a key={item} href={`#${item}`} className="text-slate-600 hover:text-blue-600 transition-colors uppercase relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}