const AnalyticsCards = ({
  analytics,
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-slate-400">
          Total Clicks
        </h3>

        <p className="mt-2 text-4xl font-bold text-cyan-400">
          {
            analytics.totalClicks
          }
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-slate-400">
          Last Visited
        </h3>

        <p className="mt-2">
          {analytics.lastVisited
            ? new Date(
                analytics.lastVisited
              ).toLocaleString()
            : "Never"}
        </p>
      </div>

    </div>
  );
};

export default AnalyticsCards;