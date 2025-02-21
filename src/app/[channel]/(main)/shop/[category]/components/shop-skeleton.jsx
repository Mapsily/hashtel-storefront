import Skeleton from "@/components/ui/skeleton";

export default function ShopSkeleton() {
  return (
    <>
      <div className="mt-12 md:px-16 p-6 flex opacity-20">
        <div className="hidden md:block w-[30%]">
          <div className="mt-8 flex flex-col items-start gap-8">
            <Skeleton className="w-28 h-6 rounded-full" />
            <div className="flex gap-4 flex-col">
              <Skeleton className="w-16 h-[18px] rounded-full" />
              <Skeleton className="w-24 h-[18px] rounded-full" />
              <Skeleton className="w-28 h-[18px] rounded-full" />
              <Skeleton className="w-24 h-[18px] rounded-full" />
              <Skeleton className="w-32 h-[18px] rounded-full" />
            </div>
            <Skeleton className="w-20 h-6 mt-6 rounded-full" />
            <div className="w-full flex gap-4 flex-col">
              <div className="flex justify-between w-[60%]">
                <Skeleton className="w-28 h-[18px] rounded-full" />
                <Skeleton className="w-4 h-4" />
              </div>
              <div className="flex justify-between w-[60%]">
                <Skeleton className="w-32 h-[18px] rounded-full" />
                <Skeleton className="w-4 h-4" />
              </div>
              <div className="flex justify-between w-[60%]">
                <Skeleton className="w-36 h-[18px] rounded-full" />
                <Skeleton className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <Skeleton className="w-[50%] md:w-32 h-6 mb-8 rounded-full" />
          <div className="mt-4 grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
            <div className="md:min-w-[240px] md:w-[240px] w-full flex flex-col items-start gap-4">
              <Skeleton className="w-full h-[300px] rounded-none" />
              <Skeleton className="w-[60%] h-[20px] rounded-full" />
              <Skeleton className="w-[80%] h-[20px] rounded-full" />
            </div>
            <div className="md:min-w-[240px] md:w-[240px] w-full flex flex-col items-start gap-4">
              <Skeleton className="w-full h-[300px] rounded-none" />
              <Skeleton className="w-[60%] h-[20px] rounded-full" />
              <Skeleton className="w-[80%] h-[20px] rounded-full" />
            </div>
            <div className="md:min-w-[240px] md:w-[240px] w-full flex flex-col items-start gap-4">
              <Skeleton className="w-full h-[300px] rounded-none" />
              <Skeleton className="w-[60%] h-[20px] rounded-full" />
              <Skeleton className="w-[80%] h-[20px] rounded-full" />
            </div>
            <div className="md:hidden md:min-w-[240px] md:w-[240px] w-full flex flex-col items-start gap-4">
              <Skeleton className="w-full h-[300px] rounded-none" />
              <Skeleton className="w-[60%] h-[20px] rounded-full" />
              <Skeleton className="w-[80%] h-[20px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
