import { useState } from 'react';

function Ex0082() {
    const [n, setN] = useState("");

    const exibirHo = () => {
        const num = parseInt(n);
        if (!isNaN(num) && num > 0) {
            const hoSequence = "Ho ".repeat(num - 1) + "Ho!";
            return hoSequence;
        }
        return "";
    };

    return (
        <div className='0082'>
            <h1>Exercício 0082</h1>
            <label htmlFor="n">Número de vezes que "Ho" deve ser dito:</label>
            <input
                id="n"
                type="text"
                value={n}
                onChange={(e) => setN(e.target.value)}
            />
            <p>{exibirHo()}</p>
        </div>
    );
}

export default Ex0082