let total = 0;
let subTotal1 = 0;
let subTotal2 = 0;
let precio1;
let precio2;
let cantidad1;
let cantidad2;
let continuar1;
let continuar2;
let producto;
let producto1;



/* const cafeLeche = 300;
const lecheChocolada = 300;
const te = 150;
const facturaCrema = 200;
const facturaMediaLuna = 150;
const facturaDulceDeLeche = 220;
const bizcochoDulce = 50;
const bizcochoSalao = 50; */

alert("Bievenidos a nuestro local");

do{
    precio1 = +prompt ("Ingrese el precio del producto:" + `\n`
        + 'Leche chocolatada  $300' + `\n`
        + 'Café con leche        $250' + `\n`
        + 'Té                            $150' + `\n`  )
    cantidad1 = +prompt ("Ingrese la cantidad");
    subTotal1 = subTotal1 + precio1*cantidad1;
    continuar1 = prompt("¿Desea llevar otro producto? si/no")
    
    continuar2 = prompt("Desea llevar algo para comer?")

    while (continuar1 !== 'si' && continuar !== 'no')
        continuar2 = prompt ("Debe ingresar si o no")


    do{
        precio2 = +prompt("Ingrese el precio de la comida:" + `\n`
        + 'Factura 1 $100' + `\n`
        + 'Factura 2 $200' + `\n`
        + 'Factura 3 $300' + `\n` )
        cantidad2 = +prompt ("Ingrese la cantidad");
        subTotal2 = subTotal1 + precio2*cantidad2;
        continuar2 = prompt("¿Desea llevar otro comida? si/no")

    }

    while (continuar2 !== 'si' && continuar2 !== 'no'){
        continuar2 = prompt ("Debe ingresar si o no");
        
    } 
}
while (continuar1 === 'si')
alert(`El precio a pagar es de $${subTotal1}`)



        