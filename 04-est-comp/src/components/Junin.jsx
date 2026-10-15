import {useState} from "react"

function Junin() {
    const [resultado, setResultado] = useState("");

  function junin() {
    let visitantesNaArea = 0;
    let horaAtual = 19;
    if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual > 18)) {
      setResultado("Liberação autorizada. Abrindo jaula.");
    } else {
      setResultado("Liberação negada. Área em uso ou fora do horário permitido.");
    }
  }
  
  return (
    <div className="Junin">
        <h2>Junin</h2>
        <button onClick={junin}>
          Junin
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Junin