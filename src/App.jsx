import { useState } from 'react'
import './App.css'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Section from './Section'
import Notification from './Notification'

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((state.good / total) * 100).toFixed(2) + '%' : '0%';
  }

  const handleLeaveFeedback = (type) => {
    setState(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Feedback Summary">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  )
}

export default App
