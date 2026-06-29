export const baseSelectStyles = `
  block w-full
  font-sans text-sm
  rounded-xl
  transition-all duration-200
  focus:outline-none
`;

export const selectVariants = {
  primary: `
    px-4 py-2.5
    bg-white
    border border-slate-200
    text-slate-700
    hover:border-slate-300
    focus:border-[#0F766E]
    focus:ring-4 focus:ring-[#0F766E]/15
  `,

  filled: `
    px-4 py-2.5
    bg-slate-50
    border border-slate-200
    text-slate-700
    hover:border-slate-300
    focus:border-[#0F766E]
    focus:ring-4 
    focus:ring-[#0F766E]/10
  `,
};

export const selectStates = {
  error: `
    border-red-500
    bg-red-50
    focus:border-red-500
    focus:ring-4 focus:ring-red-200
  `,

  disabled: `
    bg-slate-100
    text-slate-400
    cursor-not-allowed
  `,
};
