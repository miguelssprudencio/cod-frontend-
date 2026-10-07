import {useState} from "react"

function Pesar() {
  const [resultado, setResultado] = useState(0);

  function pesar() {
    let altura = Number(prompt("Digite sua altura (em metros):"));
    let genero = prompt("Digite seu gênero (M/F):");
    if  (genero === "F") {
        setResultado("Seu peso ideal é: " + ((62.1 * altura) - 44.7).toFixed(2) + " kg");
    } else if (genero === "M") {
        setResultado("Seu peso ideal é: " + ((72.7 * altura) - 58).toFixed(2) + " kg");
    }

  }
  
  return (
    <div className="Pesar">
        <h2>Qual é o meu peso ideal?</h2>
        <button onClick={pesar}>
          Calcular
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Pesar