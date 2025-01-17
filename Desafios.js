///Pregunta al usuario qué día de la semana es.
// Si la respuesta es "Sábado" o "Domingo", muestra
// "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt('Digita dia de la semana');

if (diaSemana === "domingo" || diaSemana === "sabado") {
    console.log("¡Buen fin de semana!");
    alert("¡Buen fin de semana!")
}else {
    console.log("¡Buena semana!");
    alert("¡Buena semana!")
}

//Verifica si un número ingresado por el usuario es positivo o negativo.
// Muestra una alerta informativa.
let numero = prompt("coloca un numero");
if (numero > 0) {
    alert("es positivo");
}else{
    alert("es negativo");
}


//Crea un sistema de puntuación para un juego.
// Si la puntuación es mayor o igual a 100, muestra
// "¡Felicidades, has ganado!". En caso contrario, muestra
// "Intentalo nuevamente para ganar.".

let puntuacion = prompt ("Coloca tu puntuacion");
if (puntuacion => 100) {
    alert("Felicidades, haz ganado");
}else {
    alert("Intentalo nuevamente para ganar");
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
// utilizando un template string para incluir el valor del saldo.

let saldoCuenta = prompt ("Saldo Cuenta");
alert("tu Actual saldo es ${saldoCuenta}");

//Pide al usuario que ingrese su nombre mediante un prompt.
// Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt ("tu nombre");
alert("bienvenido ${nombre} a este lugar");