import {useState} from "react";
export default function Exercicio6() 
{
  const [q,setQ]=useState (0);
  const [p,setP]=useState (0);
  const [vf,setVf]=useState (0);
  function calcular()
  {
  
    let st =Number(q)*Number(p)
    let d=(st*10)/100;
    let vf= st-d;
  
 setVf(" é " +vf);
  }
   
    return (
      <div>
      <h1>Exercicio 6</h1>
    <div className="conteudo">
     
    
     
     <form>
      <p>digite a quantidade<br />
      <input type="text" value={q} onChange={(e)=> setQ(e.target.value)} />

      </p>
      <p>digite o preço<br />
      <input type="text" value={p} onChange={(e)=> setP(e.target.value)} />

      </p>
     
      <p>
        <input type="button" value="exercicio 6"onClick={calcular}/>
        </p>
        <p>
          <b>Resultado</b>
           <br/>
           A quantidade do produto é  {q}<br/>
           O preço do produto é  {p}<br/>
           O valor final do produto   {vf}<br/>
           
        </p>

        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>

    </div>
      
    </div>
    );
  }