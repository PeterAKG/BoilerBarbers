// components/NavigationLayout.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  image?: string; // added optional image property
}

interface NavigationLayoutProps {
  items: NavItem[];
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({ items }) => {
  // Dynamic grid style: gridTemplateRows is set based on the number of items.
  const containerStyle: React.CSSProperties = {
    width: "80vw", // 80% of the viewport width
    margin: "10vh auto", // center horizontally
    display: "grid",
    gridTemplateRows: `repeat(${items.length}, auto)`, // dynamic number of rows
    gap: "2.5vh", // spacing between grid items
  };

  return (
    <nav style={containerStyle} className="text-xl text-black font-extrabold">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="py-4 p-4 rounded-md animate-[move-in_2s_ease-out] [animation-fill-mode:backwards]"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <button
            type="button"
            style={{
              display: "block", // ensures the button takes full width and height
              width: "100%",
              padding: "0px",
              height: "100px", // adjust height as needed
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // prevents tiling of the image
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLayout;
