import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import LearningRoute from './LearningRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><LearningRoute /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
