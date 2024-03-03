import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const feedbackData = JSON.parse(localStorage.getItem("feedbackData"));

  const [feedbackType, setFeedbackType] = useState(feedbackData);

  const updateFeedback = (type) => {
    setFeedbackType((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackType));
  }, [feedbackType]);

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
