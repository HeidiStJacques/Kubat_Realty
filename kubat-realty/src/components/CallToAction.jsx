import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-[#f8f9fb] py-20">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-[#1e3a5f]">
          Ready to Find Your Dream Home?
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Let Kubat Realty help you navigate the New Hampshire real estate market.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black transition"
          >
            Contact Kubat Realty
          </Link>

          {/* Listings Button */}
          <Link
            to="/current-listings"
            className="border border-[#1e3a5f] text-[#1e3a5f] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition"
          >
            View Listings
          </Link>

        </div>

      </div>

    </section>
  );
}
