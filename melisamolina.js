const nombre= prompt ("Ingresa tu nombre")
alert ("Bienvenid@" + " " + nombre)
let nota = parseInt(prompt ("Ingrese su nota obtenida"))

if (nota>=6 && nota<=10) { 
    alert ("Aprobado")
    
} else if (nota>10) {
    alert ("Ingrese una nota válida, entre 1 a 10.")
}
else { 
    alert ("Desaprobado")
}
let i= 0
for  (let i=1; i<=5; i++){
    alert(`Se considera desaprobado la nota: ${i}`)
}

let notaMaxima = 10

function resta(notaMaxima,nota){
return notaMaxima - nota;
}

let resultado = resta(notaMaxima,nota);

alert (`Te faltaron ${resultado} puntos para la calificación máxima.`)

