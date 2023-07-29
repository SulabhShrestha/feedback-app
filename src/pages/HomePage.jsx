import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import AboutIconLink from "../components/AboutIconLink";

import { FeedbackProvider } from "../context/FeedbackContext";

export default function HomePage() {
  return (
    <FeedbackProvider>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />

        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}
