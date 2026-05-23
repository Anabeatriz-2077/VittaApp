function RatingStars({ rating }) {

  return (
    <div>

      {
        [...Array(5)].map((_, index) => (

          <span key={index}>
            {
              index < rating
              ? "⭐"
              : "☆"
            }
          </span>

        ))
      }

    </div>
  );
}

export default RatingStars;