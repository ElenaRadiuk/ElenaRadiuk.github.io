import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// presentation
let CounterView = ({ counter, inc, dec }) =>
  <>
    <button onClick={inc}>+</button>
    <span>{counter}</span>
    <button onClick={dec}>-</button>
  </>

//smart component
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.inc = this.inc.bind(this)
    this.dec = () => this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }
  inc() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  render() {
    return (
      <CounterView counter={this.state.counter} inc={this.inc} dec={this.dec} />
    )
  }
}

//change style input
class MyInput extends Component {
  state = { text: '', valid: false }

  onChange = e => this.setState(
    { text: e.target.value, valid: this.validate(e.target.value) }
  )

  validate = str => str.length > 2;


  render() {
    let color = this.state.valid ? "green" : "red"
    console.log(color)
    return (

      <input value={this.state.text}
        onChange={this.onChange} valid={false} style={{ backgroundColor: color }}
      />
    )
  }
}

//check input pass
class Pass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: '',
      pass_re: '',
      password_has_error: false,
      valid: false 
    }
    this.onChange = this.onChange.bind(this);
  }

  

  validate = str => str.length > 2;

  checkPass(){
    if (this.state.pass != this.state.pass_re){
      this.setState({ password_has_error: true})
    } else {
      this.setState({ password_has_error: false })
    }
  }
  onChange(event) {
    // this.setState({valid: this.validate(event.target.value)});
    const { name, value } = event.target

    this.setState({
      [name]: value
    }, () => {
      if (name == 'pass' || name == 'pass_re')
        this.checkPass();
    }
  );
  }


  render() {
    let color = this.state.valid ? "green" : "red"
    console.log(color)
    return (
      <div>
        <h2>check password</h2>
        <label htmlFor="pass"></label>
        <input value={this.state.pass} name='pass'id='pass'
          onChange={this.onChange} valid={false} style={{ backgroundColor: color }}
        />
      
        <label htmlFor='pass_re'></label>
        <input value={this.state.pass_re} name='pass_re' id='pass_re'
          onChange={this.onChange} valid={false} style={{ backgroundColor: color }}
        />
      
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
         
      {/* <CounterView counter={5} /> */}
      <Counter />

      <input defaultValue="test" />
      <MyInput />

      <Pass />
    </div>
  );
}

export default App;

