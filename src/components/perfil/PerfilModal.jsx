import { UserCircleIcon, CameraIcon } from "@heroicons/react/24/outline";

import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";

import { profileSchema } from "./ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { EditarUsuarioMutation } from "../../queries/usuarios";
import toast from "react-hot-toast";

const PerfilModal = ({ closeModal, usuario }) => {
  let { full_name, username, email, birth_date, photo } = usuario;
  const editarUsuario = EditarUsuarioMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      full_name,
      username,
      email,
      birth_date: birth_date ? birth_date.slice(0, 10) : "",
      photo,
    },
  });

  const savePhoto = watch("photo");
  const preview =
    savePhoto instanceof FileList && savePhoto.length > 0
      ? URL.createObjectURL(savePhoto[0])
      : (usuario.photo ?? null);

  const onSubmit = (data) => {
    const hasChanges =
      dirtyFields.full_name || dirtyFields.birth_date || dirtyFields.photo;

    if (!hasChanges) return;

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
        toast.success("Perfil actualizado correctamente.");
        closeModal();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKDROP */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      {/* MODAL */}
      <div
        className="
          relative
          w-full
          max-w-lg
          sm:max-w-xl
          lg:max-w-2xl

          max-h-[95vh]
          overflow-y-auto

          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div className="border-b border-slate-200 px-5 py-5 sm:px-8 sm:py-6">
          <h2 className="text-xl font-semibold text-slate-900">Mi perfil</h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza tu información personal y tu fotografía.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* FOTO */}
          <div className="flex flex-col items-center border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-8">
            <label className="group relative cursor-pointer">
              <div
                className="
                  flex
                  h-24
                  w-24
                  sm:h-32
                  sm:w-32
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-4
                  border-slate-200
                  bg-slate-100
                  transition
                  group-hover:border-teal-600
                "
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Perfil"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="h-16 w-16 sm:h-20 sm:w-20 text-slate-400" />
                )}
              </div>

              <div
                className="
                  absolute
                  bottom-1
                  right-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-teal-700
                  text-white
                  shadow-lg
                  transition
                  group-hover:scale-110
                "
              >
                <CameraIcon className="h-5 w-5" />
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
              <div className="mt-3 max-w-xs rounded-lg bg-red-50 px-4 py-2">
                <p className="text-center text-xs font-medium text-red-600">
                  {errors.photo.message}
                </p>
              </div>
            )}

            <p className="mt-4 text-sm font-medium text-slate-700">
              Cambiar fotografía
            </p>

            <p className="mt-1 text-xs text-slate-500">
              JPG, PNG o WEBP • Máximo 2 MB
            </p>
          </div>

          {/* FORM */}
          <div className="grid gap-5 p-5 sm:p-8 md:grid-cols-2">
            <div className="space-y-2">
              <Label text="Nombre completo" />
              <Input
                placeholder="Nombre completo"
                variant="filled"
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
              <Input
                {...register("username")}
                error={errors.username}
                disabled
                readOnly
                variant="filled"
              />
            </div>

            <div className="space-y-2">
              <Label text="Correo electrónico" />
              <Input
                {...register("email")}
                error={errors.email}
                disabled
                readOnly
                variant="filled"
              />
            </div>

            <div className="space-y-2">
              <Label text="Fecha de nacimiento" />
              <Input
                type="date"
                variant="filled"
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

          {/* ACTIONS */}
          <div
            className="flex
              flex-col-reverse
              gap-3

              sm:flex-row
              sm:justify-end

              border-t
              border-slate-200

              px-5
              py-5

              sm:px-8"
          >
            <Button variant="ghost" type="button" onClick={closeModal}>
              Cancelar
            </Button>

            <Button type="submit" variant="primary">
              Guardar cambios
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PerfilModal;
