export default function Exercicio6(q,p) 
{
    let st =Number(q)*Number(p)
    let d=(st*10)/100;
    let vf= st-d;
    return (
      <div>
      <h1>Exercicio 6</h1>
    <div className="conteudo">
     
    
     
     <form>
      <p>digite a quantidade<br />
      <input type="text" />

      </p>
      <p>digite o preço<br />
      <input type="text" />

      </p>
     
      <p>
        <input type="button" value="exercicio 6"/>
        </p>

        <p>
            <a href="/">voltar para home</a>
           </p>
     </form>

    </div>
      
    </div>
    );
  }