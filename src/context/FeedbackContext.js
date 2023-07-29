import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext(null);

// Providing context to it's descendant
const FeedbackProvider = function ({ children }) {
  // data to be available for the children
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // deleting the feedback
  function deleteFeedback(id) {
    const confirmation = window.confirm("Are you sure you want to delete?");

    if (confirmation) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  }

  // adding new feedback to the list
  const addNewFeedback = function (newFeedback) {
    const lastFeedback = feedback[feedback.length - 1];

    newFeedback.id = lastFeedback.id++;

    setFeedback([newFeedback, ...feedback]);
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // set feedback when updating
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Update feedback item
  const updateFeedback = (id, updatedItem) => {

    const updatedItems = feedback.map((item) =>
      item.id === id ? updatedItem : item
    );
    
    setFeedback(updatedItems);
    console.log(`after: ${feedback}`)
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        deleteFeedback,
        addNewFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
