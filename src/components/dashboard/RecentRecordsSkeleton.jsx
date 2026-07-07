import Skeleton from "./Skeleton";

const RecentRecordsSkeleton = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <Skeleton className="h-5 w-44" />

        <Skeleton className="mt-2 h-4 w-72" />
      </div>

      <div className="divide-y divide-slate-100">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-4"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="h-11 w-11 rounded-xl" />

              <div>
                <Skeleton className="h-4 w-32" />

                <Skeleton className="mt-2 h-3 w-24" />
              </div>
            </div>

            <Skeleton className="h-5 w-20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentRecordsSkeleton;
