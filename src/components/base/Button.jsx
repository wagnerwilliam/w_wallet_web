import { baseButtonStyles, buttonVariants } from "../utils/buttonVariants";

const Button = ({
  width = "w-auto",
  variant = "primary",
  type = "button",
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseButtonStyles}
        ${buttonVariants[variant]}
        ${width}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
