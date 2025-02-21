import { Star } from "lucide-react";

export default function Rating({ rating = 0 }: { rating: number }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          size={20}
          className={index <= rating ? "text-yellow-500" : "text-gray-300"}
          fill={index <= rating ? "#eab308" : "#d1d5db"}
        />
      ))}
    </span>
  );
}
