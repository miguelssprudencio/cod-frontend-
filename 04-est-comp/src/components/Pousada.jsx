import {useState} from "react"

function Pousada() {

    const [resultado, setDiarias] = useState(0);
  
function diarias() {
    let dias = Number(prompt("Digite a quantidade das diárias:"));
    if (dias <= 5) {
      setDiarias("O valor da diária é de R$ 100,00.");
    } else if (dias <= 10) {
      setDiarias("O valor da diária é de R$ 90,00.");
    } else if (dias >= 11){
      setDiarias("O valor da diária é de R$ 80,00.");
    }
    let bruto = dias * 100;
    let desconto = 0;
    if (dias > 10) {
      desconto = bruto * 0.1;
    }
    let liquido = bruto - desconto;
    setDiarias(`Valor bruto: R$ ${bruto.toFixed(2)}\nDesconto: R$ ${desconto.toFixed(2)}\nValor líquido: R$ ${liquido.toFixed(2)}`);
}
  return (
    <div className="diarias">
        <h2>Valor da Diária</h2>
        
       <button onClick={diarias}>
          Diárias
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Pousada