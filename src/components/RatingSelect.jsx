import { useContext, useState, useEffect } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function RatingSelect({onRatingChanged}) {
  const [selectedRating, setSelectedRating] = useState(10);
  const {feedbackEdit} = useContext(FeedbackContext);

  useEffect(() => {
    setSelectedRating(feedbackEdit.item.rating);
  }, [feedbackEdit]); 

  const ratingList = []; // contains li

  const handleRatingChanged = function (e) {
    setSelectedRating(parseInt(e.currentTarget.value));
    onRatingChanged(+e.currentTarget.value);
  };

  for (let a = 1; a <= 10; a++) {
    ratingList.push(
      <li key={`rating-${a}`}>
        <input
          type="radio"
          name={`num${a}`}
          id={`num${a}`}
          value={a}
          checked={a === selectedRating}
          onChange={handleRatingChanged}
        />
        <label htmlFor={`num${a}`}>{a}</label>
      </li>
    );
  }

  return <ul className="rating">{ratingList}</ul>;
}

export default RatingSelect;
