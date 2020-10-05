import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {

  render() {
    return(
      <span className='Tooltip'>
        {console.log(this.props)}
        <span 
          className='Tooltip-content'
          style={{ color: this.props.color }}
        >
          {this.props.children}
        </span>
        <div className='Tooltip-message'>
          {this.props.currentWord.original}
        </div>

      </span>
    );
  }
}

export default Tooltip;