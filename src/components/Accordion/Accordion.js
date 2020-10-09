import React from 'react'
import './Accordion.scss'


const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'
{/* <p>translation: {word.translation}</p> <br/>
<p>correct answer count: {word.correct_count}</p> <br/>
<p>incorrect answer count: {word.incorrect_count}</p> */}

const data = [
  {
    title: 'Pricing plans',
    paragraph
  },
  {
    title: 'How to apply',
    paragraph
  },
  {
    title: 'Purchasing process',
    paragraph
  },
  {
    title: 'Usage guides',
    paragraph
  }
]
{/* <h4 className='wordItem'>{word.original}</h4> */}

class Accordion extends React.Component {
  render () {
    let {original, translation, correct_count, incorrect_count} = this.props.word
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