export default function Exercicio4 ( {tipo,base,altura} )
{
    
    if (tipo== "triangulo")
{
    let area=(base*altura)/2;

    return (
        <div>
            O valor do triangulo é {area}
        </div>
    );
}
    else 
    if (tipo=="retangulo")
 {
    let area=base*altura;
    return (
        <div>
            O valor do retangulo é {area}
        </div>
 
    );
 
    }
    else
    {
    return (
        <div>
            O tipo é invalido
        </div>
    );
    }
}