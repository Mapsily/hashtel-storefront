const Pair = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div>
      <p className="text-6xl font-semibold text-center">{heading}</p>
      <span className="text-gray-600 font-semibold">{subheading}</span>
    </div>
  );
};

export default Pair;
