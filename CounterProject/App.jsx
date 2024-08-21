import { useState } from 'react'
 import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function addvalue(){
    if(count<20){
      setCount(count+1);
    }
  }

  function removevalue(){
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <p>counter value{count}</p>

      <button onClick={addvalue}>add value {count}</button>
       <br />
      <button onClick={removevalue}>remove value {count}</button>
    </>
  )
}

export default App
