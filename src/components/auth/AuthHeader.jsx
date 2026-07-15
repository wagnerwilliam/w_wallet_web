import Logo from "../base/Logo";

/**
 * Encabezado reutilizable para las vistas de autenticación.
 *
 * Muestra el logotipo de la aplicación junto con el título
 * y el subtítulo correspondientes a la pantalla actual.
 */
const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <Logo className="h-8 mx-auto" />

      <h2 className="mt-6 text-2xl font-medium tracking-tight text-slate-900 font-sans">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500 font-sans leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;
