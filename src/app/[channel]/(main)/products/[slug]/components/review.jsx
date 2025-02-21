import Ratings from "../../../../../components/rating";

const Review = ({ id, userName, rating, text }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold">{userName}</h4>
      <span className="mt-6 flex items-center gap-1">
        <Ratings rating={rating} />
      </span>
      <p className="mt-4 text-muted font-[300]">{text}</p>
    </div>
  );
};

export default Review;
