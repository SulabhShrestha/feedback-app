import { useContext } from "react";
import { FeedbackContext, useFeedbackContext } from "../context/FeedbackContext";

function findAvg(feedbacks){

    const sum =  feedbacks.reduce(
      (accumulator, currentValue) => accumulator + currentValue.rating, 0
    );


    return (sum/feedbacks.length).toFixed(1);

}

export default function FeedbackStats(){

  const {feedback: feedbacks} = useContext(FeedbackContext);

    return (
      <div className="feedback-stats">
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average Rating: {findAvg(feedbacks)}</h4>
      </div>
    );
}