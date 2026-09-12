function WhatIDo() {
  return (
    <section className="min-h-screen px-6 py-20">
      <h2 className="text-center font-[DM_Sans] text-4xl font-bold">
        What I Do
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">

        {/* Frontend Development */}
        <div className="rounded-2xl border border-gray-700 p-8">
          <h3 className="text-2xl font-semibold">
            Frontend Development
          </h3>

          <p className="mt-4 text-gray-400">
            Building responsive and interactive interface
          </p>
        </div>

        {/* Full-stack Development */}
        <div className="rounded-2xl border border-gray-700 p-8">
          <h3 className="text-2xl font-semibold">
            Full-stack Development
          </h3>
          
          <p className="mt-4 text-gray-400">
            Connecting thoughtful interfaces with functional backend systems.
          </p>
        </div>

        {/* Problem Solving */}
        <div className="rounded-2xl border border-gray-700 p-8">
          <h3 className="text-2xl font-semibold">
            Problem Solving
          </h3>

          <p className="mt-4 text-gray-400">
            Breaking down ideas and turning them into working products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;