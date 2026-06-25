const Label = ({ text }) => {
  return (
    <label
      className="
                  block
                  text-xs
                  font-semibold
                  tracking-wide
                  text-slate-600
              "
    >
      {text}
    </label>
  );
};

export default Label;
