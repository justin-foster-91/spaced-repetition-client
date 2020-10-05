import React, { Component } from 'react'
import './LearningRoute.css'
import WordApiService from '../../services/word-api-service'

class LearningRoute extends Component {

  state = {
    currentWord: {}
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
    console.log("LearningRoute -> this.state.currentWord", this.state.currentWord)
  }
  
  render() {
    let currentWord = this.state.currentWord ? this.state.currentWord.nextWord : '';
    let totalScore = this.state.currentWord ? this.state.currentWord.totalScore : '';
    let correctlyAnswered = this.state.currentWord ? this.state.currentWord.wordCorrectCount : '';
    let incorrectlyAnswered = this.state.currentWord ? this.state.currentWord.wordIncorrectCount : '';
    return (
      <section>
        <h3>Translate the word:</h3>
        {/* Pull the word from DB */}
    <h1>{currentWord}</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Submit Guess</legend>
            <p>What is the translation for this word?</p>
            <label htmlFor='guess'>Guess: </label>
            <input id='guess' name='guess' type='text'></input><br/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
        <p>Your total score is: {totalScore} correct </p>
        <p>You have answered this word correctly {correctlyAnswered} times.</p>
        <p>You have answered this word incorrectly {incorrectlyAnswered} times.</p>
      </section>
    );
  }
}

export default LearningRoute
