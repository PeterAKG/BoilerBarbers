export const Header = () => {
    return (
<>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site Header Example</title>

  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@3.2.7/dist/tailwind.min.css"
    rel="stylesheet"
  />
</head>
<body className="bg-gray-100">

  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">

      <div className="text-2xl font-bold text-gray-800">
        MyWebsite
      </div>


      <nav className="hidden space-x-4 md:flex">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
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
    </div>
  </header>

  <main className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Welcome to MyWebsite</h1>
    <p>
      This is just a placeholder for the main content. Resize the browser window
      to see the responsive effect on the header.
    </p>
  </main>
</body>
</>
    );
}