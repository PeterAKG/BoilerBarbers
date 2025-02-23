import Link from 'next/link'
import Image from 'next/image'
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const Header = () => {
    return (
<>
  <title>BoilerFoods</title>

      <nav className="fixed top-0 left-0 w-full flex justify-evenly items-center p-4 bg-orange-100 shadow-md z-50 text-xl text-stone-950 font-mono">

      <Image
      src="/Logo.png"
      width={200}
      height={300}
      alt="Picture of the author"
    />
      <Link
      href={{
        pathname: '/home',
        query: { name: 'test' },
      }}
    >
      Home
    </Link>
    <Link
      href={{
        pathname: '/about',
        query: { name: 'test' },
      }}
    >
      About
    </Link>
      
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
      </nav>


      <button
        className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </button>


      <button
        className="inline-block md:hidden p-2 rounded text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Toggle Navigation"
      >

        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
</>
    );
}