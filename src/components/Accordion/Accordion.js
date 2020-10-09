import React from 'react'
import './Accordion.scss'


class Accordion extends React.Component {
  render () {
    let {original, 
      translation, 
      correct_count, 
      incorrect_count
    } = this.props.word
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          <AccordionItem 
            original={original}
            translation={translation}
            correct_count={correct_count}
            incorrect_count={incorrect_count}
          />
        </ul>
      </div>
    )
  }
}

Accordion.defaultProps = {
  word: {}
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        original,
        translation,
        correct_count,
        incorrect_count,
      },
      state: {
        opened
      }
    } = this
    console.log('Word: ', original);

    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h4 {...{ className: 'accordion-item__title' }}>
            {original}
          </h4>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                translation: <strong>{translation}</strong><br/>
                correct answer count: <strong>{correct_count}</strong><br/>
                incorrect answer count: <strong>{incorrect_count}</strong>
              </p>
            </div>
          </div>
      </div>
    )
  }
}

AccordionItem.defaultProps = {
  word: {}
}

export default Accordion;