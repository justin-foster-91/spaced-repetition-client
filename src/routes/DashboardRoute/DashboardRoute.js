import React, { Component } from 'react'
import './DashboardRoute.css'

class DashboardRoute extends Component {
  render() {
    return (
      <section className='DashboardRoute'>
        <h2>Japanese Greetings</h2>
        <p>Total score x out of y correct.</p>
        <div className='WordDisplay'>
          <h3>Words to Practice</h3>
          {/* Need to pull list from DB */}
          <ul>
            <li>Hello</li>
            <li>Goodbye</li>
            <li>What time is it?</li>
            <li>Thank you</li>
            <li>Home</li>
            <li>Help</li>
            <li>Please</li>
            <li>I don't speak Japanese</li>
            <li>Dog</li>
            <li>Cat</li>
          </ul>
          <button className='startButton'>Start Learning</button>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
