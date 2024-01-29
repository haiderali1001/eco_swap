import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" draggable="false" />
        </a>
      </div>
    </>
  )
}

export default App
