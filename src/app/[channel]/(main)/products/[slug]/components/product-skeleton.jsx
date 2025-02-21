import Skeleton from "../../../../../components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="opacity-20">
      <div className="md:px-32 px-6 mt-8">
        <Skeleton className="w-[80%] md:w-72 h-8 rounded-full" />
      </div>
      <div className="mt-12 flex md:flex-row flex-col gap-8 md:px-32 px-6">
        <div className="md:w-1/2 flex gap-4">
          <div className="hidden md:flex flex-col gap-5">
            <Skeleton className="w-[120px] h-[120px] rounded-none" />
            <Skeleton className="w-[120px] h-[120px] rounded-none" />
            <Skeleton className="w-[120px] h-[120px] rounded-none" />
            <Skeleton className="w-[120px] h-[120px] rounded-none" />
          </div>
          <Skeleton className="w-full h-[320px] md:h-[645px] rounded-none" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <Skeleton className="w-48 h-6 rounded-full" />
          <Skeleton className="w-72 h-10 rounded-full" />
          <Skeleton className="w-full h-6 rounded-full" />
          <Skeleton className="w-20 h-6 rounded-full" />
          <div className="mb-3">
            <Skeleton className="w-48 h-6 rounded-full" />
            <div className="flex w-full my-4 gap-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="w-20 h-20" />
                <Skeleton className="w-20 h-6 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="w-20 h-20" />
                <Skeleton className="w-20 h-6 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="w-20 h-20" />
                <Skeleton className="w-20 h-6 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-[80%] h-10" />
            <Skeleton className="w-[80%] h-10" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-16 h-6 rounded-full" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-32 h-6 rounded-full" />
            <Skeleton className="w-52 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
