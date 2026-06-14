import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

import AnalyticsCards from "../components/dashboard/AnalyticsCards";

import TrendChart from "../components/charts/TrendChart";

import {
  getAnalytics,
  getTrends,
} from "../api/analyticsApi";

const AnalyticsPage = () => {
  const { id } = useParams();

  const [
    analytics,
    setAnalytics,
  ] = useState(null);

  const [trends, setTrends] =
    useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics =
    async () => {
      try {
        const analyticsRes =
          await getAnalytics(
            id
          );

        const trendsRes =
          await getTrends(id);

        setAnalytics(
          analyticsRes.analytics
        );

        setTrends(
          trendsRes.trends
        );
      } catch {
        toast.error(
          "Failed loading analytics"
        );
      }
    };

  if (!analytics)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="space-y-8 p-8">

          <AnalyticsCards
            analytics={
              analytics
            }
          />

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-xl font-semibold">
              Daily Click Trends
            </h2>

            <TrendChart
              data={trends}
            />

          </div>

        </div>

      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

  <h2 className="mb-4 text-xl font-semibold">
    Recent Visit History
  </h2>

  {analytics?.recentVisits?.length > 0 ? (

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b border-slate-700">

            <th className="p-3 text-left">
              Time
            </th>

            <th className="p-3 text-left">
              Browser
            </th>

            <th className="p-3 text-left">
              Device
            </th>

            <th className="p-3 text-left">
              OS
            </th>

          </tr>
        </thead>

        <tbody>

          {analytics.recentVisits
            .slice(0, 20)
            .map((visit) => (

              <tr
                key={visit._id}
                className="border-b border-slate-800"
              >

                <td className="p-3">
                  {new Date(
  visit.timestamp
).toLocaleString()}
                </td>

                <td className="p-3">
                  {visit.browser}
                </td>

                <td className="p-3">
                  {visit.device}
                </td>

                <td className="p-3">
                  {visit.os}
                </td>

              </tr>

            ))}

        </tbody>

      </table>

    </div>

  ) : (

    <p className="text-slate-400">
      No visit history available.
    </p>

  )}

</div>

    </div>
  );
};

export default AnalyticsPage;