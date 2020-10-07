import React, { Component } from 'react'
import './LearningRoute.css'
import WordApiService from '../../services/word-api-service'

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: {},
      didSubmit: false,
      rightAnswer: '',
      userAnswer: '',
      isCorrect: null,
      totalScore: 0
    }
  }
  
  getHead() {
    WordApiService.getHead()
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.error)
        }
        return res.json();
      })
      .then(res => {
        this.setState({ currentWord: res });
      })
      .catch(error => console.error(error));
  }
  
  componentDidMount(){
    return this.getHead()
  }

  handleSubmit = ev => {
    ev.preventDefault();
    let { guess } = ev.target;
    guess = guess.value;
    WordApiService.postGuess(guess, this.state.currentWord.id)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          isCorrect: res.isCorrect,
          userAnswer: guess,
          rightAnswer: res.answer,
          didSubmit: true,
          totalScore: res.totalScore
        })
      })
      .catch(error => console.log(error))
  }

  handleNextTryClick = () => {
    this.setState({
      didSubmit: false,
      isCorrect: null,
    })
    return this.getHead();
  }

  render() {
    console.log(this.state.currentWord)
    let currentWord = this.state.currentWord ? this.state.currentWord.nextWord : '';
    let translation = this.state.didSubmit ? this.state.rightAnswer : '';
    let userGuess = this.state.didSubmit 
      ? <span className={this.state.isCorrect ? 'greenTea': 'strawberry'}>{this.state.userAnswer}</span>
      : '';
    let totalScore = this.state.currentWord ? this.state.currentWord.totalScore : '';
    let correctlyAnswered = this.state.currentWord ? this.state.currentWord.wordCorrectCount : '';
    let incorrectlyAnswered = this.state.currentWord ? this.state.currentWord.wordIncorrectCount : '';
    let submissionFeedback = this.state.isCorrect 
      ? <h2 className='greenTea'>You were correct! :D</h2> 
      : <h2 className='strawberry'>Good try, but not quite right :(</h2>;
    let hiddenSubmission = this.state.didSubmit ? 'hidden' : '';
    let hiddenAnswerSection = !this.state.didSubmit ? 'hidden' : '';
    return (
      <section className='LearningDisplay '>
        <div className='wordCard'>
          <h2 className='LearningTitle'>Translate the word:</h2>
          <p className='currentWord'>{currentWord}</p>
        </div>
        <form onSubmit={this.handleSubmit} >
          <fieldset className={`GuessForm ${hiddenSubmission}`}>
            {/* <legend>Submit Guess</legend> */}
            <p>What is the translation for this word?</p>
            <label htmlFor='guess'>Guess: </label>
            <input id='guess' name='guess' type='text'></input><br />
            <button type='submit' className='submit'>Submit</button>
          </fieldset>
        </form>
        <div className={`results ${hiddenAnswerSection}`}>
          <section className='answerResults'>
            {submissionFeedback}
            <div className='feedback'>
              <p className='answerResults-paragraph'>The correct translation for <span className="bold">{currentWord}</span> <br/>
              was <span className='greenTea'>{translation}</span> <br/>
              and you chose {userGuess}</p>
            </div>
            <button onClick={this.handleNextTryClick} class='submit'>Try another word.</button>
            <p className='answerResults-paragraph'>Your total score is: {totalScore} correct </p>
          </section>
        </div>

        <section className='Scores'>
          <p>Your total score is: {totalScore} correct </p>
          <p>You have answered this word correctly {correctlyAnswered} times.</p>
          <p>You have answered this word incorrectly {incorrectlyAnswered} times.</p>
        </section>
      </section>
    );
  }
}

export default LearningRoute
