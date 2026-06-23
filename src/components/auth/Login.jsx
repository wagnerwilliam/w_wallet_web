import Input from "../base/Input";
import Button from "../base/Button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

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
              <UserIcon />
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
              <LockClosedIcon />
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
