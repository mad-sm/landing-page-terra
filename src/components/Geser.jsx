import { useCallback, useEffect, useRef, useState } from "react";

// Jarak antar item, harus sama dengan kelas gap-4 di trek (1rem = 16px).
// Dipakai untuk menghitung titik lompat balik saat mode otomatis.
const JARAK = 16;
const KECEPATAN = 28; // piksel per detik

/**
 * Trek geser horizontal. Dipakai bersama oleh galeri instalasi dan deret logo
 * mitra — interaksinya sama, jadi jangan digandakan.
 *
 * Cara menggesernya ada empat, sengaja: seret dengan mouse, usap di layar
 * sentuh, tombol panah, dan tombol kiri/kanan keyboard. Yang terakhir jalan
 * karena treknya diberi tabindex, jadi ia jadi wilayah yang bisa difokus dan
 * browser menangani panah keyboard sendiri.
 *
 * `otomatis` membuatnya berjalan sendiri tanpa henti. Isinya digandakan dua
 * kali, lalu posisi scroll dikembalikan ke awal begitu melewati salinan
 * pertama — jadi sambungannya tidak terlihat. Jalannya berhenti saat pengguna
 * mengarahkan kursor, menyeret, atau memfokus sesuatu di dalamnya: kalau tidak,
 * konten yang sedang dibaca orang bergeser sendiri di bawah matanya.
 */
