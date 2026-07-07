import Input from "../base/Input";
import Label from "../base/Label";
import { DetalleUsuarioMutation } from "../../queries/usuarios";
import { EditarUsuarioMutation } from "../../queries/usuarios";
import { profileSchema } from "./ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

const Perfil = () => {
  const editarUsuario = EditarUsuarioMutation();
  const { data: usuario = {}, isLoading, error } = DetalleUsuarioMutation();
  let { username, full_name, birth_date, email } = usuario;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      username,
      full_name,
      birth_date,
      email,
    },
  });

  const onSubmit = (data) => {
    if (!isDirty) return;

    editarUsuario.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-linear-to-r from-teal-700 to-emerald-600 text-white shadow-sm">
        <div className="flex flex-col items-center gap-5 px-6 py-8 text-center sm:flex-row sm:items-center sm:text-left">

          <div className="flex-1">
            <h1 className="text-2xl font-semibold">
              {usuario.full_name ? usuario.full_name : usuario.username}
            </h1>

            <p className="mt-1 text-sm text-teal-100">
              Administra la información de tu cuenta.
            </p>
          </div>

          {/* <button className="rounded-xl bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/25">
            <PencilSquareIcon className="mr-2 inline h-4 w-4" />
            Editar
          </button> */}
        </div>
      </section>

      {/* Datos */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Información personal
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Estos datos solo son visibles para ti.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label text="Nombre completo" />
              <Input
                type="text"
                placeholder="Tu nombre"
                defaultValue={usuario.full_name ?? ""}
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
                type="text"
                defaultValue={usuario.username ?? ""}
                disabled
                readOnly
              />
            </div>

            <div className="space-y-2">
              <Label text="Correo electrónico" />
              <Input
                type="email"
                defaultValue={usuario.email ?? ""}
                disabled
                readOnly
              />
            </div>

            <div className="space-y-2">
              <Label text="Fecha de nacimiento" />
              <Input
                type="date"
                defaultValue={
                  usuario.birth_date ? usuario.birth_date.slice(0, 10) : ""
                }
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

          <div className="border-t border-slate-200 px-6 py-5">
            <button className="w-full rounded-xl bg-teal-700 py-3 text-sm font-medium text-white transition hover:bg-teal-800 md:w-auto md:px-8">
              Guardar cambios
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Perfil;
