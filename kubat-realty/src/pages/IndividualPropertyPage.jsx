import { Helmet } from "react-helmet-async";

export default function IndividualPropertyPage() {
  return (
    <div>

      <Helmet>
        <title>NH, MA, ME & FL Realtor | Find Your Next Home</title>

        <meta
          name="description"
          content="Helping buyers and sellers find homes in New Hampshire, Massachusetts, Maine, and Florida. Search homes and connect with an experienced realtor today."
        />

        <meta property="og:title" content="Find Your Next Home" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>Find Your Next Home</h1>

    </div>
  );
}