import Image from "next/image";
import Link from "next/link";
import Options from './components/options';

const diningHalls = [
  { label: 'Wiley Dining Court', href: '/' },
  { label: 'Windsor Dining Court', href: '/contact' },
  { label: 'Earhart Dining Court', href: '/about' },
  { label: 'Hillenbrand Dining Court', href: '/services' },
  { label: 'Ford Dining Court', href: '/blog' },
];

const resturaunts = [
  { label: 'Connors Cookeria', href: '/' },
];

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
      <Options items={diningHalls} />
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Options items={resturaunts} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
    </>
  );
}

