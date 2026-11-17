# Laporan Akhir Gabungan — Landing Page CRU TKPS

Tim yang terlibat: System Analyst (saya), Product Owner, dan UI/UX Designer.
Acuan: kode di `/home/skip/Dev/alzan/CRU-TKPS` dan attachment `PROFILE BOOK CRU TKPS IKA FK UNPAD_RSHS.pdf` (28 halaman, 2023, Canva).

---

## 1. Pemahaman Proyek

**Stack teknis:** Vue 3 + Vite + Vue Router + Swiper, SPA satu halaman (`HomeView`) dengan 10 section (Navbar, Hero, About, Visi & Misi, Services, Facilities, Research Activity/History, Research Projects, Team, Partners, Contact, Publications, Footer) dan halaman lanjutan `/team`, `/research`, `/research/:id`, `/research-activity/:id`. Data terpusat di `ProjectData.js` (3 proyek) dan `team.js` (5 kepemimpinan). Deployment siap pakai melalui Docker + Nginx (port 8090) dengan `docker-compose.yml`, `Dockerfile`, dan `nginx.conf` yang lengkap.

**Identitas lembaga (dari profile book):** Clinical Research Unit TKPS, Divisi Growth & Development – Social Pediatrics, Dept. Child Health FK Universitas Padjadjaran / Rumah Sakit Hasan Sadikin Bandung. Berdiri 1995, standar ICH-GCP, kontak resmi Jl. Pasteur No. 38 Bandung 40161, cru.ika.tkpsrshs@gmail.com.

---

## 2. Kesimpulan Analisis System Analyst (Kode + Profile Book)

### 2.1 Apa yang sudah sinkron dengan profile book
- Visi & Misi (ICH-GCP, SDM, kolaborasi eksternal) — sesuai section Vision & Mission.
- 3 layanan (riset pertumbuhan anak, community-based, vaksin clinical trial) — sesuai section Services.
- Fasilitas (2 kulkas 602 L & 684 L, termometer WiFi logging) — sesuai section Facilities.
- Riset utama (trial vaksin COVID-19 Sinovac 2020, kunjungan Presiden, 30+ penelitian sejak 1995) — sesuai ResearchSection + HistorySection.
- Kepemimpinan tim (Ketua Eddy Fadlyana, Sekretaris Rodman Tarigan, Bendahara Siti Oktaviani Mawaddah, Koordinator Muhammad Gilang Dwi Putra, Advisor Kusnandi Rusmil & Cissy Kartasasmita) — referensi ada, belum tercantum lengkap di website.
- Partners (WHO, Sinovac, Bio Farma, MCRI, Sanofi, Prodia, Zhifei, Minhai) — sesuai section Partners.
- Publikasi jurnal nyata (Lancet ID, NEJM, Elsevier Vaccine) — sesuai section Publications.

### 2.2 Defek teknis yang ditemukan (perlu diperbaiki)
1. **Hero background tidak tampil:** `HeroSection` memanggil `hero-bg-1/2/3.jpg`; aset yang ada hanya `hero-bg.jpeg`, `hero.jpg`, `hero.png` → area tampilan pertama kosong (404).
2. **Path gambar absolut salah:** `FacilitiesSection` dan `TeamSection` pakai `new URL('/src/assets/images/...', import.meta.url)` → harusnya path relatif (mirip `TeamDetail.vue` yang pakai `import.meta.glob`).
3. **Tautan riwayat riset rusak:** item di `HistorySection` tidak punya field `id` → navigasi ke `/research-activity/undefined`.
4. **Data spesifikasi penelitian kosong:** `ResearchSection` baca kunci huruf besar (`Sponsor`, `Participants`) sedangkan `ProjectData.js` pakai huruf kecil → tabel kosong.
5. **Navigasi detail pakai reload halaman:** `window.location.href` bukan router → UX SPA terganggu.
6. **Link unduhan publikasi rusak:** mengarah ke `src/assets/pdf/` yang tidak ada (hanya `src/assets/publications/Sinovac-COVID-19.pdf`).
7. **Alamat kontak tidak sinkron:** website tertulis "JI. Eijkman No. 38", profile book "Jl. Pasteur No. 38 Bandung 40161", dan src iframe peta menunjuk "Jl. Prof. Eyckman No.38" — tiga referensi berbeda.
8. **Data tim masih placeholder:** `TeamSection` 3 anggota featured pakai nama dummy "Nama Anggota Baru 1/2/3" dan semua avatar `default.png`; `TeamDetail` daftarnya berbeda lagi, tidak mencerminkan roster asli profile book.
9. **Detail minor:** `index.html` judul default "cru-tkps" tanpa meta description/Open Graph; `style.css` diimpor `main.js` tapi tidak digunakan komponen manapun.

---

## 3. Hasil Evaluasi UI/UX (UI/UX Designer)

### 3.1 Kekuatan tampilan
- Identitas visual terjalin: palet navy `#002D6B`, biru `#0047A5`, emas `#FFC700`, dan font Plus Jakarta Konsisten di hampir semua section.
- Pola layout seragam (sub-title huruf besar, H1 dengan span highlight, garis aksen kuning) di setiap section.
- Responsivitas terpikir: breakpoint tablet 992px dan mobile 768px, grid menyesuaikan kolom.
- Hero carousel interaktif: autoplay, panah navigasi, indikator dot, transisi teks fade.
- Tabel publikasi handal: pencarian, filter tahun, badge status Ongoing, link jurnal eksternal.
- Fasilitas & mitra sesuai profile book.
- CTA "Explore Research" jelas di hero.

