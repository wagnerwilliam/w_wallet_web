export const baseButtonStyles = `
  inline-flex items-center justify-center
  gap-2

  py-2.5 px-4

  font-sans text-sm font-semibold tracking-tight

  rounded-xl

  transition-all duration-200 ease-out

  focus:outline-none focus:ring-4

  disabled:opacity-50 disabled:cursor-not-allowed
`;

export const buttonSizes = {
  sm: "px-2 py-1 text-xs rounded-md",
  md: "px-4 py-2.5 text-sm",
};

export const buttonVariants = {
  primary: `
    text-white
    bg-[#0F766E]
    shadow-sm
    hover:bg-[#115E59]
    hover:shadow-md
    hover:-translate-y-0.5
    active:translate-y-0
    active:shadow-sm
    focus:ring-[#0F766E]/20
  `,

  secondary: `
    text-[#0F766E]
    bg-transparent
    hover:bg-[#D1ECE6]
    focus:ring-[#0F766E]/10
  `,

  outline: `
    text-[#0F766E]
    bg-transparent
    border border-[#0F766E]
    hover:bg-[#0F766E]/5
    focus:ring-[#0F766E]/10
  `,

  danger: `
    text-white
    bg-[#E11D48]
    hover:bg-[#BE123C]
    focus:ring-[#E11D48]/20
    shadow-sm
  `,

  ghost: `
    text-slate-600
    bg-transparent
    hover:bg-slate-100
    focus:ring-slate-200
  `,

  logout: `
    text-[#E11D48]
    bg-transparent
    hover:bg-[#FEE2E2]
    focus:ring-[#E11D48]/10
  `,
};
