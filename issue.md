# Project Setup: ElysiaJS + Drizzle + MySQL with Bun

## Deskripsi
Tugas Anda adalah membuat kerangka project backend baru di dalam direktori ini menggunakan **Bun**. Project ini akan menggunakan **ElysiaJS** sebagai web framework dan **Drizzle ORM** untuk berinteraksi dengan database **MySQL**.

## Kebutuhan (Dependencies)
- **Runtime**: Bun
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM (termasuk Drizzle Kit untuk migrasi)
- **Database Driver**: MySQL2 (atau driver MySQL lain yang direkomendasikan Drizzle)

## Langkah-langkah Implementasi (High-Level)

1. **Inisialisasi Project**
   - Inisialisasi project Bun kosong di direktori saat ini.
   - Siapkan struktur folder standar (misalnya, letakkan kode utama di folder `src/`).

2. **Instalasi Dependensi**
   - Instal package untuk ElysiaJS.
   - Instal package untuk Drizzle ORM dan driver database MySQL.

3. **Konfigurasi Database (Drizzle & MySQL)**
   - Buat skema (schema) database sederhana menggunakan Drizzle.
   - Setup koneksi ke database MySQL menggunakan variabel lingkungan (environment variables via `.env`).
   - Buat file `drizzle.config.ts` untuk memungkinkan eksekusi migrasi menggunakan Drizzle Kit.

4. **Setup Server (ElysiaJS)**
   - Buat file utama (contoh: `src/index.ts`).
   - Inisialisasi instance aplikasi ElysiaJS.
   - Buat sebuah endpoint dasar (contohnya `GET /`) yang mencoba mengambil atau menampilkan data sederhana dari MySQL untuk membuktikan bahwa integrasi database berhasil.

5. **Penyelesaian**
   - Pastikan aplikasi dapat dijalankan menggunakan perintah eksekusi Bun (contoh: `bun run src/index.ts`).
   - Pastikan tidak ada error TypeScript maupun error runtime pada saat server dinyalakan.

## Catatan untuk Implementator
Instruksi di atas bersifat garis besar. Anda bebas menentukan detail penamaan file atau struktur spesifik selama tujuan utama—mengintegrasikan Bun, ElysiaJS, dan Drizzle dengan MySQL—tercapai dengan baik dan berfungsi.
