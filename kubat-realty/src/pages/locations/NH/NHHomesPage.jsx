import { Helmet } from "react-helmet-async";

export default function NHHomesPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <Helmet>
        <title>Homes for Sale in New Hampshire</title>

        <meta
          name="description"
          content="Browse homes for sale across New Hampshire. Connect with an experienced realtor helping buyers and sellers across the state."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Homes for Sale in New Hampshire
      </h1>

      <p>
        Explore available homes throughout New Hampshire. Contact us to schedule
        a showing or learn more about properties in your area.
      </p>

    </div>
  );
}