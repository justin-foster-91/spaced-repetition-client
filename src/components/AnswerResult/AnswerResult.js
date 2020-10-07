import React, { Component } from 'react'
import './AnswerResult.css'

class AnswerResult extends Component {

  render() {
    let {hiddenAnswerSection, translation, userGuess, totalScore, currentWord} = this.props;
    let submissionFeedback = this.props.isCorrect
    ? <h3 className='greenTea'>You were correct! :D</h3>
    : <h3 className='strawberry'>Good try, but not quite right :(</h3>;

    return (
        <div className={`results ${hiddenAnswerSection}`}>
          <section className='answerResults'>
            {submissionFeedback}
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