### 3.2 Masalah kritikal P0 (blokir tampilan pertama)
| # | Masalah | Lokasi | Rekomendasi |
|---|---------|--------|-------------|
| P0-1 | Background hero tidak tampil (`hero-bg-1/2/3.jpg` tidak ada) | `HeroSection.vue` | Ganti ke aset yang ada (`hero-bg.jpeg` dst.), tambahkan fallback warna. |
| P0-2 | Avatar featured team tidak muncul (`default.png` + path absolut salah) | `TeamSection.vue` | Path relatif / `import.meta.glob`, ganti dengan anggota asli. |
| P0-3 | Swiper tidak terdaftar sebagai komponen Vue (peringatan `Failed to resolve component`) | `FacilitiesSection.vue`, `main.js` | Pindahkan `register()` ke `main.js` atau konfigurasikan `isCustomElement`. |
| P0-4 | Tautan riwayat riset ke `/research-activity/undefined` (tanpa `id`) | `HistorySection.vue` | Tambahkan field `id` unik, gunakan sebagai `:key` dan parameter router. |
| P0-5 | Tombol unduh publikasi ke folder `src/assets/pdf/` yang tidak ada | `ResearchSection.vue` | Buat folder `src/assets/pdf/` atau arahkan ke `src/assets/publications/`. |

### 3.3 Masalah P1 (konten dan konsistensi merek)
| # | Masalah | Rekomendasi |
|---|---------|-------------|
| P1-1 | Alamat kontak tidak sinkron (3 referensi berbeda) | Konfirmasi dengan Product Owner, seramkan ke profil book (Jl. Pasteur No. 38 Bandung 40161) + update iframe peta. |
| P1-2 | Data tim tidak sesuai profile book (placeholder, nama dummy, TeamDetail daftar lain) | Gunakan roster asli: Eddy (Ketua), Rodman (Sekretaris), Siti (Bendahara), Gilang (Koordinator), Cissy & Kusnandi (Advisor); isi `role` dan foto asli. |
| P1-3 | Judul default "cru-tkps", tanpa meta description / Open Graph | Ganti title + tambahkan meta description dan OG tag. |
| P1-4 | Warna sub-title tidak seragam (`#0052CC` vs `#FFC700`) | Pilih satu warna merek (disarankan `#FFC700`), terapkan konsisten. |
| P1-5 | Font ganda (`Inter` di root vs `Plus Jakarta Sans` di komponen, `@import` duplikat 9×) | Seramkan ke Plus Jakarta Sans di satu tempat, hapus duplikasi. |

### 3.4 Rekomendasi P2 (rapi visual & UX)
- Optimasi gambar (`dr.swedis.jpeg` 15 MB → kompres/WebP, `loading="lazy"`).
- TeamDetail tambahkan judul section (H2 saat ini dikomentari).
- Tambahkan tautan About di Navbar.
- Perbaiki tahun copyright footer (placeholder 2026) + tambahkan alamat/email/media sosial.
- Navigasi detail riset ganti `window.location.href` → `router-link` / `router.push`.
- Uji responsif pada perangkat nyata (iPad, Android, iPhone) + aksesibilitas (fokus keyboard, skip-to-content).
- Hapus `style.css` yang tidak terpakai dan warna non-merek di `variables.css`.

---

## 4. Temuan Product Owner (ringkasan)
Secara isi website cukup representatif terhadap profile book. Warna merek dan font konsisten. Prioritas perbaikan: (1) gambar hero & path gambar fasilitas/tim, (2) link riwayat penelitian dan unduhan publikasi, (3) sinkronisasi alamat dan data tim, (4) judul/meta dan pembersihan CSS.

---

## 5. Rencana Prioritas Tim (Integrasi)

**Minggu 1 — P0 (blokir tampilan, harus selesai sebelum rilis):**
- Perbaiki background hero ke aset yang ada + fallback warna.
- Perbaiki path avatar dan gambar fasilitas/partner (relatif / `import.meta.glob`).
- Daftarkan Swiper sebagai komponen Vue global; verifikasi navigasi + pagination setelah build.
- Tambahkan `id` unik pada item riset; perbaiki tautan router.
- Buat folder `src/assets/pdf/` atau arahkan link publikasi ke folder yang benar; sembunyikan tombol jika link `#`.

**Minggu 2 — P1 (konten dan konsistensi merek):**
- Seramkan alamat kontak dan peta Google Maps ke Jl. Pasteur No. 38 Bandung 40161 (disarankan mengikuti profile book).
- Perbarui data tim dengan roster asli profile book di `TeamSection`, `TeamDetail`, dan `team.js`; isi `role` dan foto asli.
- Perbaiki judul halaman + meta description / Open Graph.
- Seragamkan warna sub-title dan font ke satu palet serta satu lokasi `@import`.

**Minggu 3 — P2 (rapi visual dan UX):**
- Kompresi gambar tim, tambahkan `loading="lazy"`.
- Tambahkan judul TeamDetail, tautan About di Navbar, perbaiki footer (tahun, alamat, email, sosial media).
- Ganti navigasi detail riset menjadi SPA (`router-link`/`router.push`).
- Uji responsif perangkat nyata dan aksesibilitas (fokus keyboard, skip-to-content).

---

## 6. Kesimpulan

Landing page CRU TKPS memiliki dasar visual yang baik dan sudah mengikuti identitas merek dari profile book. Masalah utama saat ini adalah **aset gambar yang gagal muat** (background hero dan avatar tim) yang merusak first impression, serta inkonversi konten kecil (alamat, roster tim, link publikasi). Setelah perbaikan P0–P2 di atas diselesaikan, tampilan akan konsisten, profesional, dan siap di-deploy melalui Docker+Nginx (port 8090) sesuai konfigurasi yang sudah ada.

Laporan detail UI/UX tersimpan di `/home/skip/Dev/alzan/CRU-TKPS/LAPORAN_EVALUASI_UIUX_CRU-TKPS.md`.
