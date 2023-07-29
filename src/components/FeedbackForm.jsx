import { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function updateText(e) {
    setText(e.target.value);
  }

  const handleFeedbackSubmit = function (e) {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addNewFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form action="" onSubmit={handleFeedbackSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onRatingChanged={(newRating) => setRating(newRating)} />
        <div className="input-group">
          <input
            type="text"
            name="user-review"
            id=""
            placeholder="Write a review"
            value={text}
            onChange={updateText}
          />
          <Button
            type="submit"
            isDisabled={text.trim().length < 10 ? true : false}
          >
            Send
          </Button>
        </div>

        {
          <div className="message">
            {text.trim().length < 10 ? "Length must be greater than 10" : ""}
          </div>
        }
      </form>
    </Card>
  );
}
