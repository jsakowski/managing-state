import React, { Component } from 'react';

class MathGame extends Component {
  constructor(props) {
    super(props);
    const values = this.getNewQuestion();
    this.state = {
      value1: values[0],
      value2: values[1],
      value3: values[2],
      proposedAnswer: values[3],
    };
  }
  
  getNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }

  handleAnswer = event => {
    const isAnswerCorrect = this.evaluateAnswer(event.target.name);
    
    const values = this.getNewQuestion();
    this.updateState(values);
    
    this.props.handleAnswer(isAnswerCorrect);
  }

  updateState = newValuesArray => {
    this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }));
  }

  evaluateAnswer = (givenAnswer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
      (corrAnswer !== proposedAnswer && givenAnswer === 'false')
    );
  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">True</button>
        <button onClick={this.handleAnswer} name="false">False</button>
      </div>
    )
  }
}

export default MathGame;