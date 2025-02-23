// components/NavigationLayout.tsx
import Link from 'next/link';
import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationLayoutProps {
  items: NavItem[];
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({ items }) => {
  // Dynamic grid style: gridTemplateRows is set based on the number of items.
  const containerStyle: React.CSSProperties = {
    width: '80vw', // 80% of the viewport width
    margin: '10vh auto', // center horizontally
    display: 'grid',
    gridTemplateRows: `repeat(${items.length}, auto)`, // dynamic number of rows
    gap: '2.5vh', // spacing between grid items
  };

  return (
    <nav style={containerStyle} className = "text-xl">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className = "bg-zinc-500 py-4 p-4 rounded-md">
          <button type="button" style={{ width: '100%', padding: '10px' }}>
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLayout;