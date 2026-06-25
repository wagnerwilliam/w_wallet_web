import { Link } from "react-router-dom";

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
