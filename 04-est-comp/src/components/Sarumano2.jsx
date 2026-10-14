import {useState} from "react"

function Sarumano2() {
    const [resultado, setResultado] = useState("");

  function sarumano2() {
    let estaGripado = confirm("Sarumano está gripado?");
    let tempoViagem = Number(prompt("Digite o tempo de viagem (minutos):"));

    if (!estaGripado && tempoViagem < 45) {
      setResultado("Viagem autorizada. Rumo ao show!");
    } else {
      setResultado("Deslocamento inviável. Melhor recusar este evento.");
    }
  }
  
  return (
    <div className="Sarumano2">
        <h2>Capitão Sarumano2</h2>
        <button onClick={sarumano2}>
          Capitão Sarumano2
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Sarumano2