import {useState} from "react"

function Ganso2() {
    const [resultado, setResultado] = useState("");
  function ganso2() {
    let sabeNadar = prompt("Sabe nadar? (true/false)") === "true";
    let idade = Number(prompt("Digite a idade:"));
    let temRecomendacao = prompt("Tem recomendação? (true/false)") === "true";

    if (sabeNadar && idade > 16) {
      setResultado("Aprovado para o navio!");
    } else if (!sabeNadar && temRecomendacao && idade >= 14) {
      setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
    } else {
      setResultado("Reprovado. Volte quando estiver mais preparado para o mar.");
    }
  }
  
  return (
    <div className="Ganso2">
        <h2>Capitão Ganso 2</h2>
        <button onClick={ganso2}>
          Capitão Ganso 2
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Ganso2