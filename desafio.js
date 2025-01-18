//Crea un contador que comience en 1 y vaya hasta
// 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;  // Inicializamos el contador en 1

while(contador <= 10) {  // Mientras el contador sea menor o igual a 10
    console.log(contador);  // Mostramos el valor actual del contador
    contador++;  // Incrementamos el contador en 1
}

//Crea un contador que comience en 10 y vaya hasta
// 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;  // Inicializamos el contador en 10

while(contador >= 0) {  // Mientras el contador sea mayor o igual a 0
    console.log(contador);  // Mostramos el valor actual del contador
    contador--;  // Decrementamos el contador en 1
}

//Crea un programa de cuenta regresiva. Pide un número
// y cuenta desde 0 hasta ese número utilizando
// un bucle 'while' en la consola del navegador.

// Pedimos al usuario que ingrese un número
let numero = parseInt(prompt('Ingrese un número para la cuenta regresiva:'));

// Comprobamos si el número ingresado es válido (es decir, es un número positivo o cero)
if (isNaN(numero) || numero < 0) {
    console.log('Por favor, ingresa un número válido mayor o igual a 0.');
} else {
    let contador = 0;  // Inicializamos el contador en 0

    // Bucle while que cuenta hasta el número ingresado
    while (contador <= numero) {
        console.log(contador);  // Mostramos el número actual
        contador++;  // Incrementamos el contador en 1
    }
}

//Crea un programa de cuenta progresiva.
// Pide un número y cuenta desde 0 hasta ese número
// utilizando un bucle 'while' en la consola del navegador.

// Pedimos al usuario que ingrese un número
let numero = parseInt(prompt('Ingrese un número para la cuenta progresiva:'));

// Comprobamos si el número ingresado es válido (es decir, es un número positivo o cero)
if (isNaN(numero) || numero < 0) {
    console.log('Por favor, ingresa un número válido mayor o igual a 0.');
} else {
    let contador = 0;  // Inicializamos el contador en 0

    // Bucle while que cuenta hasta el número ingresado
    while (contador <= numero) {
        console.log(contador);  // Mostramos el número actual
        contador++;  // Incrementamos el contador en 1
    }
}
