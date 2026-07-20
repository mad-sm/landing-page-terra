// Sebaran kota tempat Terra Parking terpasang, diplot dari koordinat asli.
//
// KENAPA BUKAN SILUET PULAU: garis pantai yang saya gambar dari ingatan pasti
// meleset, dan bentuk Jawa yang salah akan langsung ketahuan orang sini —
// itu lebih buruk daripada tidak ada gambar sama sekali. Titik koordinat bisa
// diperiksa kebenarannya; garis pantai karangan tidak.
//
// Kalau nanti ada berkas SVG peta yang sahih, ia bisa dilapis di belakang
// titik-titik ini tanpa mengubah komponen.
const KOTA = [
  { nama: "Semarang", lon: 110.42, lat: -6.97 },
  { nama: "Boyolali", lon: 110.6, lat: -7.53 },
  { nama: "Klaten", lon: 110.6, lat: -7.7 },
  { nama: "Surakarta", lon: 110.83, lat: -7.57, pusat: true },
  { nama: "Sukoharjo", lon: 110.84, lat: -7.68 },
  { nama: "Ngawi", lon: 111.45, lat: -7.4 },
];

// Kotak pandang sedikit lebih longgar dari sebaran kotanya, biar titik
// terluar tidak menempel di tepi.
const [LON0, LON1] = [110.3, 111.8];
const [LAT0, LAT1] = [-6.85, -7.85];

const ke = ({ lon, lat }) => ({
  x: ((lon - LON0) / (LON1 - LON0)) * 100,
  y: ((LAT0 - lat) / (LAT0 - LAT1)) * 100,
});

export default function PetaLokasi({ className = "" }) {
  const titik = KOTA.map((k) => ({ ...k, ...ke(k) }));
  const pusat = titik.find((t) => t.pusat);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Lingkaran sepusat di Surakarta — home base, tempat semuanya berangkat. */}
      {[14, 26, 38].map((r) => (
        <circle
          key={r}
          cx={pusat.x}
          cy={pusat.y}
          r={r}
          stroke="currentColor"
          strokeWidth="0.25"
          opacity="0.35"
        />
      ))}

      {/* Garis dari home base ke tiap kota. */}
      {titik
        .filter((t) => !t.pusat)
        .map((t) => (
          <line
            key={t.nama}
            x1={pusat.x}
            y1={pusat.y}
            x2={t.x}
            y2={t.y}
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.5"
          />
        ))}

      {titik.map((t) => (
        <g key={t.nama}>
          <circle
            cx={t.x}
            cy={t.y}
            r={t.pusat ? 1.6 : 1}
            fill="currentColor"
            opacity={t.pusat ? 1 : 0.8}
          />
          <text
            x={t.x + 2.6}
            y={t.y + 1}
            fill="currentColor"
            opacity="0.7"
            style={{
              font: "2.6px var(--font-mono)",
              letterSpacing: "0.35px",
              textTransform: "uppercase",
            }}
          >
            {t.nama}
          </text>
        </g>
      ))}
    </svg>
  );
}
