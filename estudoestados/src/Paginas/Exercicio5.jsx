import {useState} from "react";
export default function Exercicio5() 
{
  const [lado,setLado]=useState (0);
  const [area,setArea]=useState (0);
  function calcular()
  {
  
    let area=(lado*lado);

  
 setArea("area do quadrado é " +area);
  }
    return (
      <div>
      <h1>Exercicio 5</h1>
    <div className="conteudo">
     
    
     
     <form>
      <p>digite o valor do lado<br />
      <input type="text" value={lado} onChange={(e)=> setLado(e.target.value)} />

      </p>
     
      <p>
        <input type="button" value="exercicio 5"onClick={calcular}/>
        </p>
        <p>
          <b>Resultado</b>
           <br/>
           O lado do quadrado é  {lado}<br/>
           A area do triangulo é  {area}<br/>
           
        </p>

        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>

    </div>
      
    </div>
    );
  }