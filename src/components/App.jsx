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
  // const [totalFeedback, setTotalFeedback] = useState(0);

  const updateFeedback = (feedbackType) => {
    setFeedbackType((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
    setShowFeedback(true);
  };

  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setShowFeedback(false);
    // setTotalFeedback(0);
  };

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Notification />

      <Feedback
        good={feedbackType.good}
        neutral={feedbackType.neutral}
        bad={feedbackType.bad}
      />
    </div>
  );
}

export default App;
