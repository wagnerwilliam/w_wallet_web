export const baseInputStyles = `
  block w-full

  font-sans
  text-sm

  rounded-xl
  transition-all duration-200

  focus:outline-none
`;

export const inputVariants = {
  primary: `
    py-3 px-4

    bg-white
    border border-slate-200

    text-slate-700
    placeholder:text-slate-400

    shadow-sm

    hover:border-slate-300

    focus:border-[#0F766E]
    focus:ring-4
    focus:ring-[#0F766E]/15
  `,

  filled: `
    py-2.5 px-4

    bg-slate-50
    border border-slate-200

    text-slate-700
    placeholder:text-slate-400

    hover:border-slate-300

    focus:border-[#0F766E]
    focus:ring-4
    focus:ring-[#0F766E]/10
  `,

  outline: `
    py-2.5 px-4

    bg-transparent
    border border-slate-300

    text-slate-700
    placeholder:text-slate-400

    focus:border-[#0F766E]
    focus:ring-4
    focus:ring-[#0F766E]/10
  `,

  search: `
    py-2.5 px-4

    bg-white/70
    backdrop-blur-sm

    border border-slate-100

    text-slate-700
    placeholder:text-slate-400
    rounded-xl

    shadow-sm

    hover:border-slate-200

    focus:border-[#0F766E]/30
    focus:ring-4
    focus:ring-[#0F766E]/10
  `,
  color: `
    h-10
    p-1

    bg-slate-50
    border border-slate-200

    rounded-xl
    cursor-pointer

    hover:border-slate-300

    focus:outline-none
    focus:ring-4
    focus:ring-[#0F766E]/10
  `,
};

export const inputStates = {
  error: `
    border-red-500
    bg-red-50
    focus:border-red-500
    focus:ring-4 focus:ring-red-200
  `,

  success: `
    border-green-500
    focus:border-green-500
    focus:ring-4 focus:ring-green-200
  `,

  disabled: `
    bg-slate-50
    border-slate-200
    text-slate-500
    shadow-none
    cursor-default
    opacity-50
    `,
};
