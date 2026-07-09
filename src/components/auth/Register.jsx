import Input from "../base/Input";
import Button from "../base/Button";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

import { RegistrarUsuarioMutation } from "../../queries/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./ZodSchema";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Register = () => {
  const regitrarUsuario = RegistrarUsuarioMutation();
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
    regitrarUsuario.mutate(data, {
      onSuccess: () => {
        toast.success(
          "¡Cuenta creada correctamente! Ya puedes iniciar sesión.",
        );
        setTimeout(() => {
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
