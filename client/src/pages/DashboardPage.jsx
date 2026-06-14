import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardStats from "../components/dashboard/DashboardStats";
import CreateUrlCard from "../components/dashboard/CreateUrlCard";
import UrlTable from "../components/dashboard/UrlTable";
import EmptyState from "../components/common/EmptyState";
import BulkUploadCard from "../components/dashboard/BulkUploadCard";
import {
  getUserUrls,
  deleteUrl,
} from "../api/urlApi";

const DashboardPage = () => {
  const [urls, setUrls] =
    useState([]);

  const fetchUrls =
    async () => {
      try {
        const res =
          await getUserUrls();

        setUrls(res.urls);
      } catch {
        toast.error(
          "Failed loading URLs"
        );
      }
    };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleDelete =
    async (id) => {
      try {
        await deleteUrl(id);

        toast.success(
          "Deleted"
        );

        fetchUrls();
      } catch {
        toast.error(
          "Delete failed"
        );
      }
    };

  const handleCopy =
    async (text) => {
      await navigator.clipboard.writeText(
        text
      );

      toast.success(
        "Copied"
      );
    };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="space-y-8 p-8">
          <DashboardStats urls={urls} />
          <CreateUrlCard
            refreshUrls={
              fetchUrls
            }
          />

          <BulkUploadCard
  refreshUrls={fetchUrls}
/>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-xl font-semibold">
              Your URLs
            </h2>

            {
  urls.length === 0 ? (
    <EmptyState />
  ) : (
    <UrlTable
      urls={urls}
      onDelete={handleDelete}
      onCopy={handleCopy}
    />
  )
}

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;