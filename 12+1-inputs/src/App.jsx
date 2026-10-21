import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Inputs Controlados </h1>
      <label htmlFor="login">Login</label>
      <input id="login" type="text" placeholder="Escreva algo..." />
      <button>Entrar</button>
    </div>
  )
}

export default App
