
export default function Exercicio3( {valor,taxa,tempo} )
{
    let vp = valor+(taxa*taxa/100)*tempo;

    return (
        <div>
            O valor da parcela atualizado é {vp}R$
        </div>
    );
}