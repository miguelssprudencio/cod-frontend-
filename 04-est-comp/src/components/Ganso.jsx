import {useState} from "react"



function Ganso() {
    const [resultado, setResultado] = useState("");
  function ganso() {
    let numeroMarujos = Number(prompt("Digite o número de marujos:"));
    let quantidadeDeComida = Number(prompt("Digite a quantidade de comida (em kg):"));

    if (numeroMarujos >= 10 && quantidadeDeComida >= numeroMarujos * 1.5) {
      setResultado("Provisões suficientes. Rumo ao horizonte!");
    } else {
      setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje.");
    }
  }
  
  return (
    <div className="Ganso">
        <h2>Capitão Ganso</h2>
        <button onClick={ganso}>
          Capitão Ganso
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Ganso