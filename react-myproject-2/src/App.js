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


//check input pass
class Pass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
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
      console.log('true')
    } else {
      this.setState({ password_has_error: false })
      console.log('false')
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

//chat
class ChatInputs extends React.Component {
  constructor(props){
    super(props);
    this.state = {nick:'', message:''};

    this.onChangeNick = this.onChangeNick.bind(this);
    this.onChangeMes = this.onChangeMes.bind(this);
    this.onSend = this.onSend.bind(this);
    
  }
  onChangeNick(event){
    this.setState({nick: event.target.value})
  }
  onChangeMes(event){
    this.setState({message: event.target.value})
  }
  onSend(){
    this.props.onSend(this.state.nick, this.state.message)
    
    // console.log(this.state.nick)
  }
  render(){
    return(
      <div>
        <label>Nick</label>
        <input type="text" value={this.state.nick} onChange={this.onChangeNick}/>
        <label>Message</label>
        <input type="text" value={this.state.message} onChange={this.onChangeMes}/>
        <button onClick={this.onSend}>Send</button>
      </div>
    )
  }
}

function jsonPost(url, data)
{
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();   
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                resolve(JSON.parse(x.responseText))
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
            }
        }
    })
}

function Message(props){
  return(
    <div className="message"> 
      <div>{props.nick}</div>
      <div>{props.message}</div>
    </div>
  )
}

function ChatHistory(props){
  const messageItem = props.history.map(itemMes => <Message nick={itemMes.nick} message={itemMes.message}></Message>)
  // console.log(messageItem)
  return(
    <>
    {messageItem}</>
  )
}

class HistoryReader extends Component {
  state = {history:[]}

  componentDidMount(){
    this.interval = setInterval(() => jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId: 0})
      .then(data => this.setState({history:data.data})),2000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div>
      <ChatHistory history={this.state.history} />
      </div>
    )
  }
}

//ref ссылка 
class LoginForm extends Component {
  render(){
    return(
      <div>
      <input type="text" ref={domElement => this.login=domElement}/>
      <input type="password" ref={domElement => this.password=domElement}/>
      <button onClick={()=>console.log(this.login.value)}>login</button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <footer>
        test footer
      </footer>

      <CounterView counter={5} />
      <Counter/>
      
      <input defaultValue="test" />
      <MyInput/>

      <Pass />

      {/* <ChatInputs onSend={(nick, message)=>(jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: nick, message: message}))}/> */}

      {/* <HistoryReader /> */}
    </div>
  );
}

export default App;
