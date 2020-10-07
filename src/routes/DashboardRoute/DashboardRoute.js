import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import './DashboardRoute.css'
import WordApiService from '../../services/word-api-service'
import Tooltip from '../../components/Tooltip/Tooltip'

class DashboardRoute extends Component {
  state = {
    words: [],
    language: {}
  }

  componentDidMount() {
    WordApiService.getWords()
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.error)
        }
        return res.json()
      })
      .then(res => {
        this.setState({ words: res.words, language: res.language })
      })
      .catch(error => console.error(error))
  }

  handleClickStart() {
    const { history } = this.props
    history.push('/learn')
  }

  render() {
    const words = this.state.words ? this.state.words : [];
    console.log(words)
    const wordListDisplay = words.map(word => (
      <li key={word.id}>
        <h4>
          {word.original}
        </h4>
        <Tooltip currentWord={word}>
          {word.translation}
        </Tooltip>

      </li>))
    return (
      <div className='dashBoard-base'>
        <section className='dashBoard-menu'>
          <h2 className='Language'>{this.state.language.name}</h2>
          <Button
            className='StartButton'
            onClick={() => this.handleClickStart()}
          >
            Start Practice!
          </Button>

          <p>Total correct answers: {this.state.language.total_score}</p>
        </section>

        {/* <section className='dashBoard-userscore'>
          <h2>Total Correct Answers: {this.state.language.total_score} </h2>
        </section> */}
        <section className='dashBoard-course-overview'>
          <h2>Practice Words:</h2>
          <ul className='wordList'>
            {wordListDisplay}
          </ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
