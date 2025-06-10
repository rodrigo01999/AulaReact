export default function Exercicio10 ({distancia,velocidade})

{

    let tempo= distancia/ (velocidade);

    return (
        <div>
            O tempo estimado da viagem é {tempo}
        </div>
    );
}