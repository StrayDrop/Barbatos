//REACT CORE
import React, { useState, createContext, useContext, useReducer, useMemo, useCallback } from 'react'

//MATERIAL UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

//CSS
//import logo from './logo.svg'
import './App.css'
//import { render } from 'react-dom';

//ABBREVIATION of Standard built-in Objects (省略語の登録)
//MEMO: 標準ライブラリ Math を省略
const [ random , floor ] = [ Math.random, Math.floor ]

//デザイン素体(export時にwithStylesでMIXさせる)
const styleRoot = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  incrementButton: {
    margin: 100,
    color: "#0000dd",
    backgroundColor: "#ff1111"
  },
}

//CONTEXT
const AppContext = createContext(()=>{})

//TEST PRIVATE FIELD
class Test extends React.Component {
  
  
  static firstAge

  num = 1
  _xValue = 3
  _age = 18

  //static _x
  
  //#increaseAge() {
  //  this.#age++
  //}

  increaseAge() {
    this._age++
  }

  // birthday() {
  //   this.#increaseAge()
  //   alert("Happy Birthday!")
  // }
  
  // _xの宣言は自動でされるので不要
  get _x() { return this._xValue }
  set _x(value) { this._xValue = value }

  render(){
    
    return ( 
     <p>{this._x}</p>
    )
  }
}

//COMPONENT
const App = ( /* props */ ) => {

  
  //REDUCER
  const reducer = ({x}, action) => {
    switch(action) {
      case 'increment' : 
        return ({ x: x + 1 })
      case 'decrement' : 
        return ({ x: x - 1 })

    }

  }

  //INIT
  const init = (initialNumber) => (
    {
      x : initialNumber // MEMO: HUERISTIC: なんか[initialNumber]って書いたら数字じゃなくて文字列として認識された、、、、(flat化するときに変になるぽい？？？)
    }
  )

  const _initialNumber = 0

  //STATE
  const [ state, dispatch ] = useReducer(reducer, _initialNumber, init);
  //const [ stateTmp, update ] = useState(0);
  
  //COUNTER BUTTON
  const Buttons = ( /* props */ ) => {
    
    //props resolution
    //const { children, className, ...others } = props

    const _dispatch = useContext(AppContext)
    
    const _hashtags = ["#love","#instagood","#photooftheday","#fashion","#beautiful","#happy","#cute","#tbt","#like4like","#followme","#picoftheday","#follow","#me","#selfie","#summer","#art","#instadaily","#friends","#repost","#nature","#girl","#fun","#style","#smile","#food"]
    const _animals = ["爆","🐯","🐹","🦊","🐵","🐸","🐦","🐺","🦎","🦋","🐡","🐟","🐬","🐳","🐋","🦈","🐪","🦏","🐘","🦍","🦓","🐆","🐅","🐊","🦒","🐃","🐂","🐎","🐖","🐏","🐑","🐐","🐔","🐧","🔥","🍄"]
    const _actions = ["increment","decrement"]

    let _rand=0
    
    _rand = floor( random()*_actions.length )
    console.log("MEMO : "+_rand)
    
    const _action = _actions[_rand]

    console.log("ACT : "+_action)

    const _attributes = {
      onClick : ()=>{ _dispatch(_action) },
      variant : "outlined", 
      style : { margin:10, backgroundColor:"rgba(0,0,0,0.02)", color:"rgb(176, 190, 197)", fontSize:15 },
    }

    const arrays = [ _animals, _hashtags ]

    const buttons = arrays.flat().map( 
      lbl => 
      <Button {..._attributes} key={lbl.toString()}>
        {lbl}
      </Button>
    )

    console.log("Buttons Rerender")

    return <>{buttons}</>
    
  }

  return (
    <div className="App">
    {/*
      <header className="App-header">
      </header>
    */}

      <>      
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton classes={styleRoot.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="headline" color="inherit" style={{fontSize:20}}>
              GW明け マジ眠すぎ問題
            </Typography>
          </Toolbar>
        </AppBar>
        

        <div style={{margin:10}}></div>
        <Test/>
        <div style={{margin:10}}><Typography variant="display1" style={{fontSize:17}}>動物をペチペチさわった回数だけ<br/>きっと元気になれる</Typography></div>

        <div style={{margin:10}}><Button variant="outlined">{state.x}撃</Button></div>
        
        
        <AppContext.Provider value={dispatch}>
          <Buttons/>
        </AppContext.Provider>
      </>

    </div>
  )
}

export default App 