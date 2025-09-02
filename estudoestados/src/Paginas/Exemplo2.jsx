export default function Exemplo2() {
  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="conteudo">
     <h3>Exemplo de useState</h3>
     <p>O objetivo será receber duas notas, calcular a média e exibir o resultado na tela </p>
     
     <form>
      <p>digite a primeira nota<br />
      <input type="text" />

      </p>
      <p>digite a segunda nota<br />
      <input type="text" />
      
      </p>
      <p>
        <input type="button" value="calcular media"/>
        </p>
     </form>
     </div>
      
    </div>
  );
}
