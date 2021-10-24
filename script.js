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

alert("Juguemos a un juego, tenés que adivinar la palabra mágica! PD: Pensá en el lenguaje en el que ésto está desarrollado!!")

let magicWord
while (magicWord != "javascript") {
    magicWord = prompt("Introducí la palabra mágica")
    switch (magicWord) {
    case "hola":
            alert("Hola, pero no es la palabra mágica... Pensá en algo mas relacionado al lenguaje")
        break;
    case "javascript":
            alert("Adivinaste la palabra! Felicitaciones")
        break;
    default:
        alert("Seguí intentando!")
        break;
}
}
    

