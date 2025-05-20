export default function Exercicio6 ( {q,p} )
{
    let st =Number(q)*Number(p)
    let d=(st*10)/100;
    let vf= st-d;

    return (
        <div>
            O valor do sub total  é {st}
            O valor do desconto   é {d}
            O valor total  é {vf}
        </div>
    );


}