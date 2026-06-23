import logo from "../../assets/logo.png";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <img src={logo} className="h-8 mx-auto" />

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
