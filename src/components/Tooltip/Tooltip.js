import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {

  render() {
    const { correct_count, incorrect_count } = this.props.currentWord
    return(
      <span className='Tooltip'>
        <span 
          className='Tooltip-content'
          style={{ color: this.props.color }}
        >
          {this.props.children}
        </span>
        <div className='Tooltip-message'>
          Total correct: {correct_count} <br/>
          Total incorrect: {incorrect_count}
        </div>

      </span>
    );
  }
}

export default Tooltip;