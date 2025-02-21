import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
  return (
    <div className="opacity-20">
      <Skeleton className="w-full h-[450px]" />
      <div className="my-14 flex items-center justify-center w-full gap-4">
        {[1, 2, 3, 4].map((idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <Skeleton className="w-56 h-56" />
            <Skeleton className="w-56 h-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
