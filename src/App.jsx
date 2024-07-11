//jsx files are combination of js and html , so you can see you can return a html inside a function

import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return ( //the thing that is getting rendered in our website is from this return part inside the function app if you type hi there then it will show just hi there instead of any buttons 
    <div> 
        <Button count={count} setCount={setCount}></Button>      
    </div>
  )
}

function Button(props){
  function onButtonClick() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onButtonClick}>Counter {props.count}</button>
}

export default App
