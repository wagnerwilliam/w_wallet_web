const Loading = ({ description }) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center py-12 border border-slate-200 rounded-2xl bg-white">
      <div
        className="
                w-8 h-8
                border-4
                border-slate-200
                border-t-[#0F766E]
                rounded-full
                animate-spin
              "
      />

      <p className="mt-4 text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default Loading;
