import Image from "next/image";
import Link from "next/link";
import Options from './components/options';

const diningHalls = [
  { label: 'Wiley Dining Court', href: '/Wiley' },
  { label: 'Windsor Dining Court', href: '/Windsor' },
  { label: 'Earhart Dining Court', href: '/Earhart' },
  { label: 'Hillenbrand Dining Court', href: '/Hillenbrand' },
  { label: 'Ford Dining Court', href: '/Ford' },
];

const resturaunts = [
  { label: 'Connors Cookeria', href: '/' },
];

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen8 py-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <h2>
        Dining Courts
        </h2>
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Options items={diningHalls} />
      </main>

      <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
      <h2>
        Resturaunts
      </h2>
      </main>

      <main className="flex flex-col gap-8 row-start-4 items-center sm:items-start">
      <Options items={resturaunts} />
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
    </>
  );
}

