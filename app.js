//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Digite seu numero");

console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
 */
if(numeroUsuario == numeroSecreto){
    //Acertamos la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    //no acertamos la condicion
    alert('No  acertarse');
}