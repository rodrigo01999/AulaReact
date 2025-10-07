import {useState} from "react";
export default function Exercicio2() 
{
  const [fah,setFah]=useState (0);
  const [resultado,setResultado]=useState (0);
  function calcular()
  {
    let celsius 
    celsius = (fah - 32) * 5/9;

  
 setResultado("temperatura em celsius " +celsius);
  }
  

    return (
      <div>
      <h1>Exercicio 2</h1>
    <div className="conteudo">
     
    
     
     <form>
      <p>digite a temperatura em Fahrenheit<br />
      <input type="text" value={fah} onChange={(e)=> setFah(e.target.value)}/>

      </p>
     
      <p>
        <input type="button" value="exercicio 2" onClick={calcular}/>
        </p>

        <p>
          <b>Resultado</b>
           <br/>
           A temperaturam em Fahrenheit é {fah}<br/>
           A temperatura em celsius é {resultado}
        
        </p>

        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>

    </div>
      
    </div>
    );
  }
  