import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import './DashboardRoute.css'
import AuthApiService from '../../services/auth-api-service'

class DashboardRoute extends Component {
    state = {
      words: [],
      language: {}
    }

    componentDidMount(){
      AuthApiService.getWords()
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
    const wordListDisplay = words.map(word => (<li>{word.translation}</li>))
    return (
      <div>
        <section className='dashBoard-menu'>
          <h2>{this.state.language.name}</h2>
          <Button onClick={() => this.handleClickStart()}
          >Start Practice!</Button>
        </section>

        <section className='dashBoard-userscore'>
          <p>Total Score: {this.state.language.total_score} </p>
        </section>
        
        <section className='dashBoard-course-overview'>
          <h2>Practice Words:</h2>
          <ul>
            {wordListDisplay}
          </ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
