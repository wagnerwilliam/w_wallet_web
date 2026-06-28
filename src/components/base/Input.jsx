import { baseInputStyles, inputVariants } from "../../utils/inputVariants";

const Input = ({
  type = "text",
  placeholder,
  variant = "primary",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
