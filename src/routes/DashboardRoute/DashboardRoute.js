import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import './DashboardRoute.css'

class DashboardRoute extends Component {

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
