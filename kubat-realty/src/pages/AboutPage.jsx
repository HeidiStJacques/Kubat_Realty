import CallToAction from "../components/CallToAction";

export default function AboutPage() {
  return (
    <div>

      {/* PAGE HEADER */}
      <section className="bg-gray-100 py-20 text-center">

        <h1 className="text-4xl font-bold">
          About Kubat Realty
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            Kubat Realty works with buyers and sellers throughout New Hampshire, Maine, Massachusetts, and Central Florida.  
            Our team has strong local expertise in New Hampshire's beautiful Lakes Region while also helping clients relocate or invest across multiple states.
          </p>
        </p>

      </section>



      {/* COMPANY INTRO */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/Mason-McCall-Panoramic-Lake.jpg"
            alt="New Hampshire Lakes Region"
            className="rounded-lg shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Local Expertise with Multi-State Reach
            </h2>

            <p className="text-gray-600 mb-4">
            Kubat Realty proudly serves buyers and sellers throughout
            New Hampshire, Maine, Massachusetts, and Central Florida.
            Our team has deep expertise in New Hampshire’s beautiful
            Lakes Region, one of the most desirable places to live and
            invest in New England.
          </p>

          <p className="text-gray-600 mb-4">
          From waterfront homes on Lake Winnipesaukee to charming
          communities throughout the surrounding towns, we guide our
          clients through every step of the real estate process with
          local knowledge, market insight, and personalized service.
          </p>

          <p className="text-gray-600">
          Whether you are searching for your first home, a lakefront
          property, relocating between New England and Florida, or
          preparing to sell your current home, Kubat Realty is here
          to help you achieve your real estate goals.
          </p>

          </div>

        </div>

      </section>



      {/* TEAM SECTION */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* REALTOR 1 */}
            <div className="text-center">
              <img
                src="/images/team/brian-taylor.jpg"
                alt="Broker"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Brian Taylor</h3>
              <p className="text-gray-500 text-sm mb-3">Owner/Broker</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>


            {/* REALTOR 2 */}
            <div className="text-center">
              <img
                src="/images/team/stacy-walsh.jpg"
                alt="Agent"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Stacy Walsh</h3>
              <p className="text-gray-500 text-sm mb-3">Agent</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>


            {/* REALTOR 3 */}
            <div className="text-center">
              <img
                src="/images/team/scott-hanson.jpg"
                alt="Agent"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Scott Hanson</h3>
              <p className="text-gray-500 text-sm mb-3">Agent</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>


            {/* REALTOR 4 */}
            <div className="text-center">
              <img
                src="/images/team/janet-bonnell.jpg"
                alt="Realtor"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Janet Bonnell</h3>
              <p className="text-gray-500 text-sm mb-3">Agent</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>


            {/* REALTOR 5 */}
            <div className="text-center">
              <img
                src="/images/team/jackie-caggiano.jpg"
                alt="Realtor"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jackie Caggiano</h3>
              <p className="text-gray-500 text-sm mb-3">Agent</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>


            {/* REALTOR 6 */}
            <div className="text-center">
              <img
                src="/images/team/clifford-senter-jr.jpg"
                alt="Realtor"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Clifford Senter Jr</h3>
              <p className="text-gray-500 text-sm mb-3">Agent</p>
              <p className="text-gray-600 text-sm">
                Short bio about the realtor goes here.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* WHY WORK WITH US */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Why Work With Kubat Realty
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Local Knowledge
              </h3>
              <p className="text-gray-600">
                Our team understands the real estate market and the communities that make their area special.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                We take the time to understand your goals and guide
                you through every step of the buying or selling process.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Trusted Guidance
              </h3>
              <p className="text-gray-600">
                Honest advice and clear communication help you make
                confident real estate decisions.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* CALL TO ACTION */}
      <CallToAction />

    </div>
  );
}