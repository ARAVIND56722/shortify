const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4338ca,transparent_40%)]" />

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;