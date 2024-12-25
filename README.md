# Contoh Proyek Next.js 15

Selamat datang di **Contoh Proyek Next.js 15**! Proyek ini menunjukkan aplikasi fungsional yang memanfaatkan fitur modern dan integrasi menggunakan Next.js 15 beserta alat-alat populer lainnya.

## 🌟 Fitur dan Stack

### Teknologi Utama:
- **Next.js 15** dengan Server Actions dan Mutations
- **TypeScript** untuk pengetikan statis
- **Tailwind CSS** dan **DaisyUI** untuk desain yang responsif dan menarik
- **Formik** untuk pengelolaan formulir
- **React-Toastify** untuk notifikasi yang elegan
- **Axios** untuk permintaan HTTP
- **ESLint** untuk menjaga kualitas kode
- **Next-Intl** untuk internasionalisasi dan lokalisasi

### Fitur yang Diimplementasikan:
1. **Pengambilan Data**
   - Server Actions dan Mutations yang terintegrasi dengan Formik
   - Pengambilan data di Komponen Server dan Komponen Klien

2. **Middleware**
   - Middleware kustom untuk menangani permintaan dan meningkatkan routing Next.js
   - Terintegrasi dengan Next-Intl untuk pengelolaan lokalisasi

3. **Hooks Kustom**
   - `useActionState` untuk mengelola status tindakan secara efisien

## 🚀 Memulai

1. **Kloning repositori**:
   ```bash
   git clone https://github.com/your-username/nextjs15-example.git
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi berjalan.

## 📂 Struktur Folder

```plaintext
├── components    # Komponen UI yang dapat digunakan kembali
├── pages         # Halaman Next.js
├── middleware    # Middleware kustom untuk menangani permintaan
├── hooks         # Hooks kustom (contoh: useActionState)
├── styles        # Gaya Tailwind dan DaisyUI
├── utils         # Fungsi utilitas dan konfigurasi
└── ...
```

## 💡 Contoh Penggunaan

### Pengambilan Data dengan Formik
- Contoh server action dan mutation untuk pengiriman formulir

### Pengambilan Data di Komponen
- Pola pengambilan data di sisi server dan klien

### Middleware
- Middleware kustom menggunakan API Next.js 15 untuk routing lanjutan dan lokalisasi

### useActionState
- Manajemen status yang efisien untuk interaksi pengguna

## 🎯 Berkontribusi

Punya ide untuk fitur atau contoh baru? Jangan ragu untuk berkontribusi!

### Permintaan Fitur atau Contoh
Jika Anda ingin meminta fitur spesifik atau contoh penggunaan Next.js 15, silakan buat issue baru di bagian **[Issues](https://github.com/your-username/nextjs15-example/issues)** di repositori ini.

## 🛠️ Dibangun Dengan

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Formik](https://formik.org/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/)
- [Next-Intl](https://next-intl-docs.vercel.app/)

## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).

---

Selamat membangun dengan **Next.js 15**! 🚀
