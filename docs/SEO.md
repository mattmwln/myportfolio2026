# SEO portfolio Rahmat Maulana

## Audit dan sumber fakta

Astro 2.10, React 18 islands (SSR saat build + hydration), Tailwind, Framer Motion;
deployment statis memakai adapter Vercel. Route awal hanya `/` dan `/404`.
Tidak ada backend SEO, admin, auth, lint/test runner, atau manifest PWA.
Manifest tidak diperlukan. Audit awal ini dilanjutkan dengan blog statis; artikel kini memiliki breadcrumb visible dan BreadcrumbList.

Masalah awal: canonical/sitemap/robots/JSON-LD tidak tersedia, metadata sosial
menggunakan gambar LinkedIn dengan parameter kedaluwarsa, favicon duplikat,
`meta title` tidak valid, section Skills/Projects/Design/Footer di luar dokumen,
navigasi react-scroll tanpa href, nested anchor proyek, alt generik, link/telepon
placeholder, tombol CV tanpa file, animasi menyembunyikan konten sebelum hydration.

Sumber identitas:

- Nama: HomeContent.tsx, Footer.astro, README.md.
- Mattmwln: Navbar.tsx, constants/index.ts, package.json, README.md.
- Lulusan Sistem Informasi Universitas Sriwijaya: AboutContent.tsx.
- Web Developer, System Analyst Intern, pengalaman proyek: DataExperience.tsx.
- Palembang: pengalaman magang Kanwil DJBC SUMBAGTIM; lokasi footer Sumatera Selatan.
  Palembang tidak digunakan sebagai alamat rumah atau tempat lahir.
- Desain HIMSI FASILKOM Unsri: DataDesign.tsx; bukan bukti keanggotaan organisasi.
- GitHub/LinkedIn/Instagram: constants/index.ts dan Footer/SocialMedia.tsx.
- Domain https://mattmwln.my.id: README.md.
- Tempat kerja UBP Keramasan, bidang Visualisasi Data: dikonfirmasi langsung oleh pemilik pada update berikutnya; sumber kode bersama di `person.ts` (`currentWork`). Tidak ada tanggal mulai atau jabatan formal yang ditambahkan.

## Konfigurasi

`src/config/site.mjs` menjadi sumber canonical production (HTTPS, non-www, `/`).
Astro `site` memakai nilai yang sama. Metadata mengabaikan query string.
Atur redirect HTTP/www/alias domain ke domain ini di dashboard deployment/DNS.
Jangan mengganti canonical dengan URL localhost atau preview.

`src/data/person.ts` menyimpan nama, alias, deskripsi, alumniOf, dan profil sosial.
Person `/#person`, WebSite `/#website`, ProfilePage `/#profilepage` dihubungkan
dengan @id dalam satu graph pada HTML homepage. ProfilePage sudah merupakan
jenis WebPage; tidak perlu menduplikasi WebPage. Person sekarang memiliki `worksFor`
ke Organization `/#ubp-keramasan` dengan nama UBP Keramasan saja. Bidang Visualisasi
Data ada di `knowsAbout` dan deskripsi; `jobTitle` tidak digunakan karena jabatan formal
belum diberikan. Tidak ada memberOf, alamat pribadi, foto profil, atau tanggal profil
yang disimpulkan. Definisi Person yang sama digunakan kembali di setiap graph
(dengan @id canonical yang sama), bukan author/entity baru untuk setiap artikel.
Person.image dihilangkan karena foto lokal resmi belum ada.

UI hero/footer dan sameAs mengambil URL profil dari sumber yang sama.
Tambahkan profil resmi baru ke `socialProfiles`, kemudian tambahkan ikon UI jika
dibutuhkan. Jangan memasukkan mailto atau URL repository proyek ke sameAs.
Update biography di AboutContent.tsx dan deskripsi person.ts bersama-sama;
pengalaman di DataExperience.tsx; proyek di DataProjects.tsx; desain di DataDesign.tsx.
Email kontak dan email ikon sosial berbeda sejak awal; konfirmasi pilihan pemilik.

