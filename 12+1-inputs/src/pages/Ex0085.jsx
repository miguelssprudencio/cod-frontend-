import { useState } from 'react';

function Ex0085() {
    const [n, setN] = useState("");

    const imprimirSaida = () => {
        const num = parseInt(n);
        if (!isNaN(num)) {
            let output = "";
            for (let i = 1; i <= num; i++) {
                output += `${i} ${i + 1} ${i + 2} BOMBA\n`;
            }
            return output;
        }
        return "";
    };

    return (
        <div className='0085'>
            <h1>Exercício 0085</h1>
            <label htmlFor="n">Número de linhas:</label>
            <input
                id="n"
                type="text"
                value={n}
                onChange={(e) => setN(e.target.value)}
            />
            <p>{imprimirSaida()}</p>
        </div>
    );
}

export default Ex0085