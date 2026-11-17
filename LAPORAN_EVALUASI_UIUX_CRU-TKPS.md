# Laporan Evaluasi UI/UX — Landing Page CRU TKPS

**Proyek:** CRU-TKPS (Vue 3 + Vite + Vue Router + Swiper) — `/home/skip/Dev/alzan/CRU-TKPS`
**Evaluator:** UI/UX Designer (agent-11052308-f05b-4c4b-b43d-5d56524ff47a)
**Acuan identitas:** Profile Book CRU TKPS IKA FK UNPAD_RSHS.pdf (28 halaman, 2023, Canva)
**Verifikasi render:** `http://localhost:5173` (dev server), ulasan kode komponen, dan inspeksi gambar aset

---

## 1. Ringkasan Eksekutif

Tampilan landing page CRU TKPS sudah cukup profesional dan konsisten dengan identitas merek CRU dari profile book: palet warna biru `#002D6B` / `#0047A5` dengan aksen kuning `#FFC700`, font Plus Jakarta Sans, pola section seragam, dan layout responsif di semua section. Isi (visi/misi, layanan, fasilitas, riset, mitra, publikasi) sudah representatif terhadap profile book.

Namun, **terdapat beberapa kritikal yang merusak tampilan pertama (first view)**: background hero gagal tampil sama sekali (referensi file `hero-bg-1/2/3.jpg` yang tidak ada), avatar tiga anggota tim featured di beranda gagal muat (`default.png` + path salah), dan carouselfasilitas (Swiper) menunjukkan peringatan komponen Vue yang tidak terdaftar. Rekomendasi utama: perbaikan aset gambar dan path (P0) baru diikuti penyesuaian konten tim/alamat dan pemersihan visual (P1/P2).

---

## 2. Metode dan Ruang Lingkup

- Tinjau kode semua section: Navbar, HeroSection, AboutSection, VisionMissionSection, ServicesSection, FacilitiesSection, HistorySection, ResearchSection, TeamSection, PartnerSection, ContactSection, PublicationSection, Footer, TeamDetail, serta data `ProjectData.js` dan `team.js`.
- Render ulang aplikasi secara lokal (Vite dev) dan inspeksi elemen: status muat gambar, computed style background hero, elemen Swiper, tautan, teks.
- Bandingkan tata letak, tipografi, hirarki, warna, responsivitas, carousel hero, section team, tabel publikasi, dan peta kontak dengan isi profile book.

**Tanggulan:** Evaluasi ini didasarkan pada inspeksi kode dan render desktop (1905×995). Uji pada perangkat nyata (iPad, Android, iPhone) dan uji aksesibilitas (layar pembaca, navigasi keyboard) masih disarankan sebelum rilis.

---

## 3. Konsistensi dengan Profile Book (Identitas Merek)

| Aspek | Profile Book (acuan) | Tampilan Website | Status |
|-------|----------------------|------------------|--------|
| Warna primer | Biru navy tua | `#002D6B` (judul, teks utama, footer) | ✅ Konsisten |
| Warna sekunder | Biru ceruk | `#0047A5` (highlight judul, aksen kartu) | ✅ Konsisten |
| Warna aksen | Kuning emas | `#FFC700` (accent-line, hover, badge spesifikasi) | ✅ Konsisten |
| Font | — | Plus Jakarta Sans (semua section) | ✅ Konsisten |
| Institusi | Dept. Child Health FK UNPAD / RSHS, Divisi Growth & Development – Social Pediatrics | Tercantum di About, Hero, Contact, Footer | ✅ |
| Visi & Misi | ICH-GCP, peningkatan sumber daya manusia, kolaborasi eksternal | VisionMissionSection sesuai | ✅ |
| Layanan | 3 item (riset pertumbuhan, community-based, vaksin clinical trial) | ServicesSection 3 kartu sesuai | ✅ |
| Fasilitas | 2 kulkas (602 L, 684 L) + termometer WiFi logging | FacilitiesSection sesuai | ✅ |
| Riset utama | Trial vaksin COVID-19 Sinovac 2020, kunjungan Presiden, 30+ penelitian sejak 1995 | ResearchSection + HistorySection sesuai | ✅ |
| Tim | Ketua Dr. Eddy Fadlyana; Sekretaris Rodman Tarigan; Bendahara Siti Oktaviani Mawaddah; Koordinator Muhammad Gilang Dwi Putra; Advisor (termasuk Prof. Cissy Kartasasmita) | TeamSection featured hanya 3 nama dengan placeholder; TeamDetail daftar berbeda | ⚠️ Tidak sinkron |
| Kontak | Jl. Pasteur No. 38 Bandung 40161, cru.ika.tkpsrshs@gmail.com | Website tertulis "JI. Eijkman No. 38"; peta menunjuk "Prof. Eyckman No.38" | ⚠️ Perlu verifikasi |

