import {useState} from "react"

function Jogo() {
  const [resultado, setResultado] = useState(0);

  function classificar() {
    let pontos = Number(prompt("Digite a pontuação:"));
    if (pontos <= 10) {
      setResultado("Mogo o betinha...");
    } else if (pontos <= 100) {
      setResultado("Mantenha a esperança, o Sol nasce até pra cachorro...");
    } else if (pontos <=200) {
      setResultado("Supimpa!");
    } else {
      setResultado("Tente novamente.");
    }

  }
  
  return (
    <div className="jogo">
        <h2>Jogo do Mano Juca.</h2>
        <button onClick={classificar}>
          Classificar
        </button>
       <p>{resultado}</p>
      </div>
  )
}
export default Jogo
