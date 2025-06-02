import type {Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../public/images/project-1.jpg';
import image2 from '../../../public/images/project-2.png';

export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Halaman proyek saya..',
  openGraph: {
    title: 'Proyek',
    description: 'Halaman proyek saya.',
  },
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={imageSrc} alt={name} />
          <div className="font-bold text-xl mb-2">

          </div>
        </div>
      </a>
    </li>
  )
}

export default function Home(){
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4x1 text-zinc-800">Proyek</h1>
      </header>
    </div>
  );
}