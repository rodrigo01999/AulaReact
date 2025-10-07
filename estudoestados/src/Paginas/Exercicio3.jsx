import {useState} from "react";
export default function Exercicio3() 
{
  const [valor,setValor]=useState (0);
  const [taxa,setTaxa]=useState (0);
  const [tempo,setTempo]=useState (0);
  const [resultado,setResultado]=useState (0);
  function calcular()
  {
  let vp;
   vp= valor+(taxa*taxa/100)*tempo;
   setResultado("valor novo é" +vp);
  }
   return (
      <div>
      <h1>Exercicio 3</h1>
      <div className="conteudo">
     
     <form>
      <p>digite o valor da prestação<br />
      <input type="text" value={valor} onChange={(e)=> setValor(e.target.value)} />

      </p>
      <p>digite o valor do juros<br />
      <input type="text" value={taxa} onChange={(e)=> setTaxa(e.target.value)}/>
      
      </p>
      <p>digite o tempo (em dias) de atraso <br />
      <input type="text" value={tempo} onChange={(e)=> setTempo(e.target.value)}/>
      
      </p>
      
      <p>
        <input type="button" value="exercicio 3" onClick={calcular}/>
        </p>
        
        <p>
          <b>Resultado</b>
           <br/>
           O valor da parcela é {resultado}<br/>
          
        
        </p>

        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>
     </div>
      
    </div>
    );
  }
  