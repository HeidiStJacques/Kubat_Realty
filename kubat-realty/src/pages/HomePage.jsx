import HeroCarousel from "../components/HeroCarousel";
import CallToAction from "../components/CallToAction";

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <HeroCarousel />

      {/* SEARCH SECTION */}
      <section className="py-12 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8 text-[#1e3a5f]">
            Search Homes in New Hampshire's Lakes Region
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-[#d4af37]"
            />

            <input
              type="text"
              placeholder="Price Range"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-[#d4af37]"
            />

            <input
              type="text"
              placeholder="Beds"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-[#d4af37]"
            />

            <button className="bg-[#1e3a5f] text-white rounded p-3 hover:bg-[#d4af37] hover:text-black transition">
              Search
            </button>

          </div>

        </div>

      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-16 bg-[#f8f9fb]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a5f]">
            Featured Listings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Listing 1 */}
            <div className="bg-white rounded shadow hover:shadow-xl hover:scale-[1.02] transition border-t-4 border-[#d4af37]">

              <img
                src="/images/house1.jpg"
                alt="3 bedroom home for sale in Derry New Hampshire"
                className="w-full h-56 object-cover rounded-t"
              />

              <div className="p-4">

                <h3 className="text-xl font-semibold text-[#1e3a5f]">
                  $450,000
                </h3>

                <p className="text-gray-600 mt-2">
                  3 Bed • 2 Bath
                </p>

                <p className="text-gray-500">
                  Derry, NH
                </p>

              </div>

            </div>

            {/* Listing 2 */}
            <div className="bg-white rounded shadow hover:shadow-xl hover:scale-[1.02] transition border-t-4 border-[#d4af37]">

              <img
                src="/images/house2.jpg"
                alt="4 bedroom home for sale in Windham New Hampshire"
                className="w-full h-56 object-cover rounded-t"
              />

              <div className="p-4">

                <h3 className="text-xl font-semibold text-[#1e3a5f]">
                  $525,000
                </h3>

                <p className="text-gray-600 mt-2">
                  4 Bed • 3 Bath
                </p>

                <p className="text-gray-500">
                  Windham, NH
                </p>

              </div>

            </div>

            {/* Listing 3 */}
            <div className="bg-white rounded shadow hover:shadow-xl hover:scale-[1.02] transition border-t-4 border-[#d4af37]">

              <img
                src="/images/house3.jpg"
                alt="3 bedroom home for sale in Salem New Hampshire"
                className="w-full h-56 object-cover rounded-t"
              />

              <div className="p-4">

                <h3 className="text-xl font-semibold text-[#1e3a5f]">
                  $389,000
                </h3>

                <p className="text-gray-600 mt-2">
                  3 Bed • 2 Bath
                </p>

                <p className="text-gray-500">
                  Salem, NH
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* AREAS SERVED */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-[#1e3a5f]">
            Areas We Serve
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-lg">

            <div className="p-4 bg-[#f8f9fb] rounded border-t-4 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition">
              New Hampshire
            </div>

            <div className="p-4 bg-[#f8f9fb] rounded border-t-4 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition">
              Massachusetts
            </div>

            <div className="p-4 bg-[#f8f9fb] rounded border-t-4 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition">
              Maine
            </div>

            <div className="p-4 bg-[#f8f9fb] rounded border-t-4 border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition">
              Central Florida
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <CallToAction />

    </div>
  );
}
