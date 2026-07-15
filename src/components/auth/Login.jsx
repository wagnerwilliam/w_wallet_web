import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import sonidoExito from "../../assets/click.mp3";
import AuthContext from "../../context/AuthContext";
import { LoginMutation } from "../../queries/auth";
import Button from "../base/Button";
import Icon from "../base/Icon";
import Input from "../base/Input";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import { loginSchema } from "./ZodSchema";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

/**
 * Componente de inicio de sesión.
 *
 * Permite autenticar al usuario mediante sus credenciales,
 * validar el formulario y redirigir al panel principal
 * cuando la autenticación es exitosa.
 */
const Login = () => {
  const iconClass =
    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0F766E]";
  let { accessToken, login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = LoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data, {
      onSuccess: ({ accessToken }) => {
        login(accessToken);
        toast.success("Has iniciado sesión correctamente.");
        reproducirSonido();
        navigate("/home", {
          replace: true,
        });
      },
      onError: (error) => {
        if (error.details) {
          Object.entries(error.details).forEach(([field, message]) => {
            setError(field, {
              type: "server",
              message,
            });
          });
        }
      },
    });
  };

  return (
    <>
      {accessToken ? (
        <Navigate to="/home" />
      ) : (
        <>
          {/* HEADER */}
          <AuthHeader
            title="Iniciar sesión"
            subtitle="Ingresa tu usuario y tu contraseña"
          />

          {/* FORM */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
            <div className="space-y-2">
              <div className="relative group">
                <Icon icon={UserIcon} className={iconClass} />
                <Input
                  type="text"
                  placeholder="Nombre de usuario"
                  className="px-11"
                  {...register("username")}
                  error={errors.username}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="space-y-2">
              <div className="relative group">
                <Icon icon={LockClosedIcon} className={iconClass} />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="px-11 pr-11"
                  {...register("password")}
                  error={errors.password}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    hover:text-[#0F766E]
                    transition-colors
                  "
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* button */}
            <Button width="w-full" type="submit">
              Iniciar sesión
            </Button>

            {/* footer */}
            <AuthFooter />
          </form>
        </>
      )}
    </>
  );
};

export default Login;
