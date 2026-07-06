// app/page.tsx
'use client';

// 1. Tambahkan 'Variants' pada baris import
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

// 2. Beri label tipe ': Variants' agar TypeScript tidak protes
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
  return (
    <main className="bg-[#fcf8f2] text-[#1e2d2f] min-h-screen overflow-x-hidden select-none">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-[#e3ede4] to-[#fcf8f2]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 mb-6 relative bg-white rounded-full shadow-lg flex items-center justify-center p-4"
        >
          <span className="text-xs text-gray-400 font-bold">Logo KKN</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a3a2a]"
        >
          KKN CIPEUNDEUY 2026
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-[#5a6e5d] max-w-xl italic"
        >
          {/* 3. Tanda kutip diganti menjadi &quot; */}
          &quot;Dedikasi Nyata untuk Desa Berkelanjutan&quot;
        </motion.p>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-sm text-gray-400"
        >
          Scroll ke bawah ↓
        </motion.div>
      </section>

      {/* 2. PENGENALAN DESA */}
      <section className="min-h-screen flex items-center justify-center p-8 md:p-24">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="bg-[#5a6e5d] h-64 rounded-2xl shadow-md flex items-center justify-center text-white">
            [Foto Desa Cipeundeuy]
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a2a] mb-4">Tentang Desa Cipeundeuy</h2>
            <p className="text-gray-600 leading-relaxed">
              Desa Cipeundeuy terletak di Kabupaten Subang. Desa ini memiliki potensi alam yang melimpah namun menghadapi tantangan dalam pengelolaan lingkungan, khususnya sampah. Website ini hadir sebagai bentuk edukasi dan kolaborasi digital.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. ANGGOTA & DIVISI */}
      <section className="min-h-screen bg-[#e3ede4] py-20 px-8 flex flex-col justify-center items-center">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1a3a2a] mb-12 text-center"
        >
          Tim KKN Berdasarkan Divisi
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {['Divisi Edukasi', 'Divisi Lingkungan', 'Divisi Publikasi & IT'].map((divisi, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-[#1a3a2a] mb-2">{divisi}</h3>
              <p className="text-sm text-gray-500">Bertanggung jawab atas program kerja terkait tema utama desa.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. PORTAL PRODI & EDUKASI SAMPAH */}
      <section className="min-h-screen py-20 px-8 flex flex-col justify-center items-center bg-white">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-bold text-[#1a3a2a] mb-4 text-center"
        >
          Edukasi & Program Kerja Prodi
        </motion.h2>
        <p className="text-gray-500 text-center mb-12 max-w-md">Pilih prodi untuk melihat kontribusi keilmuan kami untuk Desa Cipeundeuy.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
          {['Informatika', 'Hukum', 'PGSD', 'Farmasi', 'Psikologi'].map((prodi, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: '#1a3a2a', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-[#fcf8f2] border border-gray-200 text-[#1a3a2a] font-semibold rounded-2xl shadow-sm transition-all text-center"
            >
              {prodi}
            </motion.button>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/berita">
            <motion.span 
              whileHover={{ x: 5 }}
              className="text-[#5a6e5d] font-bold hover:underline cursor-pointer flex items-center gap-2"
            >
              Lihat Berita Kegiatan KKN →
            </motion.span>
          </Link>
        </div>
      </section>

    </main>
  );
}