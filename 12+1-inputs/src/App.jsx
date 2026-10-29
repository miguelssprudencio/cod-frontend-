import { useState } from 'react'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Ex0081 from './pages/Ex0081'
import Ex0082 from './pages/Ex0082'
import Ex0083 from './pages/Ex0083'
import Ex0084 from './pages/Ex0084'
import Ex0085 from './pages/Ex0085'
import Ex0086 from './pages/Ex0086'
import Ex0087 from './pages/Ex0087'
import Ex0088 from './pages/Ex0088'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Demo />
      <Home />
      <Ex0081 />
      <Ex0082 />
      <Ex0083 />
      <Ex0084 />
      <Ex0085 />
      <Ex0086 />
      <Ex0087 />
      <Ex0088 />  
    </div>
  )
}

export default App
