import {useState} from "react"

function Denis1() {
    const [resultado, setResultado] = useState("");

  function denis1() {
    let emManutencao = confirm("Há manutenção ativa?");
    let emergenciaAtiva = confirm("O nível de emergência do parque está alto?");

    if (!emManutencao && !emergenciaAtiva) {
      setResultado("Transporte liberado para uso.");
    } else {
      setResultado("Transporte indisponível por motivo de segurança.");
    }
  }
  
  return (
    <div className="Denis1">
        <h2>Denis1</h2>
        <button onClick={denis1}>
          Denis1
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Denis1