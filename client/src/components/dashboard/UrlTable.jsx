import {
  Copy,
  Trash2,
  BarChart3,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const UrlTable = ({
  urls,
  onDelete,
  onCopy,
}) => {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b border-slate-700">

            <th className="p-4 text-left">
              Original URL
            </th>

            <th className="p-4 text-left">
              Short URL
            </th>

            <th className="p-4 text-left">
  Expiry Date
</th>


            <th className="p-4">
  QR
</th>

            <th className="p-4 text-left">
              Clicks
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {urls.map((url) => (
            <tr
              key={url._id}
              className="border-b border-slate-800"
            >
              <td className="p-4">
                <div className="max-w-xs truncate">
  {url.originalUrl}
</div>
              </td>

              <td className="p-4 text-cyan-400">
                <a
  href={url.shortUrl}
  target="_blank"
  rel="noreferrer"
  className="text-cyan-400 hover:underline"
>
  {url.shortUrl}
</a>
              </td>

              <td className="p-4">
  {url.expiryDate
    ? new Date(
        url.expiryDate
      ).toLocaleDateString()
    : "Never"}
</td>

              <td className="p-4">
  {url.qrCode && (
    <img
      src={url.qrCode}
      alt="QR"
      className="h-16 w-16 rounded-lg"
    />
  )}
</td>

              <td className="p-4">
                {url.clickCount}
              </td>

              <td className="p-4">

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      onCopy(
                        url.shortUrl
                      )
                    }
                  >
                    <Copy size={18} />
                  </button>

                  <Link
  to={`/analytics/${url._id}`}
>
  <BarChart3 size={18} />
</Link>

                  <button
                    onClick={() =>
                      onDelete(
                        url._id
                      )
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default UrlTable;