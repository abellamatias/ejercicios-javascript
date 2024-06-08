/*
Ejercicio 2: Calculo del IMC
Descripción: Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.

Instrucciones:

Declara variables para el peso (en kilogramos) y la altura (en metros) de una persona.
Calcula el IMC usando la fórmula 
𝐼𝑀𝐶=𝑝𝑒𝑠𝑜/(𝑎𝑙𝑡𝑢𝑟𝑎^2)
Usa una sentencia if para clasificar el IMC como bajo peso (< 18.5), normal (18.5 - 24.9), sobrepeso (25 - 29.9) u obesidad (>= 30).
Muestra el resultado en la consola.
*/

let peso = 68 //kg
let altura=1.75 //mts

let calcularIMC=(peso, altura)=>{
    return peso/(Math.pow(altura,2))
}

console.log(`El Incice de masa corporal de un peso de ${peso}kg y una altura de ${altura}mts es: ${calcularIMC(peso, altura)}`)