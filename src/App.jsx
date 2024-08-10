import './App.css'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options'
import { useState, useEffect } from 'react';

const App = () => {

  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem('feedback')) ?? { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <main className='main'>
      <div className="container">
        <Description/>
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
        {totalFeedback ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
      </div>
    </main>
  )
}

export default App