`/sitemap.xml` berisi homepage, `/blog/`, dan artikel published dari collection.
INDEXABLE_PATHS hanya memuat route tetap; artikel ditambahkan otomatis. Section #profile,
#experience, #projects bukan halaman terpisah dan tidak masuk sitemap.
Saat menambah route publik, tambahkan ke daftar ini dan beri metadata unik.
`/robots.txt` mengizinkan crawling dan menunjuk sitemap. 404 memakai noindex.
Gambar sharing lokal `/social-preview.png` (1200×630) memakai branding RM;
sumber vector di scripts/social-preview.svg. Regenerasi dengan sharp bila berubah.
Gambar portfolio aktif memakai WebP, lazy loading, dan area/dimensi yang stabil.

## Verifikasi dan deployment

Copy `.env.example` ke `.env` atau isi environment build Vercel:
`GOOGLE_SITE_VERIFICATION` dan opsional `BING_SITE_VERIFICATION`.
Isi hanya content token dari alat webmaster; kosong berarti tag tidak dirender.
Tidak ada token contoh/palsu. Build ulang setelah mengubah nilai.
Domain property Google memerlukan DNS TXT, bukan tag HTML ini.
Tag HTML cocok untuk URL-prefix property https://mattmwln.my.id/.
Environment lokal diabaikan Git; token tidak perlu dicommit.
Preview deployment harus dilindungi/noindex melalui konfigurasi hosting Vercel.

Setelah deploy:

1. Search Console: buat Domain property `mattmwln.my.id`; pasang TXT DNS yang
   diberikan Google lalu Verify. Alternatif: URL-prefix HTTPS + token HTML.
2. Submit `https://mattmwln.my.id/sitemap.xml` pada Sitemaps.
3. URL Inspection homepage: Test live URL; periksa HTTP 200, crawl/index allowance,
   canonical, rendered content, dan structured data.
4. Request indexing homepage. About/Experience/Projects masih section di homepage;
   jangan meminta indexing fragmen URL sebagai halaman lain. Jika ada route baru
   Blog kini memiliki route: inspect/request `/blog/` dan setiap URL artikel canonical.
5. Pantau Pages/Indexing, Sitemaps, Performance query Rahmat Maulana, Mattmwln,
   Unsri, Web Developer, dan query lain yang didukung konten.
6. Bing Webmaster: tambahkan website utama, verifikasi dengan token asli/DNS,
   submit sitemap yang sama.

## Validation

`npm run build` menjalankan astro check + build Vercel static.
`npm run typecheck` memeriksa TypeScript termasuk React.
`npm run validate:seo` membaca `.vercel/output/static` hasil build dan memeriksa
metadata, JSON-LD, schema references, canonical tunggal, heading, link, asset,
sitemap, robots, dan noindex 404. `git diff --check` memeriksa whitespace.
Build output diabaikan untuk perubahan baru; repository awal sudah melacak
beberapa file generated Vercel, jangan mengeditnya sebagai sumber SEO.

Validasi setelah deploy juga di Google Rich Results Test dan validator.schema.org.
Schema valid tidak menjamin ranking, rich result, atau Knowledge Panel.
Audit ini belum menghasilkan pengukuran field LCP/CLS/INP. Uji Lighthouse mobile
dan PageSpeed Insights setelah deploy; pantau Core Web Vitals Search Console.
Font Google memakai preconnect + display=swap. React/Framer Motion dan animasi
canvas tetap memiliki biaya client; tidak ada library SEO tambahan.
EmailJS tetap merupakan layanan pihak ketiga yang sudah ada: konfigurasi origin
allowlist dan anti-abuse di akun pemilik, tanpa mempublikasikan private key.

## MANUAL ACTION REQUIRED

- Pastikan domain README benar-benar production dan redirect HTTPS/non-www aktif.
  Pemeriksaan live domain dari alat browsing tidak berhasil saat audit.
- Periksa LinkedIn dan Instagram yang sudah tercantum: kepemilikan/status publik
  tidak bisa dikonfirmasi melalui alat browsing. GitHub menampilkan Rahmat Maulana.
