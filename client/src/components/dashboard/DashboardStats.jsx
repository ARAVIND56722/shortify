const DashboardStats = ({
  urls,
}) => {
  const totalClicks =
    urls.reduce(
      (sum, url) =>
        sum + url.clickCount,
      0
    );

  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl bg-slate-900 p-6">
        <h3>Total URLs</h3>

        <p className="text-4xl font-bold">
          {urls.length}
        </p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-6">
        <h3>Total Clicks</h3>

        <p className="text-4xl font-bold">
          {totalClicks}
        </p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-6">
        <h3>Active Links</h3>

        <p className="text-4xl font-bold">
          {urls.length}
        </p>
      </div>

    </div>
  );
};

export default DashboardStats;