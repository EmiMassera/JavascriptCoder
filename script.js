// EJERCICIO N°1
// let nombre = prompt("Ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");
// let edad = Number(prompt("Ingresá tu edad"));

// alert(`Hola ${nombre} ${apellido}, tenés ${edad} años!`)


// EJERCICIO N°2

// // Creo una variable de edad a ser rellenada en el prompt
// let edad = Number(prompt("Ingresá tu Edad")); 

// // Creo una condicional if en el que determino si el valor de la variable edad es mayor o menor a 18 dará un determinado mensaje en consola.
// if (edad < 18){
//     console.log("Sos menor de Edad");
// } else if (edad >= 18 && edad < 100){
//     console.log("Sos mayor de edad");
// } else if (edad > 100){
//     alert(`Dale men como vas a tener ${edad} años, ¿Quién sos, Mirtha Legrand?`);
//     // Jejejeje esto no se xq lo puse, como si fuera un easter egg jajaja :)
// } else {
//     alert("Ingresá un valor correcto")
//     // Ingreso un else que se mostrara en caso de que la variable edad no reciba un valor numérico y muestre un alert.
// }

// let password 

// do {
//     password = prompt("Introduce la Contraseña")
// } while (password != "admin") 

// alert("Juguemos a un juego, tenés que adivinar la palabra mágica! PD: Pensá en el lenguaje en el que ésto está desarrollado!!")

// let magicWord
// while (magicWord != "javascript") {
//     magicWord = prompt("Introducí la palabra mágica")
//     switch (magicWord) {
//     case "hola":
//             alert("Hola, pero no es la palabra mágica... Pensá en algo mas relacionado al lenguaje")
//         break;
//     case "javascript":
//             alert("Adivinaste la palabra! Felicitaciones")
//         break;
//     default:
//         alert("Seguí intentando!")
//         break;
// }
// }
    
// FUNCIONES
// alert("Hola, vamos a calcular el total de una compra de 3 productos más su IVA!")


// let product1 = parseFloat(prompt("Introducí el precio del primer producto"));
// let product2 = parseFloat(prompt("Introducí el precio del segundo producto"));
// let product3 = parseFloat(prompt("Introducí el precio del tercer producto"));

// function calculoIva(product1, product2, product3) {
//     const iva = 1.21;
//     let result = (product1 + product2 + product3) * iva
//     return result
// }

// alert(`El total con IVA es de $${Math.round(calculoIva(product1, product2, product3))}`)

// alert("Tenemos descuento del 10% en todas las compras en Octubre!")

// function descuento(calculoIva) {
//     let discount = 0.10;
//     let porcentaje = calculoIva(product1, product2, product3) * discount;
//     let descontar = calculoIva(product1, product2, product3) - porcentaje;
//     return descontar
// }

// alert(`Su nuevo total con descuento es $${descuento(calculoIva)}`)


// // FUNCIONES RELACIONADAS
// const sumaPrecios = (precio1, precio2) => precio1 + precio2;
// const calcularIva = (precios) => precios * 1.21;
// const descuento = (subtotal) => { 
//     let subtotalIva = subtotal * 0.20;
//     let descuentoFinal = subtotal - subtotalIva;
//     return descuentoFinal;
// }

// let precio1 = parseFloat(prompt("Ingresá el primer precio"));
// let precio2 = parseFloat(prompt("Ingresá el segundo precio"));

// let total = Math.round(descuento(calcularIva(sumaPrecios(precio1, precio2))));

// alert(`El total de sus dos productos con IVA y 20% de descuento es de $${total}`)



// OBJETOS

// class Compra {
//     constructor (producto, precio, cantidad) {
//         this.producto = producto;
//         this.precio = precio;
//         this.cantidad= cantidad;
//     }

//     comprar () {
//         return console.log(`Compraste ${this.cantidad} ${this.producto}s a un total de $${this.precio * this.cantidad}`)
//     }
// }

// let compra1 = new Compra("Libro", 340, 3);
// compra1.comprar();
// let compra2 = new Compra("Camiseta", 890, 3);
// compra2.comprar();



// STORAGE Y JSON
// let nombre = prompt("Nombre")
// let apellido = prompt("Apellido")
// localStorage.setItem('Nombre': "Emiliano", 'Apellido': "Massera")


// class Autos {
//     constructor (marca, año, color){
//         this.marca = marca;
//         this.año = año;
//         this.color = color;
//     }
// }

// let auto1 = new Autos("Ford", 2011, "Rojo");
// let auto2 = new Autos("Chevrolet", 1998, "Verde");
// let auto3 = new Autos("Volkswagen", 2020, "Gris");

// let autos = [auto1, auto2, auto3];

// localStorage.setItem('autos', JSON.stringify(autos));
// let autosJSON = localStorage.getItem(autos);
// let autosLocalStorage = JSON.parse(localStorage.getItem(autos));

// console.log(autosJSON);
// console.log(autosLocalStorage);


// ARRAYS

// class Compra {
//     constructor (producto, precio, cantidad) {
//         this.producto = producto;
//         this.precio = precio;
//         this.cantidad= cantidad;
//     }

   
// }
// function subtotal(){
//         return productPrice * productAmount;
//     }
// let arrayCompra = [];

// do {
// var programa = prompt("Escribí el nombre del producto a comprar, para finalizar, escribí 'ESC'.")
//     if (programa === "ESC") {
//         break;
//     } else{
//         var productName = programa;
//         var productPrice = prompt("Escribí el precio del producto.");
//         var productAmount = parseInt(prompt("Escribí la cantidad que vas a comprar de éste producto."));
//         arrayCompra.push(new Compra(productName,productPrice,productAmount))
//     }
// } while (programa != "ESC");

// console.log(arrayCompra.forEach.subtotal());


// VAMOS A CREAR UNA ESPECIE DE CARRITO DE COMPRAS

alert("Hola, vamos a emular un carrito de compras, para eso, ingresá el nombre del producto que querés agregar al carrito y luego la cantidad que querés de éste mismo.");
class Compra {
    constructor (producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad= cantidad;
    }
    subtotal() {
        return this.precio * this.cantidad * 1.21;
    }
}
let arrayCompra = [];
do {
var programa = prompt("Escribí el nombre del producto a comprar, para finalizar, escribí 'ESC'.")
    if (programa === "ESC" ||programa === "Esc" || programa === "esc" ) {
        break;
    } else{
        var productName = programa;
        var productPrice = prompt("Escribí el precio del producto.");
        var productAmount = parseInt(prompt("Escribí la cantidad que vas a comprar de éste producto."));
        arrayCompra.push(new Compra(productName,productPrice,productAmount))
    }
} while (programa != "ESC"|| programa != "Esc"||programa != "esc");

for (var compra of arrayCompra) {
    console.log(`Compraste ${compra.cantidad} ${compra.producto}`)
    console.log("A un precio de $" + compra.subtotal())
}
