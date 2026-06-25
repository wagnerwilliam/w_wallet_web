import Input from "../base/Input";
import Button from "../base/Button";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const Register = () => {
  return (
    <div>
      <AuthHeader
        title="Crear cuenta"
        subtitle="Empieza a controlar tus finanzas"
      />
      <form className="mt-8 space-y-5">
        <Input type="text" placeholder="Nombre completo" px="px-4" />
        <Input type="email" placeholder="Correo electrónico" px="px-4" />
        <Input type="password" placeholder="Contraseña" px="px-4" />
        <Input type="password" placeholder="Confirmar contraseña" px="px-4" />

        <Button width="w-full">Crear cuenta</Button>

        <AuthFooter
          text="¿Ya tienes cuenta?"
          linkText="Inicia sesión"
          to="/login"
        />
      </form>
    </div>
  );
};

export default Register;
