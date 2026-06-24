const AuthFooter = ({
  text = "¿No tienes cuenta?",
  linkText = "Regístrate",
}) => {
  return (
    <p className="text-center text-sm text-slate-500 font-sans">
      {text}{" "}
      <a
        className="
                text-[#0F766E]
                font-medium
                hover:text-[#115E59]
                hover:underline
                transition-colors
            "
      >
        {linkText}
      </a>
    </p>
  );
};

export default AuthFooter;
