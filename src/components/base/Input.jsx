import { baseInputStyles, inputVariants } from "../utils/inputVariants";

const Input = ({
  type = "text",
  placeholder,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${baseInputStyles}
        ${inputVariants[variant]}
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
