import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import sonidoExito from "../../assets/click.mp3";
import AuthContext from "../../context/AuthContext";
import { LogoutMutation } from "../../queries/auth";
import Button from "./Button";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

const DropDown = ({ usuario, openModal }) => {
  const { logout } = useContext(AuthContext);
  const logoutMutation = LogoutMutation();
  const navigate = useNavigate();
  const onClick = () => {
    logoutMutation.mutate(
      {},
      {
        onSuccess: () => {
          toast.success("Has cerrado sesión correctamente.");
          logout();
          reproducirSonido();
          navigate("/login", {
            replace: true,
          });
        },
      },
    );
  };

  return (
    <div
      className="
      absolute right-0 mt-3 w-56

      bg-white/90 backdrop-blur-md
      border border-slate-200
      rounded-xl shadow-lg

      overflow-hidden
      font-sans
    "
    >
      {/* USER INFO (opcional nivel pro) */}
      <div className="px-4 py-3 border-b border-slate-100">
        <p className="text-sm font-semibold tracking-tighttext-slate-900">
          Mi cuenta
        </p>
        <p className="text-xs text-slate-500 mt-0.5">{usuario.email}</p>
      </div>

      {/* ITEMS */}
      <div className="py-1">
        <button
          className="
            block px-4 py-2.5 text-sm
            text-slate-600
            hover:bg-slate-50
            hover:text-[#0F766E]
            transition-colors
            font-medium
          "
          onClick={openModal}
        >
          Perfil
        </button>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-100" />

      {/* ACTION */}
      <Button width="w-full" variant="logout" onClick={onClick}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default DropDown;
