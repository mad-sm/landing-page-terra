import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/cLients";

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        
        {/* Footer & Contact Ala Korporat */}
        <section id="kontak" className="pt-24 pb-12 bg-slate-900 text-slate-300 border-t-4 border-blue-600">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-6">Terra<span className="text-blue-500">Parking</span></h3>
                <p className="mb-6 leading-relaxed max-w-md">
                  PT Tiga Putra Sukses Abadi. Pemimpin layanan sistem parkir modern dengan komitmen pada transparansi, teknologi terintegrasi, dan kemudahan pelanggan.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3"><span className="text-blue-500">📍</span> Jl. Tiga Negeri 50, Makamhaji, Kartasura, Surakarta</li>
                  <li className="flex gap-3"><span className="text-blue-500">📞</span> 081 329 338899</li>
                  <li className="flex gap-3"><span className="text-blue-500">✉️</span> tigaputerasukses@gmail.com</li>
                </ul>
              </div>

              <div>
                {/* <h4 className="text-lg font-bold text-white mb-6">Peluang Karir</h4>
                <p className="mb-4 text-sm">Kami selalu membuka kesempatan bagi SDM profesional untuk bergabung dengan tim operasional kami.</p> */}
                <a href="https://wa.me/6281329338899" className="inline-block px-6 py-2 bg-slate-800 hover:bg-blue-600 text-white font-semibold rounded transition-colors text-sm border border-slate-700">
                  Hubungi Kami
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-slate-500">
              <p>&copy; {new Date().getFullYear()} PT Tiga Putra Sukses Abadi. All Rights Reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;