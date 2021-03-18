import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.feedbacks}>
      <button
        type="button"
        className={s.feedBtn}
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className={s.feedBtn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.feedBtn}
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
