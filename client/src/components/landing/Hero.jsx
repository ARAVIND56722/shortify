import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-6xl font-extrabold"
        >
          Shorten.
          <span className="text-indigo-500">
            Track.
          </span>
          Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-xl text-slate-400"
        >
          Modern URL shortening platform with
          analytics, QR codes, custom aliases,
          and powerful insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <button className="rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-indigo-500">
            Start Free
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;