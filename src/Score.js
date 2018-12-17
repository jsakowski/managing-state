import React from 'react'

function Score(props) {
  return (
    <p className="text">
    Your Score: {props.correctAnswers}/{props.numQuestions}
    </p>    
  )
}

export default Score