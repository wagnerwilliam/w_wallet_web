const Label = ({ text, required = false }) => {
  return (
    <label
      className="
                  block
                  text-xs
                  font-semibold
                  tracking-wide
                  text-slate-600"
    >
      {text}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

export default Label;
