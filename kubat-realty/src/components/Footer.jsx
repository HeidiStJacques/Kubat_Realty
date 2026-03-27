import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Kubat Realty
          </h3>

          <p className="text-gray-300">
            Helping you find your dream home in New Hampshire's Lakes Region.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-400">Navigation</h4>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/buy" className="hover:text-yellow-400 transition">
                Buy
              </Link>
            </li>

            <li>
              <Link to="/sell" className="hover:text-yellow-400 transition">
                Sell
              </Link>
            </li>

            <li>
              <Link to="/current-listings" className="hover:text-yellow-400 transition">
                Listings
              </Link>
            </li>

            <li>
              <Link to="/areas" className="hover:text-yellow-400 transition">
                Areas Served
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-400">Contact</h4>

          <ul className="space-y-2 text-gray-300">
            <li>Phone: (603) 520-6084</li>
            <li>Email: Kubatrealtyllc@gmail.com</li>
            <li>New Hampshire's Lakes Region</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-400">Follow</h4>

          <ul className="space-y-2 text-gray-300">

            <li>
              <a
                href="https://www.facebook.com/KubatRealtyLLC"
                className="hover:text-yellow-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/briantaylor100065/"
                className="hover:text-yellow-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/brian-taylor-925b221b8/"
                className="hover:text-yellow-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Kubat Realty. All rights reserved.
      </div>

    </footer>
  );
}
