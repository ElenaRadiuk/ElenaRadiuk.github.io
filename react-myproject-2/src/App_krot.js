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

const arrRandom = smth => 
    typeof smth === 'number' ? Math.floor(Math.random()*smth) 
                             : Array.isArray(smth) ? arrRandom(smth.length) 
                                                   : Math.random()

const reducer = (state, action) => {
    if (state  ===  undefined){
        return {
            board: [['e','e','e'], 
                    ['e','e','e'], 
                    ['e','e','e']],
            enemies: 0,
            frag: 0
        }
    }
    if (action.type === 'TURN'){
        console.log('turn')
        const getMoleCount = () => state.board
                                        .flat()
                                        .filter(item => item === 'm').length

        const findRandomCell = cellType => {
            let row, col;
            do {
                row = arrRandom(state.board)
                col = arrRandom(state.board)
            }while(state.board[row][col] !== cellType)
            return {row, col}
        }

        const [find, change] = (getMoleCount() > 3) ? ['m', 'e'] : ['e', 'm']

        const {row, col} = findRandomCell(find)
        console.log(find, change)
        const board      = state.board
        board[row][col]  = change
        return {
            ...state,
            board: [...board],
            enemies: find === 'e' ? state.enemies +1 : state.enemies
        }
    }
    if (action.type === 'HIT'){
        const {row, col} = action
        if (state.board[row][col] === 'm' ){
            const board      = state.board
            board[row][col]  = 'e'
            return {
                ...state,
                board: [...board],
                frag: state.frag +1
            }
        }
    }
    return state;
}

const store = createStore(reducer)

setInterval(() => store.dispatch({type: 'TURN'}), 1000) 
//setInterval(() => store.dispatch({type: 'HIT', col: 1, row: 1}),600) 

let Board = ({board, onHit}) =>
<table style={{width: "100%", textAlign: 'center', fontSize: '2em'}}>
    {console.log(board)}
    {board && board.length > 0 && board.map((row, rowNumber) => <tr>
            {row.map((cell, colNumber) => <td style={{border: '2px solid'}}
                                 onClick={() => onHit(rowNumber, colNumber)}
                                 >{cell}</td>)}
        </tr>)}
</table>

const actionHit   = (row, col) => ({type: 'HIT', row, col})

Board = connect(state => ({board: state.board}),
                          {onHit: actionHit})(Board)

const NumberTablo = ({num}) =>
<div style={{fontSize: "5em", backgroundColor: 'black', color: '#FFA0A0'}}>
    {num}
</div>

const EnemyNumber = connect(st => ({num: st.enemies}))(NumberTablo)
const FragNumber  = connect(st => ({num: st.frag}))(NumberTablo)



function App(){
    return (
        <Provider store={store}>
            BOARD:
            <Board />
            <EnemyNumber />
            <FragNumber />
        </Provider>
    )
}

export default App;
