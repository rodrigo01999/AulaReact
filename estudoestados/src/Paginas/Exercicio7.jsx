import {useState} from "react";
export default function Exercicio7() 
{
  const [m1,setM1]=useState (0);
  const [m2,setM2]=useState (0);
  const [m3,setM3]=useState (0);
  const [m,setM]=useState (0);
  function calcular()
  {
    let valor =Number(m1)+Number(m2)+Number (m3);
    let m= (valor/3)
  
 setM(" é " +m);
  }
    return (
      <div>
      <h1>Exercicio 7</h1>
      <div className="conteudo">
     
     <form>
      <p>digite a nota 1<br />
      <input type="text" value={m1} onChange={(e)=> setM1(e.target.value)} />

      </p>
      <p>digite a nota 2<br />
      <input type="text" value={m2} onChange={(e)=> setM2(e.target.value)} />
      
      </p>
      <p>digite a nota 3 <br />
      <input type="text" value={m3} onChange={(e)=> setM3(e.target.value)} />
      
      </p>
      
      <p>
        <input type="button" value="exercicio 7"onClick={calcular}/>
        </p>
        <p>
          <b>Resultado</b>
           <br/>
           A nota 1 é  {m1}<br/>
           A nota 2 é  {m2}<br/>
           A nota 3 é  {m3}<br/>
           A média final é  {m}<br/>
           
           
        </p>
        
        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>
     </div>
      
    </div>
    );
  }