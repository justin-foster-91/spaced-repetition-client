import React, { Component } from 'react'
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


  render() {
    return (
      <div>
        <section className='dashBoard-menu'>
          <h2>Japanese</h2>
          <Button>Start Practice!</Button>
        </section>

        <section className='dashBoard-userscore'>
          <p>Total Score: 11000 out of 22222 correct </p>
        </section>
        
        <section className='dashBoard-course-overview'>
          <ul>
            <li>Hello</li>
            <li>Goodbye</li>
            <li>What time is it?</li>
            <li>Help</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
