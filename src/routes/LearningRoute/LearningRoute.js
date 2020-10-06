import React, { Component } from 'react'
import './LearningRoute.css'
import WordApiService from '../../services/word-api-service'
import AnswerResult from '../../components/AnswerResult/AnswerResult'

class LearningRoute extends Component {

  state = {
    currentWord: {},
    didSubmit: false,
    rightAnswer: '',
    userAnswer: '',
    isCorrect: null, 
  }

  componentDidMount(){
    WordApiService.getHead()
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.error)
      }
      return res.json();
    })
    .then(res => {
      this.setState({ currentWord: res});
    })
    .catch(error => console.error(error));
  }

  handleSubmit = ev => {
    ev.preventDefault();
    let { guess } = ev.target;
    guess = guess.value;
    WordApiService.postGuess(guess, this.state.currentWord.id)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({ isCorrect: res.isCorrect})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    console.log(this.state.currentWord)
    let currentWord = this.state.currentWord ? this.state.currentWord.nextWord : '';
    let totalScore = this.state.currentWord ? this.state.currentWord.totalScore : '';
    let correctlyAnswered = this.state.currentWord ? this.state.currentWord.wordCorrectCount : '';
    let incorrectlyAnswered = this.state.currentWord ? this.state.currentWord.wordIncorrectCount : '';

    
    return (
      <section className='LearningDisplay'>
        <div className='wordCard'>
          <h3 className='LearningTitle'>Translate the word:</h3>
          <h1 className='currentWord'>{currentWord}</h1>
        </div>
        <form onSubmit={this.handleSubmit} >
          <fieldset className='GuessForm'>
            {/* <legend>Submit Guess</legend> */}
            <p>What is the translation for this word?</p>
            <label htmlFor='guess'>Guess: </label>
            <input id='guess' name='guess' type='text'></input><br/>
            <button type='submit' className='submit'>Submit</button>
          </fieldset>
        </form>
        <AnswerResult/>
        <section className='learningProgress'>
        <p>Your total score is: {totalScore} correct </p>
        <p>You have answered this word correctly {correctlyAnswered} times.</p>
        <p>You have answered this word incorrectly {incorrectlyAnswered} times.</p>
      </section>
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