export default function Geser({
  label,
  children,
  otomatis = false,
  className = "",
}) {
  const trekRef = useRef(null);
  const grupRef = useRef(null);
  const jeda = useRef(false);
  const posisi = useRef(0); // posisi scroll pecahan untuk mode otomatis
  const [bisaKiri, setBisaKiri] = useState(false);
  const [bisaKanan, setBisaKanan] = useState(false);

  const perbaruiTombol = useCallback(() => {
    const el = trekRef.current;
    if (!el) return;
    if (otomatis) {
      // Treknya melingkar, jadi tidak pernah ada ujung.
      setBisaKiri(true);
      setBisaKanan(true);
      return;
    }
    // Ambang 4px: pembulatan sub-piksel bikin scrollLeft tidak pernah pas 0.
    setBisaKiri(el.scrollLeft > 4);
    setBisaKanan(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, [otomatis]);

  useEffect(() => {
    const el = trekRef.current;
    if (!el) return;
    perbaruiTombol();
    const ro = new ResizeObserver(perbaruiTombol);
    ro.observe(el);
    return () => ro.disconnect();
  }, [perbaruiTombol]);

  // Panjang satu salinan penuh — titik di mana posisi harus dikembalikan.
  const panjangSalinan = () =>
    grupRef.current ? grupRef.current.offsetWidth + JARAK : 0;

  // --- Jalan sendiri ------------------------------------------------------
  useEffect(() => {
    if (!otomatis) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    let sebelumnya = performance.now();

    const langkah = (sekarang) => {
      const selisih = (sekarang - sebelumnya) / 1000;
      sebelumnya = sekarang;
      const el = trekRef.current;

      if (el) {
        if (jeda.current) {
          // Sedang dipegang pengguna — ikuti posisinya supaya saat lanjut
          // nanti tidak melompat balik ke tempat terakhir animasi.
          posisi.current = el.scrollLeft;
        } else {
          // Posisi disimpan sendiri sebagai pecahan. Kalau langsung menambah
          // el.scrollLeft, browser membulatkannya tiap frame sehingga
          // tambahan sub-piksel (~0,45px di 60Hz) hilang terus dan treknya
          // tidak pernah bergerak.
          // Berbasis waktu, bukan per-frame: di 120Hz kecepatannya sama.
          posisi.current += KECEPATAN * selisih;
          const batas = panjangSalinan();
          if (batas && posisi.current >= batas) posisi.current -= batas;
          el.scrollLeft = posisi.current;
        }
      }
      raf = requestAnimationFrame(langkah);
    };

    raf = requestAnimationFrame(langkah);
    return () => cancelAnimationFrame(raf);
  }, [otomatis]);

  const geser = (arah) => {
    const el = trekRef.current;
    if (!el) return;
    const batas = panjangSalinan();

    // Saat melingkar, menggeser ke kiri dari posisi awal akan mentok di 0.
    // Lompat dulu satu salinan ke depan supaya ada ruang untuk mundur.
    if (otomatis && arah < 0 && batas && el.scrollLeft < el.clientWidth) {
      el.scrollLeft += batas;
    }

    // behavior dari JS menang atas scroll-behavior di CSS, jadi aturan
    // reduced-motion di index.css tidak berlaku di sini — harus dicek sendiri.
    const hematGerak = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollBy({
      left: arah * el.clientWidth * 0.85,
      behavior: hematGerak ? "auto" : "smooth",
    });
  };

  // --- Seret dengan mouse -------------------------------------------------
  // Layar sentuh tidak diikutkan: scroll bawaan di sana sudah lebih halus
  // (ada inersia) daripada apa pun yang bisa ditiru di sini.
  const seret = useRef({ aktif: false, mulaiX: 0, mulaiScroll: 0, jarak: 0 });

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = trekRef.current;
    jeda.current = true;
    seret.current = {
      aktif: true,
      mulaiX: e.clientX,
      mulaiScroll: el.scrollLeft,
      jarak: 0,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!seret.current.aktif) return;
    const el = trekRef.current;
    const dx = e.clientX - seret.current.mulaiX;
    seret.current.jarak = Math.max(seret.current.jarak, Math.abs(dx));
    el.scrollLeft = seret.current.mulaiScroll - dx;
  };

  const selesaiSeret = (e) => {
    if (!seret.current.aktif) return;
    seret.current.aktif = false;
    trekRef.current?.releasePointerCapture?.(e.pointerId);
  };

  // Setelah menyeret, pointerup memicu klik pada elemen di bawah kursor.
  // Tanpa penjaga ini, menyeret galeri bisa ikut membuka tautan di dalamnya.
  const onClickCapture = (e) => {
    if (seret.current.jarak > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
    seret.current.jarak = 0;
  };

  // Handler biasa, bukan pabrik ber-currying: `setJeda(true)` di JSX akan
  // dieksekusi saat render, dan menyentuh ref saat render itu terlarang.
  const mulaiJeda = () => {
    jeda.current = true;
  };
  const akhiriJeda = () => {
    jeda.current = false;
  };

  const gayaTombol =
    "w-11 h-11 flex items-center justify-center border border-current/30 " +
    "transition-colors hover:bg-sinyal-amber hover:text-aspal-900 " +
    "hover:border-sinyal-amber disabled:opacity-20 " +
    "disabled:hover:bg-transparent disabled:hover:text-current " +
    "disabled:hover:border-current/30 disabled:cursor-default";

  return (
    <div className={className}>
      <div
        ref={trekRef}
        onScroll={perbaruiTombol}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={selesaiSeret}
        onPointerCancel={selesaiSeret}
        onPointerEnter={mulaiJeda}
        onPointerLeave={akhiriJeda}
        onFocusCapture={mulaiJeda}
        onBlurCapture={akhiriJeda}
        onClickCapture={onClickCapture}
        tabIndex={0}
        role="region"
        aria-label={label}
        className={`flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing
                    select-none [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    ${otomatis ? "" : "snap-x snap-mandatory"}`}
      >
        {otomatis ? (
          <>
            <div ref={grupRef} className="flex gap-4 shrink-0">
              {children}
            </div>
            {/* Salinan kedua hanya untuk menutup sambungan secara visual —
                pembaca layar tidak boleh membacakan daftarnya dua kali. */}
            <div className="flex gap-4 shrink-0" aria-hidden="true">
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </div>

      <div className="flex gap-2 mt-8">
        <button
          type="button"
          onClick={() => geser(-1)}
          disabled={!bisaKiri}
          aria-label="Geser ke kiri"
          className={gayaTombol}
        >
          <span aria-hidden="true">&#10094;</span>
        </button>
        <button
          type="button"
          onClick={() => geser(1)}
          disabled={!bisaKanan}
          aria-label="Geser ke kanan"
          className={gayaTombol}
        >
          <span aria-hidden="true">&#10095;</span>
        </button>
      </div>
    </div>
  );
}
