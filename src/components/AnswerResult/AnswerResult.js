import React, { Component } from 'react'
import './AnswerResult.css'

class AnswerResult extends Component {

  render() {
    let { translation, userGuess, totalScore, currentWord } = this.props;
    // let submissionFeedback = this.props.isCorrect
    // ? <div className='greenTea'>You were correct! :D</div>
    // : <div className='strawberry'>Good try, but not quite right :(</div>;

    return (
        <div className={`results`}>
          <section className='answerResults'>
            <div className='feedback'>
              <div className='DisplayFeedback'>
                <p className='answerResults-paragraph '>The correct translation for <span className="bold" lang="ja">{currentWord} </span>
                was <span className='greenTea'>{translation} </span>
                and you chose {userGuess}!</p>
              </div>
            </div>
            <button onClick={this.props.handleNextTryClick} className='nextWord'>Try another word!</button>
            <div className='DisplayScore'>
              <p >Your total score is: {totalScore}</p>
            </div>
          </section>
        </div>
    );
  }
}

export default AnswerResult
