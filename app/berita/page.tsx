// app/berita/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mendefinisikan tipe data TypeScript untuk Berita
interface Berita {
  id: number;
  title: string;
  content: string;
  image_url: string;
  author: string;
  created_at: string;
}

export default function BeritaPage() {
  const [daftarBerita, setDaftarBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data dari Supabase
  useEffect(() => {
    async function fetchBerita() {
      try {
        const { data, error } = await supabase
          .from('berita')
          .select('*')
          .order('created_at', { ascending: false }); // Urutkan dari yang terbaru

        if (error) throw error;
        setDaftarBerita(data || []);
      } catch (error: any) {
        console.error('Gagal mengambil data berita:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBerita();
  }, []);

  return (
    <main className="bg-[#fcf8f2] min-h-screen p-8 md:p-16 text-[#1e2d2f]">
      <div className="max-w-5xl mx-auto">
        
        {/* Tombol Kembali ke Beranda */}
        <Link href="/">
          <span className="text-sm font-semibold text-[#5a6e5d] hover:underline cursor-pointer transition-all">
            ← Kembali ke Beranda
          </span>
        </Link>

  <div className="mt-8 mb-12 border-b border-gray-200 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1a3a2a] mb-2">
              Kabar KKN Cipeundeuy
            </h1>
            <p className="text-gray-500">Ikuti terus pembaruan kegiatan dan program kerja dari kami.</p>
          </div>

        {/* Kondisi saat Loading */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a2a]"></div>
          </div>
        ) : daftarBerita.length === 0 ? (
          // Jika belum ada data
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500">Belum ada berita yang diterbitkan.</p>
          </div>
        ) : (
          // Grid Daftar Berita
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {daftarBerita.map((berita, index) => (
              <motion.article 
                key={berita.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} // Efek muncul bergantian
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Gambar Berita */}
                <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-400">
                  {berita.image_url ? (
                    <img 
                      src={berita.image_url} 
                      alt={berita.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-sm">Tidak ada gambar</span>
                  )}
                </div>

                {/* Konten Teks */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#5a6e5d] bg-[#e3ede4] px-3 py-1 rounded-full">
                      {berita.author || 'Anonim'}
                    </span>
                    <h2 className="text-xl font-bold text-[#1a3a2a] mt-4 mb-3 line-clamp-2 leading-tight">
                      {berita.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {berita.content}
                    </p>
                  </div>
                  
                  <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-50 font-medium">
                    {new Date(berita.created_at).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}