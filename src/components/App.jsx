import { useState } from 'react';
import { Controls } from 'components/Controls/Controls';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counTotalFeedBack = good + neutral + bad;
  const countPositiveFeedBack = Math.round((good / counTotalFeedBack) * 100)

  const obj = {
    good,
    neutral,
    bad,
  };

  const itemObj = {
    ...obj,
    total: counTotalFeedBack,
    positiveFeedback: countPositiveFeedBack 
  };

  const handleClick = e => {
    switch (e.target.textContent.toUpperCase()) {
      case 'GOOD':
        setGood(state => state + 1);
        break;
      case 'NEUTRAL':
        setNeutral(state => state + 1);
        break;
      case 'BAD':
        setBad(state => state + 1);
        break;
      default:
        console.log('non valid');
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Controls obj={obj} handleClick={handleClick} />
      </Section>
      {itemObj.total > 0 ? (
          <Section title="Statistics">
            <Statistics obj={itemObj} />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
    </Container>
  );
};
