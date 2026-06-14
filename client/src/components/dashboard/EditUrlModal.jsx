import { useState } from "react";

const EditUrlModal = ({
  url,
  onClose,
  onSave,
}) => {
  const [originalUrl, setOriginalUrl] =
    useState(url.originalUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-lg rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold">
          Edit URL
        </h2>

        <input
          value={originalUrl}
          onChange={(e) =>
            setOriginalUrl(
              e.target.value
            )
          }
          className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <div className="flex gap-3">

          <button
            onClick={() =>
              onSave(
                url._id,
                originalUrl
              )
            }
            className="rounded-xl bg-indigo-600 px-6 py-3"
          >
            Save
          </button>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-6 py-3"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditUrlModal;