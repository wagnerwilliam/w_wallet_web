import Skeleton from "../base/Skeleton";

const MetaSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <Skeleton className="h-5 w-2/3 rounded-md" />

      <Skeleton className="mt-6 h-3 w-full rounded-full" />

      <div className="mt-6 grid grid-cols-3 gap-4">
        <Skeleton className="h-10 rounded-lg" />
        <Skeleton className="h-10 rounded-lg" />
        <Skeleton className="h-10 rounded-lg" />
      </div>

      <Skeleton className="mt-6 h-10 w-full rounded-xl" />
    </div>
  );
};

export default MetaSkeleton;
