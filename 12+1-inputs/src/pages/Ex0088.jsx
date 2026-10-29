import { useState } from 'react';

function Ex0088() {
    const [precoAntigo, setPrecoAntigo] = useState("");
    const [precoNovo, setPrecoNovo] = useState("");

    const calcularAumento = () => {
        const antigo = parseFloat(precoAntigo.replace(",", "."));
        const novo = parseFloat(precoNovo.replace(",", "."));

        if (!isNaN(antigo) && !isNaN(novo) && antigo > 0) {
            const aumento = ((novo - antigo) / antigo) * 100;
            return `${aumento.toFixed(2)}%`;
        }
        return "0,00%";
    };

    return (
        <div className='0088'>
            <h1>Exercício 0088</h1>
            <label htmlFor="precoAntigo">Preço Antigo:</label>
            <input
                id="precoAntigo"
                type="text"
                value={precoAntigo}
                onChange={(e) => setPrecoAntigo(e.target.value)}
            />
            <label htmlFor="precoNovo">Preço Novo:</label>
            <input
                id="precoNovo"
                type="text"
                value={precoNovo}
                onChange={(e) => setPrecoNovo(e.target.value)}
            />
            <p>Aumento: {calcularAumento()}</p>
        </div>
    );
}

export default Ex0088