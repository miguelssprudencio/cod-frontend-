import './App.css'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Votar from './components/Votar'
import Pesar from './components/Pesar'
import Preco from './components/Preco'
import Ganso from './components/Ganso'
import Ganso2 from './components/Ganso2'
import Sarumano from './components/Sarumano'
import Sarumano2 from './components/Sarumano2'

function App() {

  return (
    <div className='app'>
      <h1>03 estados e componentes</h1>

      <h2>#0030</h2>

      <hr />

      <h2>#0027.sq05</h2>
      <Jogo />
      <Pousada />
      <Votar />
      <Pesar />
      <Preco />
      <Ganso />
      <Ganso2 />
      <Sarumano />
      <Sarumano2 />
    </div>
  )
}

export default App
