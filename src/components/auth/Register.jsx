import Input from "../base/Input";
import Button from "../base/Button";
import AuthHeader from "./AuthHeader";

const Register = () => {
  return (
    <div>
      <AuthHeader
        title="Crear cuenta"
        subtitle="Empieza a controlar tus finanzas"
      />
      <div className="mt-8 space-y-5">
        <Input type="text" placeholder="Usuario" px="px-4" />
        <Input type="email" placeholder="Correo electrónico" px="px-4" />
        <Input type="password" placeholder="Contraseña" px="px-4" />
        <Input type="password" placeholder="Confirmar contraseña" px="px-4" />

        <Button width="w-full">Crear cuenta</Button>

        {/* esto puede ser un componente. */}
        <p className="text-center text-sm text-slate-500 font-sans">
          ¿Ya tienes cuenta?{" "}
          <a
            className="
            text-[#0F766E]
            font-medium
            hover:text-[#115E59]
            hover:underline
            transition-colors
          "
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
