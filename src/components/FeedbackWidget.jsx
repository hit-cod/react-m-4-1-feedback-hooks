import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

function FeedbackWidget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        alert('Improper action');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </>
  );
}

export default FeedbackWidget;
