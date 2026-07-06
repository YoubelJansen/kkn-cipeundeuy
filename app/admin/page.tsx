// app/admin/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  // State untuk menyimpan inputan form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  
  // State untuk status loading dan pesan sukses/error
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fungsi yang dijalankan saat tombol "Unggah Berita" diklik
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman me-refresh
    setIsLoading(true);
    setMessage('');

    try {
      // Mengirim data ke tabel 'berita' di Supabase
      const { error } = await supabase
        .from('berita')
        .insert([
          { 
            title: title, 
            content: content, 
            image_url: imageUrl, 
            author: author 
          }
        ]);

      if (error) throw error;

      // Jika berhasil
      setMessage('✅ Berita berhasil diunggah!');
      
      // Kosongkan form kembali
      setTitle('');
      setContent('');
      setImageUrl('');
      setAuthor('');
      
    } catch (error: any) {
      // Jika gagal
      setMessage(`❌ Gagal mengunggah berita: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#fcf8f2] min-h-screen p-8 flex items-center justify-center text-[#1e2d2f]">
      <div className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-md border border-gray-100">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#1a3a2a]">Dashboard Admin KKN</h1>
          <Link href="/">
            <span className="text-sm text-gray-500 hover:text-[#5a6e5d] hover:underline cursor-pointer">
              Kembali ke Beranda →
            </span>
          </Link>
        </div>

        {message && (
          <div className={`p-4 mb-6 rounded-xl text-sm font-medium ${message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Judul */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Judul Berita</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5a6e5d] bg-gray-50"
              placeholder="Contoh: Sosialisasi Pemilahan Sampah..."
            />
          </div>

          {/* Input Penulis / Divisi */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Penulis / Divisi</label>
            <input 
              type="text" 
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5a6e5d] bg-gray-50"
              placeholder="Contoh: Divisi Lingkungan"
            />
          </div>

          {/* Input URL Gambar */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Link Gambar (URL)</label>
            <input 
              type="url" 
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5a6e5d] bg-gray-50"
              placeholder="https://contoh-gambar.com/foto.jpg"
            />
            <p className="text-xs text-gray-400 mt-1">*Bisa dikosongkan jika tidak ada gambar</p>
          </div>

          {/* Input Isi Konten */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Isi Berita</label>
            <textarea 
              required
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5a6e5d] bg-gray-50 resize-none"
              placeholder="Tulis detail kegiatan di sini..."
            />
          </div>

          {/* Tombol Submit */}
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 mt-4 text-white font-bold rounded-xl transition-all ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1a3a2a] hover:bg-[#5a6e5d] active:scale-95'
            }`}
          >
            {isLoading ? 'Sedang Mengunggah...' : 'Unggah Berita'}
          </button>
        </form>

      </div>
    </main>
  );
}