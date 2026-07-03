import Input from "../base/Input";
import Button from "../base/Button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Icon from "../base/Icon";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { LoginMutation } from "../../queries/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "./ZodSchema";

import toast from "react-hot-toast";

const Login = () => {
  const iconClass =
    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0F766E]";
  let { accessToken, login } = useContext(AuthContext);

  const Login = LoginMutation();
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
    Login.mutate(data, {
      onSuccess: ({ accessToken }) => {
        login(accessToken);
        toast.success("Has iniciado sesión correctamente.");
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
                  type="password"
                  placeholder="Contraseña"
                  className="px-11"
                  {...register("password")}
                  error={errors.password}
                />
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
