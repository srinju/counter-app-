//jsx files are combination of js and xml , so you can see you can return a html inside a function

import { useState } from 'react' //this is used to define the state , if we use useState then react will watch the state
import './App.css'
import React from 'react'

function App() { //this function defines our initial state and return/renders  a div that is the button component
  //what the count and setcount is that setcount lets you set the count you call the count or do whatever you need to do in the count but call it inside setcount
  const [count, setCount] = useState(0) // this is the initial state....react uses array destructuring . so count and setcount are the two things that the React.useState(0) function calls returns you . first value of the array you put on the count and the second value of the array you put on the setCount

  return ( //the thing that is getting rendered in our website is from this return part inside the function app if you type hi there then it will show just hi there instead of any buttons 
    <div> 
        <CustomButton count={count} setCount={setCount}></CustomButton> <br></br>
        <CustomButton count={count + 1} setCount={setCount}></CustomButton> <br></br>
        <CustomButton count={count + 10} setCount={setCount}></CustomButton> <br></br>
        <CustomButton count={count + 100} setCount={setCount}></CustomButton>      
    </div>
  )
}

//component >>
//try to look at the code you will inderstand

function CustomButton(props){

  function onClickHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button> 
}


export default App
