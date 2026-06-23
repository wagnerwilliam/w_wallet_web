import Input from "../Input";
import Button from "../Button";

import AuthHeader from "./AuthHeader";

const Login = () => {
  return (
    <div>
      {/* HEADER */}
      <AuthHeader
        title="Iniciar sesión"
        subtitle="Ingresa tu usuario y tu contraseña"
      />

      {/* FORM */}
      <div className="mt-8 space-y-5">
        {/* username */}
        <div className="relative flex items-center group">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-slate-400 group-focus-within:text-[#0F766E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>

          <Input type="text" placeholder="Usuario" px="px-11" />
        </div>

        {/* password */}
        <div className="relative flex items-center group">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-slate-400 group-focus-within:text-[#0F766E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <Input type="password" placeholder="Contraseña" px="px-11" />
        </div>

        {/* button */}
        <Button width="w-full">Iniciar sesión</Button>

        {/* footer */}
        <p className="text-center text-sm text-slate-500 font-sans">
          ¿No tienes cuenta?{" "}
          <a
            className="
            text-[#0F766E]
            font-medium
            hover:text-[#115E59]
            hover:underline
            transition-colors
          "
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
