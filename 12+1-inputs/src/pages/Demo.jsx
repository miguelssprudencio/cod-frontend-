import React from "react";
import { useState } from "react";

function Demo() {
  const [inputNota1, setinputNota1] = useState("");
  const [inputNota2, setinputNota2] = useState("");
  const [resultado, setresultado] = useState("Digite sua nota e aperte o botão");

  function calcularMedia() {
    const nota1 = Number(inputNota1) || 0;
    const nota2 = Number(inputNota2) || 0;
    const media = (nota1 + nota2) / 2;
    setresultado(`A média é: ${media.toFixed(2)}`);
  }

  return (
    <div className="demo">
      <h1>Demo - médias</h1>
      <label htmlFor="nota1">Nota 1</label>
      <input
        id="nota1"
        type="text"
        placeholder="Escreva algo..."
        value={inputNota1}
        onChange={(e) => setinputNota1(e.target.value)}
      />
      <label htmlFor="nota2">Nota 2</label>
      <input
        id="nota2"
        type="text"
        placeholder="Escreva algo..."
        value={inputNota2}
        onChange={(e) => setinputNota2(e.target.value)}
      />
      <button onClick={calcularMedia}>Calcular Média</button>
      <p>
        {resultado}
      </p>
    </div>
  );
}

export default Demo;
