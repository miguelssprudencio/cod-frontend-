import { useState } from 'react';

function Ex0083() {
    const [notaA, setNotaA] = useState("");
    const [notaB, setNotaB] = useState("");

    const calcularResultado = () => {
        const nA = parseFloat(notaA);
        const nB = parseFloat(notaB);
        if (!isNaN(nA) && !isNaN(nB)) {
            const media = (nA + nB) / 2;
            if (media >= 7) {
                return "Aprovado";
            } else if (media >= 4) {
                return "Recuperacao";
            } else {
                return "Reprovado";
            }
        }
        return "";
    };

    return (
        <div className='0083'>
            <h1>Exercício 0083</h1>
            <label htmlFor="notaA">Nota da Primeira Prova:</label>
            <input
                id="notaA"
                type="text"
                value={notaA}
                onChange={(e) => setNotaA(e.target.value)}
            />
            <label htmlFor="notaB">Nota da Segunda Prova:</label>
            <input
                id="notaB"
                type="text"
                value={notaB}
                onChange={(e) => setNotaB(e.target.value)}
            />
            <p>{calcularResultado()}</p>
        </div>
    );
}

export default Ex0083