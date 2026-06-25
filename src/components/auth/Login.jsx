import Input from "../base/Input";
import Button from "../base/Button";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Icon from "../base/Icon";

import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const Login = () => {
  const iconClass =
    "absolute left-3 w-5 h-5 text-slate-400 group-focus-within:text-[#0F766E] transition-colors";

  return (
    <div>
      {/* HEADER */}
      <AuthHeader
        title="Iniciar sesión"
        subtitle="Ingresa tu usuario y tu contraseña"
      />

      {/* FORM */}
      <form className="mt-8 space-y-5">
        {/* username */}
        <div className="relative flex items-center group">
          <Icon icon={EnvelopeIcon} className={iconClass} />

          <Input
            type="email"
            placeholder="Correo electrónico"
            className="px-11"
          />
        </div>

        {/* password */}
        <div className="relative flex items-center group">
          <Icon icon={LockClosedIcon} className={iconClass} />

          <Input type="password" placeholder="Contraseña" className="px-11" />
        </div>

        {/* button */}
        <Button width="w-full">Iniciar sesión</Button>

        {/* footer */}
        <AuthFooter />
      </form>
    </div>
  );
};

export default Login;
