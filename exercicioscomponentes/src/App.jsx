import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio3 from "./Componentes/Exercicio3"
import Exercicio4 from "./Componentes/exercicio4"
import Exercicio5 from "./Componentes/Exercicio5"
import Exercicio6 from "./Componentes/Exercicio6"

export default function App()
{
  return (
    <div>
      <h1>Exercícios de Componentes</h1>

      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={5.8} />
      <Exemplo1 numero1={-58} numero2={65} />

      <hr />
      <h3>Chamada para o Exercício 1</h3>
      <Exercicio1 fah={100} />
      <Exercicio1 fah={50} />
      <Exercicio1 fah={15} />
      
      <hr />
      <h3>Chamada para o Exercício 2</h3>
      <Exercicio2 peso="80"  altura= "1.80"/>
      <Exercicio2 peso="80"  altura= "1.80"/>
     
      <hr />
      <h3>Chamada para o Exercício 3</h3>
      <Exercicio3 valor="100"  taxa= "10"  tempo="2" />
      <Exercicio3 valor="100"  taxa= "10"  tempo="18" />


      <hr />
      <h3>Chamada para o Exercício 4</h3>
      <Exercicio4 tipo="retangulo"  base= "10"  altura="5" />
      <Exercicio4 tipo="triangulo"  base= "10"  altura="5" />

      <hr />
      <h3>Chamada para o Exercício 5</h3>
      <Exercicio5 consulta="10"/>
      <Exercicio5 consulta="20"/>

      <hr />
      <h3>Chamada para o Exercício 6</h3>
      <Exercicio6 q="2" p="5"/>
      
    </div>
   

  )
}