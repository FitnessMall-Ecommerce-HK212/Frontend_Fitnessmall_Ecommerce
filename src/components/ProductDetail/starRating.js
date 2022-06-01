import { useState } from "react";
import Star from "./star";

function StarRating({ childToParent }) {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
    childToParent?.(newRating);
  };
  return (
    <div>
      <span>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            filled={value <= rating}
            onClick={() => changeRating(value)}
          />
        ))}
      </span>
    </div>
  );
}
export default StarRating;