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

let peso = 56 //kg
let altura=1.61 //mts

let imc = peso/(Math.pow(altura,2))

if(imc<18.5)
    console.log(`IMC: Bajo (${imc})`)
else if(imc>=18.5 && imc<25)
    console.log(`IMC: Normal (${imc})`)
else if(imc>=25 && imc<30)
    console.log(`IMC: Sobrepeso (${imc})`)
else 
console.log(`IMC: Obesidad (${imc})`)
