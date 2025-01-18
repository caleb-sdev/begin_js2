let contador = 1;

while (contador < 4) {
    console.log('Ejecutando la iteración ' + contador);
    contador = contador + 1;
}


let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
    contador--;  // Reducir el contador en cada iteración
}

let promedio = suma / cantidadNumeros;

console.log(promedio);
