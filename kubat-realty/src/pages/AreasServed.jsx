import React from "react";

export default function AreasPage() {

  const lakesRegion = [
    "Meredith",
    "Laconia",
    "Wolfeboro",
    "Gilford",
    "Alton",
    "Moultonborough",
    "Center Harbor",
    "Tuftonboro"
  ];

  const southernNH = [
    "Derry",
    "Windham",
    "Salem",
    "Londonderry",
    "Hudson",
    "Nashua"
  ];

  const massachusetts = [
    "Methuen",
    "Haverhill",
    "Lawrence",
    "Andover"
  ];

  const renderTownGrid = (towns) =>
    towns.map((town, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow hover:shadow-lg hover:border-[#d4af37] transition cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-[#1e3a5f]">
          {town}
        </h3>
      </div>
    ));

  return (
    <div className="bg-white">

      {/* HEADER */}
      <section className="bg-[#f8f9fb] py-20 text-center">

        <h1 className="text-4xl font-bold text-[#1e3a5f]">
          Areas We Serve
        </h1>

        <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4"></div>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg px-6">
          Kubat Realty proudly serves buyers and sellers throughout New Hampshire's
          Lakes Region, Southern New Hampshire, and parts of Massachusetts.
          Our team has deep knowledge of these communities and can help you
          find the perfect home or successfully sell your property.
        </p>

      </section>


      {/* LAKES REGION */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            New Hampshire Lakes Region
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {renderTownGrid(lakesRegion)}
          </div>

        </div>

      </section>


      {/* SOUTHERN NH */}
      <section className="py-20 bg-[#f8f9fb]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            Southern New Hampshire
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {renderTownGrid(southernNH)}
          </div>

        </div>

      </section>


      {/* MASSACHUSETTS */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            Massachusetts
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {renderTownGrid(massachusetts)}
          </div>

        </div>

      </section>

    </div>
  );
}
