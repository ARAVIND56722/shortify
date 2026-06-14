import {
  LayoutDashboard,
  BarChart3,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="hidden md:block w-72 border-r border-slate-800 bg-slate-950">

      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-400">
          Shortify
        </h1>
      </div>

      <nav className="space-y-2 px-4">

  <Link
    to="/dashboard"
    className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800"
  >
    <LayoutDashboard />
    Dashboard
  </Link>

  <button
    onClick={logout}
    className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-slate-800"
  >
    <LogOut />
    Logout
  </button>

</nav>
    </aside>
  );
};

export default Sidebar;