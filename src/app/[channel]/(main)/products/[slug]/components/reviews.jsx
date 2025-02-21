import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "../../../../../components/ui/button";
import Ratings from "../../../../../components/rating";
import Review from "./review";
import { addReview, fetchReviews } from "../../../../../api/review";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../../context/AuthContext";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!productId) return;
    fetchReviews(productId).then(setReviews);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Login to review!");
    setLoading(true);
    await addReview(productId, { text, rating, userName: user.fname });
    setReviews((p) => [...p, { text, rating, userName: user.fname }]);
    setText("");
    setRating(0);
    toast.success("Review Added!");
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="md:px-32 px-6 mt-16">
      <h3 className="text-2xl font-semibold">Customer Reviews</h3>
      <span className="mt-4 flex items-center gap-1">
        <Ratings
          rating={
            reviews.reduce((a, b) => a.rating + b.rating, { rating: 0 }) /
            reviews.length
          }
        />
        <p className="ml-2 text-sm">{reviews.length} Reviews</p>
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-8 justify-between mt-8 border rounded-xl p-4 px-8"
      >
        <input
          type="text"
          value={text}
          required
          disabled={loading}
          placeholder="Enter your words..."
          className="text-md outline-none w-full"
          onChange={(e) => setText(e.target.value)}
        />
        <Ratings rating={rating} editable onChange={setRating} />
        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          size="lg"
          className="rounded-xl"
        >
          Write Review
        </Button>
      </form>
      <p className="mt-8 text-2xl font-semibold">{reviews.length} Reviews</p>
      <div className="mt-16 flex flex-col gap-8">
        {reviews.map((r) => (
          <Review key={r.text} {...r} />
        ))}
        {!reviews.length && (
          <p className="text-center text-muted">No Reviews Found.</p>
        )}
      </div>
    </div>
  );
}
