import './App.css'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Votar from './components/Votar'
import Pesar from './components/Pesar'
import Preco from './components/Preco'

function App() {

  return (
    <div className='app'>
      <h1>03 estados e componentes</h1>
      <Jogo />
      <Pousada />
      <Votar />
      <Pesar />
      <Preco />
    </div>
  )
}

export default App
