import React from 'react'
import { useState } from 'react';

function Ex0081() {
    const [desejada, setDesejada] = useState("");
    const [lida, setLida] = useState("");
    const [diferenca, setDiferenca] = useState(null);

    const calcularDiferenca = () => {
        const n = parseInt(desejada);
        const m = parseInt(lida);
        if (!isNaN(n) && !isNaN(m)) {
            setDiferenca(n - m);
        }
    };

  return (
    <div className='0081'>
        <h1>Exercício 0081</h1>
        <label htmlFor="desejada">Pressão Desejada:</label>
        <input
            id="desejada"
            type="text"
            value={desejada}
            onChange={(e) => setDesejada(e.target.value)}
        />
        <label htmlFor="lida">Pressão Lida:</label>
        <input
            id="lida"
            type="text"
            value={lida}
            onChange={(e) => setLida(e.target.value)}
        />
        <button onClick={calcularDiferenca}>Calcular Diferença</button>
        {diferenca !== null && (
            <p>A diferença é: {diferenca}</p>
        )}
    </div>
  )
}

export default Ex0081