import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../api/axios";

const BulkUploadCard = ({
  refreshUrls,
}) => {
  const [file, setFile] =
    useState(null);

  const uploadFile =
    async () => {

      if (!file) {
  toast.error("Please select a CSV file");
  return;
}
      try {
        const formData =
          new FormData();

        formData.append(
          "file",
          file
        );

        const token =
          localStorage.getItem(
            "token"
          );

        await api.post(
          "/urls/bulk-upload",
          formData,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Upload successful"
        );

        refreshUrls();
      } 

      catch (error) {
  console.log(error);

  toast.error(
    error?.response?.data?.message ||
    "Upload failed"
  );
}
    };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-6 text-xl font-semibold">
        Bulk Upload
      </h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={uploadFile}
        className="mt-4 rounded-xl bg-indigo-600 px-6 py-3"
      >
        Upload CSV
      </button>

    </div>
  );
};

export default BulkUploadCard;