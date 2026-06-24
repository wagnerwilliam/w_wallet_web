export const baseButtonStyles = `
  py-3 px-4
  font-sans text-sm font-semibold tracking-tight
  rounded-xl
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-4
  disabled:opacity-50 disabled:cursor-not-allowed
`;

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
    bg-[#E6F4F1]
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
    bg-red-500
    hover:bg-red-600
    focus:ring-red-200
  `,

  logout: `
    text-red-500
    hover:bg-red-50
    transition-colors
  `,
};
