const Input = ({ placeholder, type, px }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
            block w-full py-3 ${px}

            font-sans
            text-sm text-slate-700 placeholder:text-slate-400

            bg-white
            border border-slate-200
            rounded-xl

            shadow-sm

            transition-all duration-200

            focus:border-[#0F766E]
            focus:ring-4
            focus:ring-[#0F766E]/15
            focus:outline-none

            hover:border-slate-300
            `}
    />
  );
};

export default Input;
