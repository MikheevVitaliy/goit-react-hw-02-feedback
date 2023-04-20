import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback/Notification/Notification';
import { Section } from './Feedback/Section/Section';
import { Statistics } from './Feedback/Statistics/Statistics';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Layout/Layout.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const value = event.target.value;

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  totalFeedback = () =>
    Object.values(this.state).reduce(
      (total, prevState) => total + prevState,
      0
    );

  calculationPercentageRating = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce(
          (total, feedback) => total + feedback,
          0
        )) *
        100
    );

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback}
              ratingPercentage={this.calculationPercentageRating}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </Container>
    );
  }
}

// =================
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const handleBtnClick = ({ target: { value } }) => {
    switch (value) {
      case 'good':
        return setGood(s => s + 1);
      case 'neutral':
        return setNeutral(s => s + 1);
      case 'bad':
        return setBad(s => s + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((total, prevState) => total + prevState, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleBtnClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyle />
    </Container>
  );
};
// =========================
