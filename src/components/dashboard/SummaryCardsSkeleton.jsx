import Skeleton from "./Skeleton";

const SummaryCardsSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {[...Array(4)].map((_, index) => (
        <article
          key={index}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Skeleton className="h-3 w-24" />

              <Skeleton className="mt-4 h-8 w-36" />
            </div>

            <Skeleton className="h-10 w-10 rounded-xl sm:h-11 sm:w-11" />
          </div>
        </article>
      ))}
    </section>
  );
};

export default SummaryCardsSkeleton;
