import type {Metadata } from 'next';
import { defaultMetadata } from '@/utils/metadata';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8 max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
        <p className="text-zinc-600 mt-2">
          Seorang Mahasiswa Informatika yang bersemangat dalam pengembangan web, desain antarmuka, dan teknologi cerdas.
        </p>
      </header>

      <section className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-zinc-200 shadow-md">
          <Image
            src="/profile.jpg" // Ganti dengan path ke gambar profilmu
            alt="Foto Profil"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-zinc-700 leading-relaxed">
          <p>
            Halo! Saya adalah mahasiswa semester 5 di jurusan Teknik Informatika. Saat ini saya aktif mempelajari pengembangan front-end menggunakan React dan Next.js, serta tertarik pada pengembangan antarmuka pengguna yang intuitif.
          </p>
          <p className="mt-4">
            Di waktu luang, saya senang mengerjakan proyek pribadi, belajar UI/UX design di Figma, dan mengeksplorasi teknologi Internet of Things (IoT).
          </p>
        </div>
      </section>
    </div>
  );
}