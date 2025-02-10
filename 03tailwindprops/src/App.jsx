import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myOject ={
    Username: "Niva Rani Awale",
    Age: 22,
    Gender : "Female"
  }
  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-pink-400 text-white p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card Username="chai aur Code" />
      <Card Username="Niva" btntext = "visit me"/>

      
    </>
  )
}

export default App
