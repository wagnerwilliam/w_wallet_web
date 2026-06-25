const Search = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="
                    w-full max-w-sm
                    px-4 py-2.5

                    bg-white/70
                    backdrop-blur-md

                    border border-slate-100

                    rounded-xl

                    text-sm text-slate-700
                    placeholder:text-slate-400

                    shadow-sm

                    transition-all

                    hover:bg-white/80
                    hover:border-slate-200

                    focus:outline-none
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0F766E]/10
                    focus:border-[#0F766E]
                "
    />
  );
};

export default Search;
