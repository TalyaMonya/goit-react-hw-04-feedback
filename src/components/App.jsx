import React, { Component } from 'react';
import { MainWrapper } from './MainWrapper/MainWrapper';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) => 
    Math.round((good * 100) / this.countTotalFeedback(this.state))

  
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <MainWrapper>
        <Section title="- Please Live Feedback -">
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)} />
        </Section>
      </MainWrapper>
    );
  } 
}

