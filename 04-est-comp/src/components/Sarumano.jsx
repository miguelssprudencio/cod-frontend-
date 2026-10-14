import {useState} from "react"

function Sarumano() {
    const [resultado, setResultado] = useState("");
  function sarumano() {
    let criancasPequenas = Number(prompt("Digite o número de crianças pequenas:"));
    let velocidadeVento = Number(prompt("Digite a velocidade do vento (m/s):"));

    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setResultado("Fumaça bloqueada. Aguardar condições ideais.");
    }
  }
  
  return (
    <div className="Sarumano">
        <h2>Capitão Sarumano</h2>
        <button onClick={sarumano}>
          Capitão Sarumano
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Sarumano