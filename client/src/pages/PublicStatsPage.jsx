import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getPublicStats,
} from "../api/publicApi";

const PublicStatsPage =
  () => {
    const {
      shortCode,
    } = useParams();

    const [
      data,
      setData,
    ] = useState(null);

    useEffect(() => {
      loadStats();
    }, []);

    const loadStats =
      async () => {
        const res =
          await getPublicStats(
            shortCode
          );

        setData(res.data);
      };

    if (!data)
      return (
        <div className="p-10">
          Loading...
        </div>
      );

    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h1 className="mb-8 text-4xl font-bold">
            Public Stats
          </h1>

          <div className="space-y-4">

            <p>
              <strong>
                Short Code:
              </strong>{" "}
              {
                data.shortCode
              }
            </p>

            <p>
              <strong>
                Clicks:
              </strong>{" "}
              {
                data.clickCount
              }
            </p>

            <p>
              <strong>
                Created:
              </strong>{" "}
              {new Date(
                data.createdAt
              ).toLocaleString()}
            </p>

          </div>

        </div>

      </div>
    );
  };

export default PublicStatsPage;