



const SI = 'SI';
const NO = 'NO';
const MULTIPLICAR = 'MULTIPLICAR';
const RESTAR = 'RESTAR';
const SUMAR = 'SUMAR';


let nombre;
let continuar;
let nombreOperacion;



nombre = prompt('Gracias por Venir a nuestra calculadora. Bienvenido!\n Ingrese su nombre: ') ;
nombreOperacion = prompt(`${nombre}, Indica que operacion te gustaria realizar, multiplicar, sumar o restar?`) .toLowerCase();

if(nombreOperacion =="multiplicar" ){
   
   do{

        let numero = prompt(`${nombre}, Ingrese el numero que desea multiplicar hasta 12`);
        for (let i = 0; i <= 12; i++) {
            alert(`${numero} x ${i} = ${numero * i}`)

    
        }

        continuar = prompt('Desea volver a multiplicar otro numero? si/no') .toLowerCase();
    
    } while (continuar === 'si');

} 

if(nombreOperacion == "sumar"){
    do{
        const num1 = prompt("Ingrese el primer valor a sumar");
        const num2 = prompt("Ingrese el segundo valor a sumar");
        alert(+num1 + +num2);

        continuar = prompt('Desea volver a sumar otros numeros? si/no').toLowerCase();
    } while (continuar ==='si');

}

if(nombreOperacion == "restar"){

    do {
        const num3 = prompt("Ingrese el primer valor a restar");
        const num4 = prompt("Ingrese el segundo valor");
        alert(num3 - num4);
        continuar = prompt('Desea volver a restar otros numeros? si/no').toLowerCase();
    
    } while (continuar === 'si');
    

}


if (continuar ==='no'){

    alert(` ${nombre} Gracias por visitarnos`);
}

if(nombreOperacion == ""){

    alert(` ${nombre} Intentalo de nuevo, ingresa un valor valido!`);
}