import {
  baseButtonStyles,
  buttonVariants,
  buttonSizes,
} from "../utils/buttonVariants";

const Button = ({
  width = "w-auto",
  variant = "primary",
  type = "button",
  size = "md",
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
        ${buttonSizes[size]},
        ${width}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
