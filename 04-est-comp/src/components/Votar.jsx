import {useState} from "react"

function Votar() {
  const [resultado, setResultado] = useState(0);

  function votar() {
    let idade = Number(prompt("Digite seu peso (em kg):"));
    if (idade < 16) {
      setResultado("Não pode votar.");
    } else if (idade >=16 && idade <=17) {
      setResultado("Você pode votar, mas não é obrigatório. (Voto facultativo)");
    } else if (idade >= 18 && idade < 65) {
      setResultado("Você é obrigado a votar.");
    }
    else {
      setResultado("Você pode votar, mas não é obrigatório. (Voto facultativo)");
    }

  }
  
  return (
    <div className="Votar">
        <h2>Posso Votar?</h2>
        <button onClick={votar}>
          Votar
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Votar