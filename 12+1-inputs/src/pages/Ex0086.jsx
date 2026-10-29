import { useState } from 'react';

function Ex0086() {
    const [combustivel, setCombustivel] = useState("");

    const imprimirSaida = () => {
        const tipo = parseInt(combustivel);
        if (!isNaN(tipo)) {
            let output = "MUITO OBRIGADO\n";
    
            return output;
        }
        return "";
    };

    return (
        <div className='0086'>
            <h1>Exercício 0086</h1>
            <label htmlFor="combustivel">Tipo de combustível:</label>
            <input
                id="combustivel"
                type="text"
                value={combustivel}
                onChange={(e) => setCombustivel(e.target.value)}
            />
            <p>{imprimirSaida()}</p>
        </div>
    );
}

export default Ex0086