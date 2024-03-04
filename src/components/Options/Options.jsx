import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  console.log(totalFeedback);
  return (
    <div className={css.buttonsWrapper}>
      <button
        onClick={() => updateFeedback("good")}
        className={css.feedbackButton}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={css.feedbackButton}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={css.feedbackButton}
        type="button"
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          onClick={resetFeedback}
          className={css.feedbackButton}
          type="button"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
