import { useState } from 'react'
import './App.css'
import Oracao1 from './components/Oracao1'
import Oracao2 from './components/Oracao2'
import Oracao3 from './components/Oracao3'
import Oracao4 from './components/Oracao4'
import Oracao5 from './components/Oracao5'
import Oracao6 from './components/Oracao6'
import Oracao7 from './components/Oracao7'
import Oracao8 from './components/Oracao8'
import Oracao9 from './components/Oracao9'
import Oracao10 from './components/Oracao10'

function App() {
  const [pagina, setPagina] = useState(0)

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPagina(0)}>Oração do desenvolvedor Web</button>
        <button onClick={() => setPagina(1)}>Oração do Frontend</button>
        <button onClick={() => setPagina(2)}>Oração do Backend</button>
        <button onClick={() => setPagina(3)}>Oração do Fullstack</button>
        <button onClick={() => setPagina(4)}>Oração do  deploy</button>
        <button onClick={() => setPagina(5)}>Oração do programador</button>
        <button onClick={() => setPagina(6)}>Oração do estudante</button>
        <button onClick={() => setPagina(7)}>Oração do Resiliente</button>
        <button onClick={() => setPagina(8)}>Oração do  aprendiz</button>
        <button onClick={() => setPagina(9)}>Oração do #devcansado</button>
      </nav>
      <h1>Orações para Desenvolvedores</h1>
      { pagina===0 && <Oracao1 /> }
      { pagina===1 && <Oracao2 /> }
      { pagina===2 && <Oracao3 /> }
      { pagina===3 && <Oracao4 /> }
      { pagina===4 && <Oracao5 /> }
      { pagina===5 && <Oracao6 /> }
      { pagina===6 && <Oracao7 /> }
      { pagina===7 && <Oracao8 /> }
      { pagina===8 && <Oracao9 /> }
      { pagina===9 && <Oracao10 /> }
    
    </div>
  )
}

export default App
