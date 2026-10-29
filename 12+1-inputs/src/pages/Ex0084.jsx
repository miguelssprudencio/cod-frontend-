import { useState } from 'react';

function Ex0084() {
    const [alunos, setAlunos] = useState("");
    const [monitores, setMonitores] = useState("");

    const verificarViagem = () => {
        const a = parseInt(alunos);
        const m = parseInt(monitores);
        if (!isNaN(a) && !isNaN(m)) {
            if (a + m <= 50) {
                return "S";
            }
        }
        return "N";
    };

    return (
        <div className='0084'>
            <h1>Exercício 0084</h1>
            <label htmlFor="alunos">Número de alunos:</label>
            <input
                id="alunos"
                type="text"
                value={alunos}
                onChange={(e) => setAlunos(e.target.value)}
            />
            <label htmlFor="monitores">Número de monitores:</label>
            <input
                id="monitores"
                type="text"
                value={monitores}
                onChange={(e) => setMonitores(e.target.value)}
            />
            <p>{verificarViagem()}</p>
        </div>
    );
}

export default Ex0084