---

## 4. Assessment per Section

### Hero (tampilan pertama)
- **Kekuatan:** Komposisi baik — badge "Clinical Excellence", H1 besar (3.8rem, 800), deskripsi, CTA "Explore Research" dengan scroll halus, navigasi carousel (panah + dots), autoplay 6 detik, overlay kontras, efek zoom background, floating Shape.png.
- **Kekurangan kritikal:** Background gambar slide **tidak tampil sama sekali** — kode meminta `hero-bg-1/2/3.jpg` sedangkan aset yang ada adalah `hero-bg.jpeg`, `hero.jpg`, `hero.png` (terjadi 404 silang pada setiap perpindahan slide). Verifikasi render: `background-image` pada `.slide-image.active` bernilai `null`.
- **Catatan:** `min-height: 700px` + `padding-top: 80px` (navbar fixed) cukup proporsional di desktop.

### About
- Tata letak 2 kolom (teks kanan, logo watermark kiri) rapi, dekorasi shape/glow tidak mengganggu keterbacaan.
- Teks singkat dan padat; tidak ada link "Selengkapnya" untuk sejarah CRU (1995, Eddy Fadlyana, Kusnandi Rusmil) yang sebenarnya ada di profile book — peluang ditambahkan.

### Visi & Misi
- Dua kartu sampingan dengan ikon SVG, daftar misi dengan checklist, hover effect halus. Konsisten dengan pola section lain.

### Services
- 3 kartu layanan dengan ikon, hover lift + border kuning. Grid responsif (3 → 2 → 1 kolom).

### Facilities (carousel Swiper)
- Kartu fasilitas lengkap dengan gambar + spesifikasi teknis (kapasitas 602 L / 684 L, rentang suhu, notifikasi SMS/email) sesuai profile book.
- **Kekurangan:** Peringatan Vue `Failed to resolve component: swiper-container / swiper-slide` → `register()` belum terjamin mengaktifkan elemen custom Swiper secara global; navigasi/pagination carousel berpotensi tidak berfungsi. Gambar memakai path absolut `new URL('/src/assets/images/...', ...)` yang risiko 404 pada build produksi (atau path file salah).

### Research Activity (riwayat penelitian)
- 3 kartu trial aktif dengan sponsor, peserta, durasi, situs, status badge pulse. Desain kartu premium dengan glow indicator saat hover.
- **Kekurangan:** Item tidak punya field `id` → tautan ke `/research-activity/undefined` (rusak).

### Research Projects (portofolio)
- Kartu proyek dengan badge, deskripsi, impact, tabel spesifikasi (sponsor, peserta, durasi, situs), dan tombol unduh publikasi per proyek.
- **Kekurangan:** Tombol unduh mengarah ke `src/assets/pdf/` yang tidak ada (hanya `src/assets/publications/Sinovac-COVID-19.pdf` tersedia) → unduhan gagal 404.
- Navigasi detail menggunakan `window.location.href` (reload halaman) daripada router-link — UX SPA terganggu.

### Team (beranda)
- Grid 3 kartu dengan avatar, orbit ring, hover effect.
- **Kekurangan kritikal:** 3 anggota featured pakai `default.png` dan semua path gambar rusak (avatar tidak muncul); nama masih dummy "Nama Anggota Baru 1/2/3"; role kosong. Tidak mewakili kepemimpinan nyata dari profile book.

### Partners
- Marquee 8 mitra (WHO, Sinovac, Bio Farma, MCRI, Sanofi, Prodia, Zhifei, Minhai) sesuai profile book. Animasi berhenti saat hover.
- Logo partner cukup bervariasi ukuran; tidak ada grup mitra (mis. "Pemerintah / Perguruan Tinggi / Industri") — presentasi datar.

### Contact
- 2 kolom: kartu info (alamat, email mailto) + Google Maps embed berukuran proporsional (min-height 420px desktop, 300px mobile).
- **Kekurangan:** Alamat tertulis "JI. Eijkman No. 38 Bandung 40161" sedangkan profile book: "Jl. Pasteur No. 38 Bandung 40161"; src iframe peta menunjuk "Jl. Prof. Eyckman No.38" — tiga referensi berbeda, perlu disatukan dan divalidasi.
- Tidak ada telepon, jam operasional, atau media sosial.

### Publications (tabel publikasi)
- **Kekuatan:** Tabel lengkap dengan pencarian, filter tahun, kolom No/Tahun/Judul/PI/Sponsor, status badge Ongoing, dan link jurnal eksternal (Lancet ID, NEJM, Elsevier Vaccine) yang terbuka di tab baru. Desain tabel rapi dengan sticky-style header dan hover ringan.

