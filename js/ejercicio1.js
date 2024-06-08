/*Ejercicio 1: Conversión de Temperaturas
Descripción: Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada.

Instrucciones:

Declara una variable para almacenar una temperatura en grados Celsius.
Calcula la temperatura en grados Fahrenheit usando la fórmula 
𝐹=𝐶×1.8+32
Usa una sentencia if para determinar si la temperatura en Fahrenheit es mayor a 85 (alta), menor a 32 (baja) o moderada.
Muestra el resultado en la consola.*/

let temperaturaCelcius = 20

let temperaturaFahrenheit=(temperaturaCelcius)=>{
return temperaturaCelcius*1.8+32
}

console.log(`${temperaturaCelcius} grados Celcius son ${temperaturaFahrenheit(temperaturaCelcius)} grados Fahrenheit.`)