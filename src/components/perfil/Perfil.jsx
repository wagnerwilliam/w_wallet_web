import { UserCircleIcon, CameraIcon } from "@heroicons/react/24/outline";
import Input from "../base/Input";
import Label from "../base/Label";
import { DetalleUsuario, EditarUsuarioMutation } from "../../queries/usuarios";
import { profileSchema } from "./ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const Perfil = () => {
  const editarUsuario = EditarUsuarioMutation();
  const { data: usuario = {} } = DetalleUsuario();
  let { full_name, username, email, birth_date, photo } = usuario;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      full_name,
      username,
      email,
      birth_date,
      photo,
    },
  });

  const savePhoto = watch("photo");
  const preview =
    savePhoto instanceof File
      ? URL.createObjectURL(savePhoto)
      : (photo ?? null);

  useEffect(() => {
    if (!usuario) return;

    reset({
      full_name: usuario.full_name ?? "",
      username: usuario.username ?? "",
      email: usuario.email ?? "",
      birth_date: usuario.birth_date ? usuario.birth_date.slice(0, 10) : "",
      photo: null,
    });
  }, [usuario, reset]);

  const onSubmit = (data) => {
    if (!isDirty) return;

    console.log(data.photo);

    const formData = new FormData();

    formData.append("full_name", data.full_name);
    formData.append("birth_date", data.birth_date);

    if (data.photo) {
      formData.append("photo", data.photo);
    }

    editarUsuario.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["usuarios"],
        });
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        {/* HERO */}
        <section className="overflow-hidden rounded-3xl bg-linear-to-r from-teal-700 to-emerald-600 shadow-sm">
          <div className="flex flex-col items-center px-8 py-10 text-center">
            <label className="group relative cursor-pointer">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white/30 bg-white/10">
                {preview ? (
                  <img
                    src={preview}
                    alt="Perfil"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="h-full w-full p-4 text-white/90" />
                )}
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 transition group-hover:bg-black/40">
                <CameraIcon className="h-7 w-7 text-white opacity-0 transition group-hover:opacity-100" />
              </div>
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                {...register("photo")}
                error={errors.photo}
              />
            </label>
            {errors.photo && (
              <div className="mt-4 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm">
                <p className="text-sm font-medium text-white">
                  {errors.photo.message}
                </p>
              </div>
            )}
            <h1 className="mt-5 text-2xl font-semibold text-white">
              {full_name || username}
            </h1>

            <p className="mt-2 text-sm text-teal-100">
              Haz clic sobre la foto para cambiarla.
            </p>
          </div>
        </section>
        {/* CARD */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Información personal
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Actualiza la información de tu perfil.
            </p>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label text="Nombre completo" />
              <Input
                type="text"
                placeholder="Tu nombre"
                {...register("full_name")}
                error={errors.full_name}
              />
              {errors.full_name && (
                <p className="text-xs text-red-500">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label text="Nombre de usuario" />
              <Input value={username ?? ""} disabled readOnly />
            </div>

            <div className="space-y-2">
              <Label text="Correo electrónico" />
              <Input value={email ?? ""} disabled readOnly />
            </div>

            <div className="space-y-2">
              <Label text="Fecha de nacimiento" />
              <Input
                type="date"
                {...register("birth_date")}
                error={errors.birth_date}
              />

              {errors.birth_date && (
                <p className="text-xs text-red-500">
                  {errors.birth_date.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-200 px-6 py-5">
            <button
              type="submit"
              className="w-full rounded-xl bg-teal-700 px-8 py-3 text-sm font-medium text-white transition hover:bg-teal-800 md:w-auto"
            >
              Guardar cambios
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Perfil;
