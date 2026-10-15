import {useState} from "react"

function Denis2() {
    const [resultado, setResultado] = useState("");

  function denis2() {
    let crachaValido = confirm("O crachá está válido?");
    let digitalReconhecida = confirm("A digital foi reconhecida?");

    if (crachaValido && digitalReconhecida) {
      setResultado("Acesso permitido.");
    } else {
      setResultado("Acesso negado.");
    }
  }
  
  return (
    <div className="Denis2">
        <h2>Denis2</h2>
        <button onClick={denis2}>
          Denis2
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Denis2