import React, { Component } from 'react'
import './LearningRoute.css'
import WordApiService from '../../services/word-api-service'
import AnswerResults from '../../components/AnswerResult/AnswerResult'

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

  componentDidMount() {
    return this.getHead()
  }

  handleSubmit = ev => {
    ev.preventDefault();
    let { guess } = ev.target;
    guess = guess.value;
    WordApiService.postGuess(guess, this.state.currentWord.id)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
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
    let currentWord = this.state.currentWord ? this.state.currentWord.nextWord : '';
    let translation = this.state.didSubmit ? this.state.rightAnswer : '';
    let userGuess = this.state.didSubmit
      ? <span className={this.state.isCorrect ? 'greenTea' : 'strawberry'}>{this.state.userAnswer}</span>
      : '';
    let totalScore = this.state.currentWord ? this.state.currentWord.totalScore : '';
    let correctlyAnswered = this.state.currentWord ? this.state.currentWord.wordCorrectCount : '';
    let incorrectlyAnswered = this.state.currentWord ? this.state.currentWord.wordIncorrectCount : '';
    let hiddenSubmission = this.state.didSubmit ? 'hidden' : '';
    let hiddenAnswerSection = !this.state.didSubmit ? 'hidden' : '';
    return (
      <section className='LearningDisplay '>
        <section className='wordCard LearningTitle'>
          <h2 >Translate the word:</h2>
          <span className='currentWord'>{currentWord}</span>
          <p className='DisplayScore'>Your total score is: {totalScore}</p>
        </section>
        <form onSubmit={this.handleSubmit} >
          <fieldset className={`GuessForm ${hiddenSubmission}`}>
            <legend className='legend'>Guess Submission</legend>
            <label htmlFor='learn-guess-input'>What's the translation for this word?</label><br/>
            <input id='learn-guess-input' name='guess' type='text' required></input><br />
            <button type='submit' className='submit'>Submit your answer</button>
          </fieldset>
        </form>
        <section className='ResultDisplay '>
          <AnswerResults 
            hiddenAnswerSection={hiddenAnswerSection}
            // submissionFeedback={submissionFeedback}
            userGuess={userGuess}
            translation={translation}
            totalScore={totalScore}
            handleNextTryClick={this.handleNextTryClick}
            currentWord={currentWord}
            isCorrect={this.state.isCorrect}
          />
        </section>

        <section className='Scores'>
          <p>You have answered this word correctly {correctlyAnswered} times.</p>
          <p>You have answered this word incorrectly {incorrectlyAnswered} times.</p>
        </section>
      </section>
    );
  }
}

export default LearningRoute
