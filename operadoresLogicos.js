//AND (&&)

let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
    console.log("Puede conducir!");
} else {
    console.log("No puede conducir!");
}

//OR( | | )

// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
} else {
    console.log("No tienes frutas.");
}

/*
Operador	Nombre	Ejemplo	Resultado
==	Igual	A == B	Verdadero si A es igual a B
!=	Diferente	A != B	Verdadero si A no es igual a B
<	Menor que	A < B	Verdadero si A es menor que B
>	Mayor que	A > B	Verdadero si A es mayor que B
<=	Menor o igual	A <= B	Verdadero si A es menor o igual a B
>=	Mayor o igual	A >= B	Verdadero si A es mayor o igual a B
 */

/*
Operador	Nombre	Ejemplo	Resultado
&&	Y / AND	(A > B) && (B == C)	Verdadero si A es mayor que B y B es igual a C
||	O / OR	(A > B) || (B == C)	Verdadero si A es mayor que B o B es igual a C
!	NEGACIÓN	!(A == B)	Verdadero si A NO es igual a B
 */