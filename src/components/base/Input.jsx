import {
  baseInputStyles,
  inputStates,
  inputVariants,
} from "../../utils/inputVariants";

const Input = ({
  type = "text",
  placeholder,
  variant = "primary",
  value,
  onChange,
  error,
  disabled,
  readOnly,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      readOnly={readOnly}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={`
        ${baseInputStyles}
        ${inputVariants[variant]}
        ${error ? inputStates.error : ""}
        ${disabled ? inputStates.disabled : ""}
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
