import { useState } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [showFeedback, setShowFeedback] = useState(false);
  const [showResetFeedback, setResetFeedback] = useState(false);

  const updateFeedback = (feedbackType) => {
    setFeedbackType((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
    setShowFeedback((prevState) => !prevState);
    setResetFeedback((prevState) => !prevState);
  };

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;

  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setShowFeedback((prevState) => !prevState);
    setResetFeedback((prevState) => !prevState);
  };

  return (
    <div>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <div>
          <Feedback
            good={feedbackType.good}
            neutral={feedbackType.neutral}
            bad={feedbackType.bad}
          />
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
