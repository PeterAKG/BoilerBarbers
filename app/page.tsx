import Image from "next/image";
import Link from "next/link";
import Options from './components/options';

const diningHalls = [
  { label: 'Wiley Dining Court', href: '/wiley', image: '/wiley.jpg'},
  { label: 'Windsor Dining Court', href: '/windsor', image: '/windsor.jpg'},
  { label: 'Earhart Dining Court', href: '/earhart', image: '/earhart.jpg'},
  { label: 'Hillenbrand Dining Court', href: '/hillenbrand', image: '/hillenbrand.jpg'},
  { label: 'Ford Dining Court', href: '/ford', image: '/ford.jpg'},
];

const resturaunts = [
  { label: "Panera Bread", href: '/', image: "/panera.jpg"},
  { label: "Qdoba", href: '/', image: "/qdoba.png"},
  { label: "Freshens", href: '/', image: "/freshens.jpg" },
  { label: "Shenye @ Harrison Grill", href: '/', image: "/shenye.jpg"},
  { label: "Scoops + Sweets", href: '/', image: "/scoops.jpg"},
  { label: "Jersey Mike's", href: '/', image: "/jersey.png"},
  { label: "Chick-Fil-A", href: '/', image: "/chickfila.jpg"},
  { label: "Famous Frank's at Cary Knight Spot", href: '/', image: "/famousfranks.jpg"},
  { label: "Saladworks", href: '/', image: "/saladworks.png"},
  { label: "Saxbys", href: '/', image: "/saxbys.jpg"},
  { label: "Au Bon Pain", href: '/', image: "/aubonpain.jpg"},
  { label: "Aatish at PMU", href: '/', image: "/aatish.jpg"},
  { label: "Zen at PMU", href: '/', image: "/zen.png"},
  { label: "DSJ Asian Grill", href: '/', image: "/dsjasiangrill.png"},
  { label: "Tenders, Love & Chicken", href: '/', image: "/tenders.jpg"},
  { label: "Burger + Fries", href: '/', image: "/burgerfries.jpg"},
  { label: "Sushi Boss at PMU", href: '/', image: "/sushiboss.jpg"},
  { label: "FoodLab", href: '/', image: "/foodlab.jpg"},
  { label: "Walk On's Sports Bistreaux at PMU", href: '/', image: "/walkon.jpg"},
  { label: "Rose Market", href: '/', image: "/rosemarket.jpg"},
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

