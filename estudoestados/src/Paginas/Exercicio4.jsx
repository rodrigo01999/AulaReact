import {useState} from "react";
export default function Exercicio4() 
{
  const [base,setBase]=useState (0);
  const [altura,setAltura]=useState (0);
  const [area,setArea]=useState (0);
  function calcular()
  {
  
    let area=(base*altura)/2;

  
 setArea("area do triangulo" +area);
  }
  
    return (
      <div>
      <h1>Exercicio 4</h1>
    <div className="conteudo">
     
    
     
     <form>
      <p>digite o valor da base<br />
      <input type="text" value={base} onChange={(e)=> setBase(e.target.value)}/>

      </p>
      <p>digite o valor da altura<br />
      <input type="text" value={altura} onChange={(e)=> setAltura(e.target.value)} />

      </p>
     
      <p>
        <input type="button" value="exercicio 4"onClick={calcular}/>
        </p>
        <p>
          <b>Resultado</b>
           <br/>
           A base do triangulo é  {base}<br/>
           A altura do triangulo é  {altura}<br/>
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
  