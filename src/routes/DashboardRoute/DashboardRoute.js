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
    return (
      <div>
        <section className='dashBoard-menu'>
          <h2>Japanese</h2>
          <Button onClick={() => this.handleClickStart()}
          >Start Practice!</Button>
        </section>

        <section className='dashBoard-userscore'>
          <p>Total Score: 11000 out of 22222 correct </p>
        </section>
        
        <section className='dashBoard-course-overview'>
          <ul>
            {console.log(this.state.words)}
            {this.state.words.map((word) => {
              return <li key={word.id}>{word.translation}</li>
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
