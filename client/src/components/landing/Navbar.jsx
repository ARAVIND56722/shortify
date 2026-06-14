import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-400">
          Shortify
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-indigo-600 px-4 py-2 hover:bg-indigo-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;