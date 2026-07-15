import { Outlet } from "react-router-dom";

/**
 * Layout de autenticación de la aplicación.
 *
 * Define la estructura compartida de las vistas de inicio de sesión
 * y registro, mostrando una sección de branding y un contenedor
 * donde se renderizan las rutas hijas mediante <Outlet />.
 */
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* LEFT - Branding */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0F766E] to-[#115E59]" />

        <div className="relative z-10 flex flex-col justify-center px-20 text-white">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
            Controla tu dinero con precisión
          </h1>

          <p className="mt-6 text-white/80 text-lg max-w-md leading-relaxed">
            Visualiza ingresos, gastos y metas financieras en una sola
            plataforma.
          </p>

          <div className="mt-10 space-y-3 text-white/70 text-sm">
            <p>✓ Seguimiento en tiempo real</p>
            <p>✓ Reportes inteligentes</p>
            <p>✓ Seguridad bancaria</p>
          </div>
        </div>

        {/* decor */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-soft px-8 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
