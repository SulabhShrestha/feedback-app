import { useContext } from "react";
import FeedbackItemCard from "./FeedbackItemCard";
import { AnimatePresence, motion } from "framer-motion";
import { FeedbackContext } from "../context/FeedbackContext";


export default function FeedbackList(props) {
  
  const { feedback: feedbacks} = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>Nothing to display.</p>;
  }

  return (
    <AnimatePresence>
      {feedbacks.map((feedback) => {
        return (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItemCard
              key={feedback.id}
              item={feedback}
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}

