let suma = 0; 
let cont = 0; 

for (let i = 0; i < 5; i++){
	let numero = parseInt(prompt("Ingrse un numero"));

	if (isNaN(numero)){
		continue;
	}

	suma += numero;
	cont ++;

}


let promedio = suma / cont ;

alert("La suma total es: "+suma);
alert("El promedoi total: "+promedio);
