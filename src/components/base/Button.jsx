const Button = ({ width, children }) => {
  // tener en cuenta las variantes de los botones para este componente.
  return (
    <button
      className={`
            ${width}
            py-3 px-4 

            font-sans
            text-sm font-semibold
            tracking-tight

            text-white
            bg-[#0F766E]

            rounded-xl

            shadow-sm

            transition-all duration-200 ease-out

            hover:bg-[#115E59]
            hover:shadow-md
            hover:-translate-y-0.5

            active:translate-y-0
            active:shadow-sm

            focus:outline-none
            focus:ring-4
            focus:ring-[#0F766E]/20

            disabled:opacity-50
            disabled:cursor-not-allowed

            `}
    >
      {children}
    </button>
  );
};

export default Button;
