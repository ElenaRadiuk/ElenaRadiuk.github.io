import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// presentation
let CounterView = ({counter, inc, dec})=>
<>
  <button onClick={inc}>+</button>
  <span>{counter}</span>
  <button onClick={dec}>-</button>
</>

//smart
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {counter:0}
    this.inc = this.inc.bind(this)
    this.dec = () => this.setState(prevState => ({counter: prevState.counter -1}))
  }
  inc() {
    this.setState(prevState => ({counter: prevState.counter +1}))
  }
 
  render(){
    return (
      <CounterView counter={this.state.counter} inc={this.inc} dec={this.dec}/>
    )
  }
}


class MyInput extends Component {
  state = {text: '', valid: false}

  onChange = e => this.setState(
    {text: e.target.value, valid: this.validate(e.target.value)}
    )

  validate = str => str.length>2;
  

  render(){
    let color = this.state.valid ? "green" :"red"
    console.log(color)
    return(
      
      <input value={this.state.text}
       onChange={this.onChange} valid={false} style={{backgroundColor:color}}
       />
    )
  }
}

class Pass extends Component {
  state = {text: '', valid: false}

  onChange = e => this.setState(
    {text: e.target.value, valid: this.validate(e.target.value)}
    )

  validate = str => str.length>2;
  

  render(){
    let color = this.state.valid ? "green" :"red"
    console.log(color)
    return(
      
      <input value={this.state.text}
       onChange={this.onChange} valid={false} style={{backgroundColor:color}}
       />
       
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <footer>
        test footer
      </footer>

      <CounterView counter={5} />
      <Counter/>
      
      <input defaultValue="test" />
      <MyInput/>
    </div>
  );
}

export default App;
