import { Link } from "react-router-dom";

/**
 * Pie de página reutilizable para las vistas de autenticación.
 *
 * Muestra un mensaje con un enlace de navegación entre las
 * pantallas de inicio de sesión y registro.
 */
const AuthFooter = ({
  text = "¿No tienes cuenta?",
  linkText = "Regístrate",
  to = "/register",
}) => {
  return (
    <p className="text-center text-sm text-slate-500 font-sans">
      {text}{" "}
      <Link
        to={to}
        className="
                text-[#0F766E]
                font-medium
                hover:text-[#115E59]
                hover:underline
                transition-colors
            "
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
