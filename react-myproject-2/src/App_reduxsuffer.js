import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import MainPage from "./components/pages/PageMain.js";
import UserPage from "./components/pages/PageUser.js";

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore((state, action) => { //единственный редьюсер данного хранилища
    if (state === undefined){ //redux запускает редьюсер хотя бы раз, что бы инициализировать хранилище
        return {counter: 0};  //обязательно вернуть новый объект, а не изменить текущий state
    }
    if (action.type === 'COUNTER_INC'){ //в каждом action должен быть type
        return {counter: state.counter +1} //создаем новый объект базируясь на данных из предыдущего состояния
    }
    if (action.type === 'COUNTER_ADD'){ //в каждом action должен быть type
        return {counter: state.counter +action.count} //создаем новый объект базируясь на данных из предыдущего состояния
    }
    if (action.type === 'COUNTER_DEC'){
        return {counter: state.counter -1}
    }
    return state; //редьюсеров может быть несколько, в таком случае вызываются все редьюсеры, но далеко не всегда action.type будет относится к этому редьюсеру. Тогда редьюсер должен вернуть state как есть. 
})

store.subscribe(()=> console.log(store.getState())) // подписка на обновления store


const actionInc = () => ({ type: 'COUNTER_INC' })
const actionDec = () => ({ type: 'COUNTER_DEC' })
const actionAdd = count => ({ type: 'COUNTER_ADD', count })
setInterval( () => store.dispatch(actionInc()), 3000)

const CounterView = ({c, inc, dec}) =>
<div>
   <button onClick={dec}>-</button>{c}<button onClick={inc}>+</button>
</div>

const mapStateToProps = state => ({c: state.counter})
const mapDispatchToProps = {inc: actionInc,
                            dec: actionDec}

class Counter extends React.Component {
    state = {...store.getState()}


    componentDidMount(){
        store.subscribe(() => this.setState({...store.getState()}))
        this.wrappers = {}
        for (let [prop, actionCreator] of Object.entries(mapDispatchToProps)){
            this.wrappers[prop] = (...params) => store.dispatch(actionCreator(...params))
        }

        console.log(this.wrappers)
    }

    render(){
        return (
            <CounterView {...mapStateToProps(this.state)} 
                         {...this.wrappers}/>
        )
    }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterView)



function App(){
    return (
        <Provider store={store}>
            <Counter />
            <ConnectedCounter />
        </Provider>
    )
}

export default App;
