import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-md">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
      Kubat Realty
    </Link>

    <div className="flex items-center space-x-8 text-sm md:text-base font-medium">

      <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
      <Link to="/search" className="hover:text-yellow-400 transition">Search Homes</Link>
      <Link to="/current-listings" className="hover:text-yellow-400 transition">Current Listings</Link>
      <Link to="/buy" className="hover:text-yellow-400 transition">Buy</Link>
      <Link to="/sell" className="hover:text-yellow-400 transition">Sell</Link>
      <Link to="/areas" className="hover:text-yellow-400 transition">Areas Served</Link>
      <Link to="/about" className="hover:text-yellow-400 transition">About</Link>

      <Link
        to="/contact"
        className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Contact
      </Link>

    </div>

  </div>

</nav>

  );
}
