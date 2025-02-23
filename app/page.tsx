import Image from "next/image";
import Link from "next/link";
import Options from './components/options';

const diningHalls = [
  { label: 'Wiley Dining Court', href: '/wiley' },
  { label: 'Windsor Dining Court', href: '/windsor' },
  { label: 'Earhart Dining Court', href: '/earhart' },
  { label: 'Hillenbrand Dining Court', href: "/hillenbrand" },
  { label: 'Ford Dining Court', href: '/ford' },
];

const resturaunts = [
  { label: "Panera Bread", href: '/', image: "/panera.png"},
  { label: "Qdoba", href: '/', image: "/qdoba.png"},
  { label: "Freshens", href: '/', image: "/freshens.png" },
  { label: "Shenye @ Harrison Grill", href: '/', image: "/shenye,png"},
  { label: "Scoops + Sweets", href: '/', image: "/scoops.png"},
  { label: "Jersey Mike's", href: '/', image: "/jersey.png"},
  { label: "Chick-Fil-A", href: '/', image: "/chickfila.png"},
  { label: "Famous Frank's at Cary Knight Spot", href: '/', image: "/famousfranks.png"},
  { label: "Saladworks", href: '/', image: "/saladworks.png"},
  { label: "Saxbys", href: '/', image: "/saxbys.png"},
  { label: "Au Bon Pain", href: '/', image: "/aubonpain.png"},
  { label: "Bon-to-Go", href: '/', image: "/bontogo.png"},
  { label: "Aatish at PMU", href: '/', image: "/aatish.png"},
  { label: "Zen at PMU", href: '/', image: "/zen.png"},
  { label: "DSJ Asian Grill", href: '/', image: "/dsjasiangrill.png"},
  { label: "Tenders, Love & Chicken", href: '/', image: "/tenders.png"},
  { label: "Burger + Fries", href: '/', image: "/burgerfries.png"},
  { label: "Sushi Boss at PMU", href: '/', image: "/sushiboss.png"},
  { label: "FoodLab", href: '/', image: "/foodlab.png"},
  { label: "Walk On's Sports Bistreaux at PMU", href: '/', image: "/walkons.png"},
  { label: "Rose Market", href: '/', image: "/rosemarket.png"},
];

export default function Home() {
  return (
    <>

    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen8 pt-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <h2>
          Dining Courts
        </h2>
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start animate-[var(--reveal)]">
        <Options items={diningHalls} />
      </main>
    </div>

    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen8 py-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <h2>
          Resturaunts
        </h2>
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Options items={resturaunts} />
      </main>
    </div>
    </>
  );
}

