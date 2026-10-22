import React from 'react'
import { useState } from 'react'

function Home() {
    const [inputLogin, setinputLogin] = useState('')
    function efetuarLogin() {
        if (inputLogin == 'admin') {
            alert('Login efetuado com sucesso!')
        }else{
        alert('Login ou senha incorretos!')
        }
        }

  return (
    <div className='home'>
        <h1>Inputs Controlados </h1>
      <label htmlFor="login">Login</label>
      <input id="login" type="text" placeholder="Escreva algo..." 
      value={inputLogin} 
      onChange={(e) => setinputLogin(e.target.value)} 
      />
      <p>
        { inputLogin }
      </p>
      <button onClick={efetuarLogin}>Entrar</button>
    </div>
  )
}

export default Home