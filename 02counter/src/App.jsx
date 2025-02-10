import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    // counter = counter + 1
    
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("Counter cannot be more than 20")
    }
  }

  const removeValue = () => {
    
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("counter cannot be negative")
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{counter}</h2>

      <button
      onClick = {addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
