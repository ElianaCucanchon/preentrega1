

const SI = 'SI';
const NO = 'NO';
const MULTIPLICAR = 'MULTIPLICAR';
const RESTAR = 'RESTAR';
const SUMAR = 'SUMAR';


let nombre;
let continuar;
let nombreOperacion;



nombre = prompt('Gracias por Venir a nuestra calculadora. Bienvenido!\n Ingrese su nombre: ') ;
nombreOperacion = prompt(`${nombre}, Porfavor elija si multiplicar, restar o sumar?` .toLowerCase());


    
   do if(nombreOperacion == MULTIPLICAR){

        let numero = prompt(`${nombre}, Ingrese el numero que desea multiplicar`);
        for (let i = 0; i <= 12; i++) {
            alert(`${numero} x ${i} = ${numero * i}`)
    
        }

        continuar = prompt('Desea volver a multiplicar otro numero? si/no') .toLowerCase();
    
    } while (continuar === 'si');

    

    do if (nombreOperacion ==  SUMAR){
        const num1 = prompt("Ingrese el primer valor");
        const num2 = prompt("Ingrese el segundo valor");
        alert(+num1 + +num2);

        continuar = prompt('Desea volver a sumar otros numeros? si/no').toLowerCase();
    } while (continuar == 'si');

    do if (nombreOperacion == RESTAR) {
        const num3 = prompt("Ingrese el primer valor");
        const num4 = prompt("Ingrese el segundo valor");
        alert(num3 - num4);
        continuar = prompt('Desea volver a restar otros numeros? si/no').toLowerCase();
    
    } while (continuar === 'si');


    
    

   
















