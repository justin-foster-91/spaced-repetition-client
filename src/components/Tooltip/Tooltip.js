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
          correct answer count: {correct_count} <br/>
          incorrect answer count: {incorrect_count}
        </div>

      </span>
    );
  }
}

export default Tooltip;