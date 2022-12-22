import { useEffect, useState } from 'react';
import { Controls } from 'components/Controls/Controls';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const obj = {
    good,
    neutral,
    bad,
  };

  const itemObj = {
    ...obj,
    total,
    positiveFeedback,
  };

  useEffect(() => {
    setTotal(good + bad + neutral);

    total !== 0
      ? setPositiveFeedback(Math.round((good / total) * 100))
      : setPositiveFeedback(100);
  }, [good, neutral, bad, total]);

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
      {total > 0 ? (
          <Section title="Statistics">
            <Statistics obj={itemObj} />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
    </Container>
  );
};
