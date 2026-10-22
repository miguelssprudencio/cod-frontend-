import React from 'react'
import { useState } from 'react';
// Encher os pneus do carro deve ser uma tarefa diária para todos os motoristas. Para isso, os postos de gasolina disponibilizam bombas de ar. A maioria das bombas atuais é eletrônica, permitindo que o motorista selecione a pressão desejada em um teclado. Quando conectada ao pneu, a bomba primeiro lê a pressão atual e calcula a diferença entre a pressão desejada e a pressão lida. Com essa diferença, ela esvazia ou enche o pneu para atingir a pressão correta.

// Sua ajuda foi solicitada para desenvolver o programa da próxima bomba da SBC - Sistemas de Bombeamento Computadorizados.

// Escreva um programa que, dada a pressão desejada inserida pelo motorista e a pressão do pneu lida pela bomba, indique a diferença entre a pressão desejada e a pressão lida.

// Entrada
// A primeira linha da entrada contém um número inteiro N que indica a pressão desejada pelo motorista (1 ≤ N ≤ 40). A segunda linha contém um número inteiro M que indica a pressão lida pela bomba (1 ≤ M ≤ 40).

// Saída
// Seu programa deve imprimir uma única linha, contendo a diferença entre a pressão desejada e a pressão lida.

 
// Entrada de exemplo	Exemplo de saída
// 30

// 18

// 12

 
// 27

// 27

// 0

 
// 27

// 30

// -3
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