### Navbar & Footer
- Navbar transparan→putih saat scroll, logo UNPAD + CRU, menu Services/Research/Team/Partners/Contact, hamburger menu mobile dengan overlay blur. **Tidak ada tautan About** padahal section About ada; tidak ada tautan Publikase/Home.
- Footer minimalis: nama instansi + copyright 2026 (tahun placeholder), tanpa alamat/email/media sosial. Garis aksen kuning di atas footer baik.

---

## 5. Titik Kekuatan

1. **Identitas visual terjalin:** palet navy/biru/kuning dan Plus Jakarta Sans digunakan konsisten di hampir semua section.
2. **Pola layout seragam:** setiap section pakai header yang sama (sub-title huruf besar, H1 dengan span highlight, garis aksen kuning), sehingga halaman terasa satu kesatuan.
3. **Responsivitas terpikir:** semua section memiliki breakpoint tablet (992px) dan mobile (768px); grid menyesuaikan jumlah kolom.
4. **Hero carousel interaktif:** autoplay, navigasi panah, indikator dot, dan transisi teks fade halus.
5. **Tabel publikasi handal:** pencarian, filter tahun, badge status, dan link jurnal eksternal yang bekerja.
6. **Fasilitas & mitra sesuai profile book:** spesifikasi kulkas/termometer dan daftar 8 partner mencerminkan isi profile book.
7. **CTA jelas di hero:** "Explore Research" mengarahkan pengguna ke konten inti.

---

## 6. Temuan Masalah dan Rekomendasi Perbaikan

### Prioritas P0 — Blokir tampilan (harus diperbaiki sebelum rilis)

| # | Masalah | Lokasi | Rekomendasi perbaikan |
|---|---------|--------|-----------------------|
| P0-1 | Background hero tidak tampil (3 slide meminta `hero-bg-1/2/3.jpg` yang tidak ada) | `HeroSection.vue` (`slides[].image`) | Ganti referensi ke aset yang ada: `hero-bg.jpeg`, `hero.jpg`, `hero.png` (atau rename file agar serempak). Tambahkan `background-color: #00122e` fallback agar hero tidak kosong saat gambar gagal. |
| P0-2 | Avatar featured team tidak muncul (`default.png` tidak ada di `/src/assets/images/`, path absolut salah) | `TeamSection.vue` (`getImageUrl`) | Gunakan path relatif: `new URL('../assets/team/default.png', import.meta.url)` atau `import.meta.glob` seperti `TeamDetail.vue`. Ganti daftar featured dengan anggota asli profile book (lihat P1-3). |
| P0-3 | Carouselfasilitas tidak terdaftar sebagai elemen Vue (peringatan `Failed to resolve component: swiper-container/swiper-slide`) | `FacilitiesSection.vue`, `main.js` | Pindahkan `register()` dari `'swiper/element/bundle'` ke `main.js` (daftar sekali global), atau tambah `compilerOptions.isCustomElement` di vite config; verifikasi navigasi panah + pagination bekerja setelah build. |
| P0-4 | Tautan riwayat riset ke `/research-activity/undefined` (item tanpa `id`) | `HistorySection.vue` | Tambahkan field `id` unik pada setiap item `ongoingResearch`, gunakan sebagai `:key` dan parameter router. |
| P0-5 | Tombol unduh publikasi proyek mengarah ke `src/assets/pdf/` yang tidak ada | `ResearchSection.vue` (`getPdfUrl`) | Buat folder `src/assets/pdf/` dan pindahkan file publikasi di sana, atau arahkan ke `src/assets/publications/`. Sembunyikan tombol jika `link === "#"` atau file tidak tersedia. |

### Prioritas P1 — Konten dan konsistensi merek

