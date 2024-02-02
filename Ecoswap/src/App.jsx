import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
