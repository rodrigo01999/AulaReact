export default function Exercicio5 ( {consulta} )
{
    let salariob =consulta*150
    let inss=(8/100)*salariob;
    let salariof= salariob-inss;

    return (
        <div>
            O valor do salario liquido  é {salariof}
        </div>
    );


}