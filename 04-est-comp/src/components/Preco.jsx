import {useState} from "react"

function Preco() {
  const [resultado, setResultado] = useState(0);

  function preco() {
    let quantidade = Number(prompt("Digite a quantidade de maças que deseja comprar:"));
    if (quantidade < 12) {
      setResultado("O preço total é: R$ " + (quantidade * 0.30).toFixed(2));
    } else if (quantidade >= 12) {
      setResultado("O preço total é: R$ " + (quantidade * 0.25).toFixed(2));
    }
  }
  
  return (
    <div className="Preco">
        <h2>Comprar Maçãs</h2>
        <button onClick={preco}>
          Comprar
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Preco