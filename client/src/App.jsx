import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import PublicStatsPage from "./pages/PublicStatsPage";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        <Route
          path="/stats/:shortCode"
          element={<PublicStatsPage />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics/:id"
          element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;