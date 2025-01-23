// app/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8 px-6 mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand and Tagline */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white-400">Who Cooks 🍽</h1>
          <p className="text-lg text-yellow-300 mt-2">
            Savor the flavor. Explore the world of food.
          </p>
        </div>

        {/* Navigation Links - Right-aligned on Desktop */}
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ml-auto">
          <Link
            href="/home"
            className="text-lg text-white hover:text-green-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-lg text-white hover:text-green-400 transition duration-300"
          >
            Posts
          </Link>
          <Link
            href="https://www.ubereats.com/?ps=1"
            className="text-lg text-white hover:text-green-400 transition duration-300"
          >
            Order Now
          </Link>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-yellow-300">
          © 2025 Foodie Heaven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