| # | Masalah | Lokasi | Rekomendasi perbaikan |
|---|---------|--------|-----------------------|
| P1-1 | Alamat kontak tidak sinkron: website "JI. Eijkman No. 38", peta "Prof. Eyckman No.38", profile book "Jl. Pasteur No. 38 Bandung 40161" | `ContactSection.vue`, iframe Google Maps | Konfirmasi alamat resmi dengan Product Owner, lalu seramkan teks alamat + src iframe ke satu alamat (disarankan mengikuti profile book: Jl. Pasteur No. 38 Bandung 40161). |
| P1-2 | Data tim tidak sesuai profile book: placeholder "Nama Anggota Baru 1/2/3", featured hanya Eddy/Kusnandi/Rodman; TeamDetail daftar lain (tanpa Eddy, Rodman, Gilang, Cissy) | `TeamSection.vue`, `TeamDetail.vue`, `team.js` | Gunakan roster asli profile book: Ketua (Dr. Eddy Fadlyana), Sekretaris (Rodman Tarigan), Bendahara (Siti Oktaviani Mawaddah), Koordinator (Muhammad Gilang Dwi Putra), Advisor (Prof. Cissy Kartasasmita, Prof. Kusnandi Rusmil), serta anggota inti. Seramkan daftar yang sama di TeamSection, TeamDetail, dan team.js; isi `role` dan gunakan foto asli dari `/src/assets/images/team/`. |
| P1-3 | Judul halaman default "cru-tkps", tidak ada meta description / Open Graph | `index.html` | Ganti title menjadi "Clinical Research Unit TKPS – FK Universitas Padjadjaran / RSHS Bandung"; tambahkan `<meta name="description">` dan tag Open Graph untuk sharing media sosial. |
| P1-4 | Warna sub-title tidak seragam: `#0052CC` (Hero, Facilities, Contact, Partner, Publikasi) vs `#FFC700` (About, Services, Vision & Misi, Research) | Semua section (`sub-title`) | Pilih satu warna aksen merek — disarankan `#FFC700` (kuning emas) — dan terapkan konsisten di semua section. |
| P1-5 | Font global (`style.css`/`variables.css`) deklarasikan `Inter`, sementara semua komponen meng-override dengan Plus Jakarta Sans; `@import` Google Fonts duplikat di setiap section (9×) | `style.css`, `variables.css`, setiap ` scoped <style>` | Seramkan font-family ke Plus Jakarta Sans di root (`App.vue` atau `main.css`); hapus duplikasi `@import` per section dan pindahkan ke satu tempat. |

### Prioritas P2 — Rapi visual dan pengalaman pengguna

| # | Rekomendasi | Lokasi |
|---|-------------|--------|
| P2-1 | Optimasi gambar: `dr.swedis.jpeg` berukuran 15 MB / 4000×6000 px; `alzan.png` 243 KB. Kompres, ubah ke WebP, tambahkan `width`/`height` dan `loading="lazy"` | Semua section yang pakai gambar tim |
| P2-2 | TeamDetail tidak ada judul section (H2 dikomentari) — hirarki halaman kurang jelas | `TeamDetail.vue` |
| P2-3 | Tambahkan tautan About di Navbar (section About ada tetapi tidak terjangkau dari menu) | `Navbar.vue` |
| P2-4 | Perbaiki tahun copyright footer (saat ini "2026" placeholder) dan tambahkan alamat/email/media sosial | `Footer.vue` |
| P2-5 | Navigasi detail riset pakai `window.location.href` (reload); ganti dengan `router-link` / `router.push` agar tetap SPA | `ResearchSection.vue` |
| P2-6 | Uji responsif pada perangkat nyata (iPad, Android, iPhone) dan verifikasi hamburger menu, hero `min-height 700px` di mobile, serta carouselfasilitas sentuhan | Seluruh halaman |
| P2-7 | Aksenbilitas: tambahkan indikasi fokus keyboard pada navigasi dan tombol, serta `skip-to-content` | `Navbar.vue`, semua tombol |
| P2-8 | Hapus `style.css` yang tidak terpakai di `main.js` dan warna non-merek di `variables.css` (`#0B1F4D`, `#173F7A`, `#D9B26F`) atau sebaraskan ke palet CRU | `main.js`, `variables.css` |

---

## 7. Rencana Prioritas Tim (Ringkasan)

1. **Minggu 1 (P0):** Perbaiki background hero, path avatar/fasilitas/partner, pendaftaran Swiper, tautan riwayat riset, dan folder unduh publikasi. Setelah ini, tampilan utama sudah utuh.
2. **Minggu 2 (P1):** Sinkronkan alamat kontak dan peta, perbarui data tim dengan roster profile book, perbaiki judul/meta, seramkan warna sub-title dan font.
3. **Minggu 3 (P2):** Optimasi gambar, judul TeamDetail, tautan About di Navbar, footer, navigasi SPA riset, dan uji responsif/aksesibilitas pada perangkat nyata.

---

## 8. Kesimpulan

Landing page CRU TKUX memiliki dasar visual yang baik dan sudah mengikuti identitas merek dari profile book. Masalah utama saat ini adalah **aset gambar yang gagal muat** (hero background dan avatar team) yang merusak first impression, serta beberapa inkonversi konten kecil (alamat, roster tim). Dengan perbaikan P0–P2 di atas, tampilan akan menjadi konsisten, profesional, dan siap di-deploy melalui Docker+Nginx (port 8090) sesuai konfigurasi yang ada.

*Dokumen ini disampaikan ke channel "Dev Team CRU TKPS" untuk diintegrasikan dengan laporan akhir Product Owner.*
