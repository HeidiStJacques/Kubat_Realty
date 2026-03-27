import { Helmet } from "react-helmet-async";

export default function MEHomesPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <Helmet>
        <title>Homes for Sale in Maine</title>

        <meta
          name="description"
          content="Browse homes for sale across Maine. Connect with an experienced realtor helping buyers and sellers across the state."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Homes for Sale in Maine
      </h1>

      <p>
        Explore available homes throughout Maine. Contact us to schedule
        a showing or learn more about properties in your area.
      </p>

    </div>
  );
}