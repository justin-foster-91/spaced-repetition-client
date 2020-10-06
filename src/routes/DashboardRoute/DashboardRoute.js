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

    componentDidMount(){
      WordApiService.getWords()
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.error)
        }
        return res.json()
      })
      .then(res => {
        this.setState({ words : res.words, language: res.language})
      })
      .catch(error => console.error(error))
    }

  handleClickStart() {
    const { history } = this.props
    history.push('/learn')
  }

  render() {
    const words = this.state.words ? this.state.words : [];
    const wordListDisplay = words.map(word => (
    <li key={word.id}>
      <Tooltip currentWord={word}>
        {word.translation}
      </Tooltip>
    </li>))
    return (
      <div className='dashBoard-base'>
        <section className='dashBoard-menu'>
          <h1 className='Language'>{this.state.language.name}</h1>
          <Button 
            className='StartButton'
            onClick={() => this.handleClickStart()}
          >
            Start Practice!
          </Button>
        </section>

        <section className='dashBoard-userscore'>
          <p>Total Score: {this.state.language.total_score} </p>
        </section>
        
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
