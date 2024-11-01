import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg">
        <div className="letters-calculator-container">
          <div className="letters-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-label">
              <label className="enter-phrase" htmlFor="phraseText">
                Enter the phrase
              </label>

              <input
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                className="input-element"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
