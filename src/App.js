import React, { Component } from 'react';
import Score from './Score';
import MathGame from './MathGame';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    correctAnswers: 0,
    numQuestions: 0
  };

  handleAnswer = (correctFlag) => {
    if (correctFlag) {
      this.setState((currentState) => ({
        correctAnswers: currentState.correctAnswers + 1,
      }));
    } 
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <MathGame handleAnswer={this.handleAnswer}/>
          <Score correctAnswers={this.state.correctAnswers} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
