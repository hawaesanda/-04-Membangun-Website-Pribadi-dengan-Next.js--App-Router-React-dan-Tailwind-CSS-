import type {Metadata } from 'next';
import { defaultMetadata } from '@/utils/metadata';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman esai saya.',
  openGraph: {
    title: 'Esai',
    description: 'Halaman esai saya.',
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home({metadata}: any) {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4x1 text-zinc-800">Esai</h1>
      </header>
    </div>
  );
}