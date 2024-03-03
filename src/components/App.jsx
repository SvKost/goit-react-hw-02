import { useState } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";

function App() {
  // const [feedbackType, setFeedbackType] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
