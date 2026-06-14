import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import AuthLayout from "../layouts/AuthLayout";
import { signupUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await signupUser(formData);

      login(res.token);

      toast.success(
        "Account created successfully"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 p-4 font-semibold hover:bg-indigo-500"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
};

export default SignupPage;