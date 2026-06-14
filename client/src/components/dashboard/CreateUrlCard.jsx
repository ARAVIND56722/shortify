import {
  useState,
} from "react";

import toast from "react-hot-toast";

import { createUrl } from "../../api/urlApi";

const CreateUrlCard = ({
  refreshUrls,
}) => {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      originalUrl: "",
      customAlias: "",
      expiryDate: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await createUrl(formData);

      toast.success(
        "Short URL created"
      );

      setFormData({
        originalUrl: "",
        customAlias: "",
        expiryDate: "",
      });

      refreshUrls();
    } catch (error) {
      toast.error(
        error?.response?.data
          ?.message ||
          "Creation failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-6 text-xl font-semibold">
        Create Short URL
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="originalUrl"
          placeholder="Long URL"
          value={
            formData.originalUrl
          }
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <input
          type="text"
          name="customAlias"
          placeholder="Custom Alias (Optional)"
          value={
            formData.customAlias
          }
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <input
          type="date"
          name="expiryDate"
          value={
            formData.expiryDate
          }
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-indigo-600 px-6 py-3 hover:bg-indigo-500"
        >
          {loading
            ? "Creating..."
            : "Generate URL"}
        </button>

      </div>

    </div>
  );
};

export default CreateUrlCard;