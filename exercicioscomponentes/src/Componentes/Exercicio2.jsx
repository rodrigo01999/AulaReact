
export default function Exercicio2( {peso,altura} )
{
    let imc = peso/(altura*altura);

    return (
        <div>
            Uma pessoa com {peso}kg e {altura} metros tem IMC de {imc}
        </div>
    );
}