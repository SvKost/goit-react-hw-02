const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </div>
  );
};

export default Feedback;
