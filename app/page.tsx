// app/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { title } from 'process';
import { useState } from 'react';

// Variasi animasi untuk efek transisi halus saat scroll
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  // --- LOGIKA CAROUSEL DIVISI ---
  const [divisiIndex, setDivisiIndex] = useState(0);

  const divisiData = [
    { id: 0, title: 'Ketua', img: '/ketua.jpg', desc: 'ketua' },
    { id: 1, title: 'Wakil', img: '/wakil.jpg', desc: 'Wakil' },
    { id: 2, title: 'Sekertaris', img: '/sekertaris.jpg', desc: 'laporan' },
    { id: 3, title: 'Bendahara', img: '/bendahara.jpg', desc: 'Duit' },
    { id: 4, title: 'Divisi Acara', img: '/divisi-acara.jpg', desc: 'Merancang dan mengeksekusi kegiatan/lomba utama di desa.' },
    { id: 5, title: 'Divisi PDD', img: '/divisi-PDD.jpg', desc: 'Membuat konten'},
    { id: 6, title: 'Divisi Humas', img: '/divisi-Humas.jpg', desc: 'Sosialisasi Dengan masyarakat'},
    { id: 7, title: 'Divisi Konsumsi', img: '/divisi-konsumsi.jpg', desc: 'buat Makan'},
    { id: 8, title: 'Divisi Logistik', img: '/divisi-Logistik.jpg', desc: 'kuli'},
  ];

  const nextDivisi = () => setDivisiIndex((prev) => (prev + 1) % divisiData.length);
  const prevDivisi = () => setDivisiIndex((prev) => (prev - 1 + divisiData.length) % divisiData.length);
  // ------------------------------

  // --- DATA PRODI ---
  const prodiData = [
    { name: 'Psikologi', img: '/prodi-psikologi.jpg' },
    { name: 'Farmasi', img: '/prodi-farmasi.jpg' },
    { name: 'PGSD', img: '/prodi-pgsd.jpg' },
    { name: 'Hukum', img: '/prodi-hukum.jpg' },
  ];
  // ------------------------------

  return (
    <main className="bg-[#fcf8f2] text-[#1e2d2f] min-h-screen overflow-x-hidden select-none">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/kantordesa.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0d211c]/70 z-0"></div>

        <div className="z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-48 h-48 mb-8 relative rounded-full shadow-2xl flex items-center justify-center p-2 bg-[#fcf8f2] border-4 border-[#5a6e5d]"
          >
            <img 
              src="/Logo KKN Cipeundeuy.jpeg" 
              alt="Logo KKN Cipeundeuy" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg"
          >
            KKN Desa Cipeundeuy 2026
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-[#e3ede4] max-w-2xl font-medium drop-shadow-md"
          >
            Desa yang bersih, sejahtera, dan berkelanjutan
          </motion.p>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-sm text-[#e3ede4] z-10 opacity-70"
        >
          Scroll ke bawah ↓
        </motion.div>
      </section>

      {/* 2. PENGENALAN DESA */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-24 bg-[#fcf8f2]">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <div className="relative w-full h-[350px] md:h-[500px]">
            <img 
              src="/kantordesa.jpg" 
              alt="Desa Cipeundeuy" 
              className="w-full h-full object-cover rounded-3xl md:rounded-none md:rounded-l-3xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>

          <div className="flex flex-col justify-center px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3a2a] mb-6">
              Desa Cipeundeuy
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                Cipeundeuy merupakan sebuah wilayah dataran rendah yang terletak di Kabupaten Subang, Jawa Barat, berada pada ketinggian 45-50 meter di atas permukaan laut. 
              </p>
              <p>
                Wilayah ini memiliki denyut aktivitas ekonomi yang hidup dan terpusat di sekitar Pasar Cipeundeuy. Dengan tata letak yang strategis, Cipeundeuy tidak hanya menjadi pusat layanan masyarakat yang sibuk, tetapi juga berjarak cukup dekat dengan berbagai destinasi wisata keluarga di kawasan sekitarnya.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. DIVISI KKN (3D Coverflow Carousel) */}
      <section className="min-h-screen bg-[#e3ede4] py-20 px-4 flex flex-col justify-center items-center overflow-hidden">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-[#1a3a2a] mb-12 text-center"
        >
          Tim Divisi KKN
        </motion.h2>

        <div className="relative w-full max-w-5xl h-[350px] md:h-[450px] flex justify-center items-center">
          <button 
            onClick={prevDivisi}
            className="absolute left-2 md:left-10 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex justify-center items-center text-gray-800 hover:bg-white transition-all hover:scale-110"
          >
            &#10094;
          </button>

          <div className="relative w-full h-full flex justify-center items-center">
            {divisiData.map((divisi, index) => {
              let diff = index - divisiIndex;
              if (diff < -2) diff += divisiData.length;
              if (diff > 2) diff -= divisiData.length;

              const isCenter = diff === 0;
              const xPos = diff * (typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 220);
              const scale = isCenter ? 1 : 0.75;
              const zIndex = isCenter ? 20 : 10 - Math.abs(diff);
              const opacity = Math.abs(diff) <= 1 ? (isCenter ? 1 : 0.4) : 0;
              const blur = isCenter ? '0px' : '8px';

              return (
                <motion.div
                  key={divisi.id}
                  initial={false}
                  animate={{ x: xPos, scale: scale, zIndex: zIndex, opacity: opacity, filter: `blur(${blur})` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute w-64 h-80 md:w-80 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-[#5a6e5d] flex items-center justify-center cursor-pointer"
                  onClick={() => setDivisiIndex(index)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <span className="text-2xl font-bold opacity-50 mb-2">Foto</span>
                    <span className="text-3xl font-extrabold">{divisi.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={nextDivisi}
            className="absolute right-2 md:right-10 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex justify-center items-center text-gray-800 hover:bg-white transition-all hover:scale-110"
          >
            &#10095;
          </button>
        </div>

        <motion.div 
          key={divisiIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 text-center z-20 px-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a2a] mb-2">
            {divisiData[divisiIndex].title}
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto font-medium">
            {divisiData[divisiIndex].desc}
          </p>
        </motion.div>
      </section>

      {/* 4. PORTAL PRODI & EDUKASI SAMPAH (Desain Card Portrait) */}
      <section className="min-h-screen py-20 px-4 md:px-8 flex flex-col justify-center items-center bg-white">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-5xl font-extrabold text-[#1a3a2a] mb-4 text-center"
        >
          Edukasi & Program Kerja Prodi
        </motion.h2>
        <p className="text-gray-500 text-center mb-16 max-w-md text-lg">
          Pilih prodi untuk melihat kontribusi keilmuan kami untuk Desa Cipeundeuy.
        </p>

        {/* Kontainer Grid Kartu Prodi */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-7xl w-full">
          {prodiData.map((prodi, index) => (
            <motion.div
              key={index}
              // Ini efek pop-up saat disentuh mouse
              whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
              className="relative w-[45%] sm:w-48 md:w-56 h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg cursor-pointer group bg-gray-200"
            >
              {/* Layer 1: Background Image (sementara warna abu-abu sebelum foto asli dimasukkan) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${prodi.img}')` }}
              />
              
              {/* Layer 2: Overlay redup 40% (bg-black/40). Semakin redup jika di-hover (bg-black/20) */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

              {/* Layer 3: Teks Prodi di bagian bawah */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
                <span className="text-white font-extrabold text-xl md:text-2xl tracking-wide drop-shadow-md">
                  {prodi.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <Link href="/berita">
            <motion.span 
              whileHover={{ x: 5 }}
              className="px-8 py-4 bg-[#1a3a2a] text-white rounded-full font-bold shadow-lg hover:bg-[#0d211c] cursor-pointer flex items-center gap-3 transition-colors"
            >
              Lihat Berita Kegiatan KKN &rarr;
            </motion.span>
          </Link>
        </div>
      </section>

    </main>
  );
}