- UBP Keramasan sudah dikonfirmasi. Tanggal mulai, jabatan formal, status kepegawaian,
  rincian tanggung jawab, URL organisasi, dan perusahaan induk belum diberikan; semuanya
  dihilangkan. IT Support tetap belum didukung data.
- Upload foto profil resmi jika ingin Person.image; file CV publik dan URL proyek
  Al-Faruq belum ada. CTA CV nonfungsional diganti dengan kontak.
- Konfirmasi email kontak utama (dua alamat berbeda sudah ada dalam repository).
- Tinjau kembali status pengalaman bertanggal "Present" dan klaim achievement
  yang sudah ada agar tetap akurat, termasuk Caktadent yang masih bertanda Present.
  Pengalaman diurutkan UBP terbaru, kemudian periode mulai terbaru yang diketahui. PTBA dicatat sebagai konteks proyek Caktadent,
  bukan pemberi kerja langsung dalam schema.
- Tambahkan token verification asli, deploy, submit sitemap, request indexing.
- Periksa tampilan mobile, menu, accordion, form EmailJS, dan CWV di production.

Referensi: [Google ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page),
[Astro site configuration](https://docs.astro.build/en/reference/configuration-reference/).

## Blog

Astro Content Collections bawaan versi 2 digunakan tanpa upgrade framework.
File Markdown berada di `src/content/blog/*.md`, schema di `src/content/config.ts`.
`src/lib/blog.ts` menjadi sumber published listing untuk homepage (maksimal 3),
index, related posts, static routes, sitemap, dan RSS. Artikel dirender menjadi
HTML melalui `post.render()`. Tidak ada database, scraping, atau API sosial.

URL memakai trailing slash sesuai canonical project: `/blog/` dan
`/blog/nama-artikel/`. Slug berasal dari nama file (huruf kecil/kebab-case).
Gunakan file datar, jangan subdirectory; slug `index` tidak boleh dipakai.
Draft tidak memiliki route, bahkan saat development: URL-nya menghasilkan 404
(noindex), bukan preview publik atau fallback homepage. Jangan deploy draft
sebagai tempat menyimpan informasi rahasia; repository/deployment source tetap
memiliki file Markdown. Slug yang tidak ditemukan menghasilkan HTTP 404.

### Membuat artikel

Buat `src/content/blog/nama-artikel.md` dengan template berikut:

```yaml
---
title: Judul tulisan Anda
description: Ringkasan isi tulisan yang natural dan akurat.
publishedAt: 2026-10-02
category: Learning
tags:
  - Sistem Informasi
draft: true
# updatedAt: 2026-10-03
# cover:
#   src: /blog/images/nama-artikel.webp
#   alt: Deskripsi gambar yang sesuai isi gambar.
# sourceUrl: isi URL HTTPS posting asli milik Anda
# sourceLabel: Instagram
---
```

Tambahkan isi Markdown di bawah frontmatter. Mulai heading isi dengan `##`;
judul artikel sudah menjadi H1 dari layout. publishedAt wajib; updatedAt opsional
harus >= publishedAt. Keduanya mendukung tanggal ISO atau timestamp berzona waktu.
UI memakai tanggal Bahasa Indonesia (UTC untuk konsistensi date-only).
Kategori dan tags berasal dari tulisan, tanpa halaman tag/kategori kosong atau
filter client. Semua artikel personal memakai Rahmat Maulana sebagai author.
Related posts dihitung saat build berdasarkan category/tags, maksimal 3.

### Mengembangkan posting sosial

1. Pilih posting Instagram/LinkedIn/GitHub milik Rahmat sendiri; salin URL HTTPS
   posting yang nyata secara manual.
2. Kembangkan isinya menjadi tulisan lengkap dan mandiri di Markdown: konteks,
   penjelasan, dan pelajaran yang memang benar. Jangan hanya memasukkan embed.
3. Isi `sourceUrl` dan `sourceLabel` bersama-sama, misalnya label `Instagram`,
   `LinkedIn`, atau `GitHub`. Posting terkait muncul di akhir artikel sebagai
   external link dengan `noopener noreferrer`, tanpa nofollow.
4. Gunakan gambar lokal yang dimiliki/diizinkan, bukan hotlink gambar Instagram.
5. Tinjau fakta dan privasi, isi tanggal publikasi sebenarnya, ubah `draft: false`,
   lalu build, validate, dan deploy. Tidak ada scraping, token sosial, atau private API.

### Cover dan embed

Simpan cover di `public/blog/images/`. Field cover berisi src dan alt wajib.
Dimensi asli dibaca oleh sharp pada build dan digunakan di HTML/OG untuk
mengurangi layout shift. Gambar harus lokal (WebP/AVIF direkomendasikan; PNG/JPEG
juga didukung). Siapkan maksimal sekitar 1200px dengan kualitas wajar menggunakan
sharp yang sudah tersedia; Astro 2 ini belum memakai Image API Astro versi baru.
Jika tidak ada cover, metadata memakai branding `/social-preview.png`.

Embed bukan requirement. Dukungan opsional video menggunakan field berikut:

```yaml
# embed:
#   url: URL embed YouTube privacy-enhanced atau Vimeo yang nyata
#   title: Judul video yang sesuai
```

Schema hanya mengizinkan `https://www.youtube-nocookie.com/embed/ID` atau
`https://player.vimeo.com/video/ID`. Tidak ada iframe/request pihak ketiga sebelum
klik "Tampilkan"; bila JavaScript dimatikan tersedia link media. Halaman tanpa
embed tidak memerlukan script blog. Instagram/LinkedIn cukup menggunakan
sourceUrl agar konten utama tetap HTML native yang cepat dan dapat diindeks.

### SEO, RSS, dan validasi

SEO.astro menyediakan title/description/canonical/OG/Twitter unik per route.
Index blog memakai CollectionPage + Blog. Artikel memakai WebPage + BlogPosting

- BreadcrumbList dengan breadcrumb visible Home ? Blog ? Judul. Author dan
  publisher menunjuk `https://mattmwln.my.id/#person`, BlogPosting.isPartOf menuju
  `/blog/#blog`. sourceUrl juga masuk isBasedOn, cover menjadi article image.
  Tidak ada meta keywords; keywords structured data hanya memakai tags visible.

Sitemap otomatis memuat artikel non-draft, dengan lastmod updatedAt atau publishedAt.
`/rss.xml` menggunakan RSS 2.0 + Atom self link dan hanya artikel published,
urut tanggal terbaru. RSS discovery tersedia pada homepage, index, dan artikel.
Tidak diperlukan dependency RSS tambahan; XML kecil dihasilkan saat build dan
seluruh nilai konten di-escape. Robots tetap mengizinkan crawling.

Jalankan berurutan:

```sh
npm run typecheck
npm run build
npm run validate:seo
git diff --check
```

Validator kini memeriksa seluruh canonical, title/description/H1, relasi entity,
BlogPosting author, breadcrumb, source links, social image/dimensi, internal links,
sitemap/lastmod, RSS, dan draft yang tidak dihasilkan/disertakan dalam listing.
Jika SEO_BUILD_DIR diisi, validator dapat memeriksa salinan artifact static tertentu.
Deploy lalu submit sitemap yang sama dan inspect homepage, `/blog/`, serta URL
artikel pertama di Search Console. Tidak ada jaminan ranking/Knowledge Panel.

### Pemeriksaan update ini

Build dan validator menguji artikel pengantar serta fixture sementara untuk cover,
source attribution, updatedAt, related posts, escape XML/JSON-LD, dan draft. Fixture
telah dihapus dari source sebelum build final. Chrome headless memeriksa homepage,
blog, dan artikel pada 390px, 820px, dan 1440px; membaca blog tanpa JavaScript;
memeriksa code block/URL panjang; serta HTTP 404 untuk slug tidak ada dan draft.
Embed dicek tidak menghasilkan iframe sebelum klik, lalu muncul setelah klik.
Hydration error navbar dari CSS dalam React diperbaiki dengan stylesheet
`src/styles/navigation.css`; pemeriksaan browser ulang tidak menemukan page error.
File output Vercel yang terlacak sejak awal dikembalikan setelah validasi untuk
menjaga perubahan sumber terpisah dari artifact build. Build ulang sebelum
menjalankan validator default atau deployment lokal.
