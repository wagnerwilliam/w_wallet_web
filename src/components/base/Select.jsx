import {
  baseSelectStyles,
  selectVariants,
  selectStates,
} from "../../utils/selectVariants";

const Select = ({
  children,
  variant = "filled",
  onChange,
  error,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <select
      disabled={disabled}
      onChange={onChange}
      className={`
        ${baseSelectStyles}
        ${selectVariants[variant]}
        ${error ? selectStates.error : ""}
        ${disabled ? selectStates.disabled : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
