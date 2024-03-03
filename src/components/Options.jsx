const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  console.log(totalFeedback);
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        Bad
      </button>

      <button onClick={resetFeedback} type="button">
        Reset
      </button>
    </div>
  );
};

export default Options;
