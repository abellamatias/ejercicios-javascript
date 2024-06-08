/*
Ejercicio 4: Operaciones Aritméticas Básicas
Descripción: Realiza operaciones aritméticas básicas y muestra el mayor resultado.

Instrucciones:

Declara tres variables numéricas.
Realiza y guarda el resultado de las operaciones de suma, resta y multiplicación entre las variables.
Usa una sentencia if para determinar y mostrar el mayor de los tres resultados en la consola.
*/

let numero1 = 1
let numero2 = 2
let numero3 = 2

let suma = numero1 + numero2 + numero3
let resta = -numero1 - numero2 - numero3
let multiplicacion = numero1 * numero2 * numero3

if(suma>resta && suma> multiplicacion)
console.log(`La suma es el mayor resultado con: ${suma}`)
    else if(resta > suma && resta > multiplicacion)
        console.log(`La resta es el mayor resultado con: ${resta}`)

        else if(multiplicacion>suma && multiplicacion>resta)
            console.log(`La multiplicación es el mayor resultado con: ${multiplicacion}`)
        else console.log(`No hay un único resultado que sea el mayor de los 3.`)
