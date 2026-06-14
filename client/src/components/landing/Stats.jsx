const Stats = () => {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-4xl font-bold text-cyan-400">
            10K+
          </h2>
          <p className="mt-2 text-slate-400">
            URLs Shortened
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-400">
            500K+
          </h2>
          <p className="mt-2 text-slate-400">
            Clicks Tracked
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-4xl font-bold text-purple-400">
            99.9%
          </h2>
          <p className="mt-2 text-slate-400">
            Reliability
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;