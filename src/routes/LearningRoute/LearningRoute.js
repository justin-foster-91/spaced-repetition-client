import React, { Component } from 'react'
import './LearningRoute.css'
import AuthApiService from '../../services/auth-api-service'

class LearningRoute extends Component {

  state = {
    currentWord: {}
  }

  componentDidMount(){
    AuthApiService.getHead()
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.error)
      }
      return res.json()
    })
    .then(res => {
      this.setState({ currentWord: res})
    })
    .catch(error => console.error(error))
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
        <form>
          <fieldset>
            <legend>Submit Guess</legend>
            <p>What is the translation for this word?</p>
            <label>Guess: </label>
            <input></input><br/>
            <button>Submit</button>
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
