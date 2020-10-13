import React from 'react';
import './App.css';
import Die from './Die'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      dice: [0]
    }
  }
  render() {
    return(
      <div className="App">
          <div className="App-header">
          <button onClick={this.addDie}>+</button>
          {
            this.state.dice.map((index) => {
              return(
                <Die key={index}></Die>
              )
            })
          }
         </div>
      </div>
    )
  }
  addDie = () => {
    const newDiceArray = this.state.dice 
    newDiceArray.push(this.state.dice.length)
    this.setState({
      dice: newDiceArray
    })
  }
}
export default App;
