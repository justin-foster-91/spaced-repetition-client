import React, { Component } from 'react'
import './AnswerResult.css'

class AnswerResult extends Component {

  render() {
    let {hiddenAnswerSection, translation, userGuess, totalScore, currentWord} = this.props;
    let submissionFeedback = this.props.isCorrect
    ? <div className='greenTea'>You were correct! :D</div>
    : <div className='strawberry'>Good try, but not quite right :(</div>;

    return (
        <div className={`results ${hiddenAnswerSection}`}>
          <section className='answerResults'>
            <h2 className='LearningTitle'>
            {submissionFeedback}
            </h2>
            <div className='feedback'>
              <p className='answerResults-paragraph'>The correct translation for <span className="bold">{currentWord}</span> <br />
              was <span className='greenTea'>{translation}</span> <br />
              and you chose {userGuess}</p>
            </div>
            <button onClick={this.props.handleNextTryClick} className='submit'>Try another word.</button>
            <div className='DisplayScore'>
              <p >Your total score is: {totalScore}</p>
            </div>
          </section>
        </div>
    );
  }
}

export default AnswerResult
