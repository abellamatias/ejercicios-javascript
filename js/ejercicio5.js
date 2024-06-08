/*
 Ejercicio 5: Cálculo del Descuento
Descripción: Calcula el precio final de un producto aplicando un descuento basado en su precio inicial.

Instrucciones:

Declara una variable para el precio inicial del producto.
Usa sentencias if para aplicar un 10% de descuento si el precio es mayor a 100, un 5% si está entre 50 y 100, y sin descuento si es menor a 50.
Calcula el precio final y muestra el resultado en la consola.
 */

let precioInicial = 105

let calcularDescuento=(precioInicial)=>{
    if(precioInicial>100) return precioInicial*0.9
    else if(precioInicial<=100 && precioInicial>=50) return precioInicial*0.95
    else return precioInicial
}

    console.log(`El precio con descuento es: $${calcularDescuento(precioInicial)}`)