import Input from "./Input";

const Search = ({ placeholder, value, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="search"
      className="max-w-sm"
    />
  );
};

export default Search;
