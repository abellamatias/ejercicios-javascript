/* 
Ejercicio 3: Determinación de Números Primos
Descripción: Determina si un número entero es primo.

Instrucciones:

Declara una variable para un número entero.
Usa una sentencia if y un bucle para determinar si el número es primo.
Muestra el resultado en la consola.
*/

let numero =7919
let contador = 0
let i=1

while(i<numero || contador<1){
    if(numero%i==0)contador++
    i++
}

if(contador<=1)
    console.log(`El número ${numero} es un número primo.`)
else console.log(`El número ${numero} no es un número primo.`)