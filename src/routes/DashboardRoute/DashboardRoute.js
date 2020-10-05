import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import './DashboardRoute.css'

class DashboardRoute extends Component {
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
