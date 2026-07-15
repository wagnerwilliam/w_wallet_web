import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import sonidoExito from "../../assets/click.mp3";
import AuthContext from "../../context/AuthContext";
import { RegistrarUsuarioMutation } from "../../queries/auth";
import Button from "../base/Button";
import Input from "../base/Input";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import { registerSchema } from "./ZodSchema";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

/**
 * Vista de registro de usuarios.
 *
 * Permite crear una nueva cuenta, validar los datos del formulario
 * y redirigir al inicio de sesión cuando el registro se completa
 * correctamente.
 */
const Register = () => {
  const registrarUsuarioMutation = RegistrarUsuarioMutation();
  const navigate = useNavigate();
  let { accessToken } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    registrarUsuarioMutation.mutate(data, {
      onSuccess: () => {
        toast.success(
          "¡Cuenta creada correctamente! Ya puedes iniciar sesión.",
        );
        setTimeout(() => {
          reproducirSonido();
          navigate("/login");
        }, 1000);
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
          <AuthHeader
            title="Crear cuenta"
            subtitle="Empieza a controlar tus finanzas"
          />

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* USERNAME */}
            <div className="space-y-1">
              <Input
                type="text"
                placeholder="Nombre de usuario"
                px="px-4"
                {...register("username")}
                error={errors.username}
              />
              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="space-y-1">
              <Input
                type="email"
                placeholder="Correo electrónico"
                px="px-4"
                {...register("email")}
                error={errors.email}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <div className="relative group">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
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

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1">
              <div className="relative group">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar contraseña"
                  {...register("confirm_password")}
                  error={errors.confirm_password}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.confirm_password && (
                <p className="text-xs text-red-500">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <Button width="w-full" type="submit">
              Crear cuenta
            </Button>

            <AuthFooter
              text="¿Ya tienes cuenta?"
              linkText="Inicia sesión"
              to="/login"
            />
          </form>
        </>
      )}
    </>
  );
};

export default Register;
