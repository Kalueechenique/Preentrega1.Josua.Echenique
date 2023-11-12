let total = 0;
let subTotal1 = 0;
let subTotal2 = 0;
let precio1;
let precio2;
let cantidad1;
let cantidad2;
let continuar1; // Inicializa la variable para que entre en el primer bucle.
let continuar2;

alert("Bienvenidos a nuestro local");

do {
    precio1 = +prompt("Ingrese el precio del producto:" + `\n`
        + 'Leche chocolatada  $300' + `\n`
        + 'Café con leche        $250' + `\n`
        + 'Té                            $150' + `\n` 
    );
    cantidad1 = +prompt("Ingrese la cantidad");
    subTotal1 = subTotal1 + precio1 * cantidad1;
    continuar1 = prompt("¿Desea llevar otro producto? si/no");
    
    if (continuar1 === 'no') {
        continuar2 = prompt('¿Desea llevar algo para comer ?si/no' + `\n`
        + 'Factura 1 $100' + `\n`
        + 'Factura 2 $200' + `\n`
        + 'Factura 3 $300' + `\n`
        );
        
        if (continuar2 === 'si') {
            precio2 = +prompt("Ingrese el precio de la comida:");
            cantidad2 = +prompt("Ingrese la cantidad");
            subTotal2 = subTotal2 + precio2 * cantidad2;
        }
    }
} while (continuar1 === 'si');

let mensaje = `El precio a pagar es de $${subTotal1 + subTotal2}`;
alert(mensaje);