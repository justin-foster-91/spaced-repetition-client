import React, { Component } from 'react'
import './LearningRoute.css'

class LearningRoute extends Component {
  render() {
    return (
      <section>
        <h3>Translate the word:</h3>
        {/* Pull the word from DB */}
        <h1>Hello</h1>
        <form>
          <fieldset>
            <legend>Submit Guess</legend>
            <p>What is the translation for this word?</p>
            <label>Guess: </label>
            <input></input><br/>
            <button>Submit</button>
          </fieldset>
        </form>
        <p>Your total score is: %correct </p>
        <p>You have answered this word correctly X times.</p>
        <p>You have answered this word incorrectly X times.</p>
      </section>
    );
  }
}

export default LearningRoute
