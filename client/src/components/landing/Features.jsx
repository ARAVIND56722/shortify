import {
  Link,
  QrCode,
  BarChart3,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Link size={32} />,
      title: "Custom Aliases",
    },
    {
      icon: <QrCode size={32} />,
      title: "QR Generation",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Advanced Analytics",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Platform",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2"
            >
              <div className="mb-4 text-indigo-400">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;