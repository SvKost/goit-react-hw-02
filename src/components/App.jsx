import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    const parsedFeedbackData = JSON.parse(localStorage.getItem("feedbackData"));
    if (parsedFeedbackData !== null) {
      return parsedFeedbackData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackType));
  }, [feedbackType]);

  const updateFeedback = (feedbackType) => {
    setFeedbackType((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;

  const positiveFeedback = Math.round(
    ((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
