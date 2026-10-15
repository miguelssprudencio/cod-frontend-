import {useState} from "react"

function Sarumano3() {
    const [resultado, setResultado] = useState("");
  function sarumano3() {
    let somFuncionando = confirm("O sistema de som está funcionando?");
    let figurinoCompleto = confirm("O figurino está completo?");

    if (somFuncionando && figurinoCompleto) {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
    } else if (!somFuncionando && figurinoCompleto) {
      setResultado("Sem som. Realizar apresentação alternativa no salão.");
    } else if (somFuncionando && !figurinoCompleto) {
      setResultado("Faltando parte do figurino. Te vira no improviso!");
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
    }
  }
  
  return (
    <div className="Sarumano3">
        <h2>Capitão Sarumano3</h2>
        <button onClick={sarumano3}>
          Capitão Sarumano3
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Sarumano3