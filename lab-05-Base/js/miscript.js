// Esto es un comentario de una linea

/*
Esto es un comentario
de varias lineas
*/

/* CASO 1: Obtener la cabecera del documento */
let cabecera = document.head;
console.log(cabecera)

/* CASO 2: Obtener la cabecera del documento */
let cuerpo = document.body;
console.log(cuerpo)

/* CASO 3: Recuperar un nodo y ver sus propiedades */
let lpAntiguos = document.getElementById("antiguo")
console.log(lpAntiguos)

let arr_antiguos = []
let nodos = lpAntiguos.childNodes
for(i=0; i < nodos.length; i++){
    console.log(nodos[i])

    if(nodos[i].nodeType == document.ELEMENT_NODE){ //si es una etiqueta html
        arr_antiguos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta1").innerHTML = arr_antiguos

/* CASO 4: Recuperar un nodo y ver sus propiedades */
let lpModernos = document.getElementById("moderno")
console.log(lpModernos)

let arr_modernos = []
let nodos1 = lpModernos.childNodes
for(i=0; i < nodos1.length; i++){
    console.log(nodos1[i])

    if(nodos1[i].nodeType == document.ELEMENT_NODE){ //si es una etiqueta html
        arr_modernos.push(nodos1[i].textContent)
    }
}

document.getElementById("rpta2").innerHTML = arr_modernos


/* CASO 5: Concatenar arreglos */
document.getElementById("rpta3").innerHTML = arr_antiguos.concat(arr_modernos)

/* CASO 6: Concatenar los elementos del arreglo para que sea un STRING */
document.getElementById("rpta3").innerHTML = arr_antiguos.join("*")

/* CASO 7: Ubicar la posicion de un elemento en un arreglo */
let pos = arr_modernos.indexOf('Kotlin')
document.getElementById("rpta3").innerHTML = pos   //innerHTML agarra el html y lo chanca
 
/* CASO 8: Insertar un elemento */
arr_modernos.splice(1 , 0, 'unlamda', 'Malbolge')  // Slice = Insertar
document.getElementById("rpta3").innerHTML = arr_modernos

/* CASO 9: Insertar y Borrar un elemento */
arr_modernos.splice(3 , 1, 'Intercal', 'ooAK')
document.getElementById("rpta4").innerHTML = arr_modernos

/* CASO 10: Borrar un elemento */
arr_modernos.splice(3 , 1)
document.getElementById("rpta5").innerHTML = arr_modernos

/* CASO 11 : Obtener ultimo elemento del arreglo */
var elemento = arr_modernos.pop() 
document.getElementById("rpta1").innerHTML = elemento

/* CASO 12 : Obtener primer elemento del arreglo */
var elemento = arr_modernos.shift() 
document.getElementById("rpta1").innerHTML = elemento

/* CASO 13 : Colocar elemento al final del arreglo */
arr_modernos.push("Dart")
document.getElementById("rpta1").innerHTML = arr_modernos

/* CASO 14 : Otra forma de colocar elemento al final del arreglo */
arr_modernos[arr_modernos.length] = 'Opa'
document.getElementById("rpta1").innerHTML = arr_modernos

/* CASO 15 : Colocar elemento al inicio del arreglo */
arr_modernos.unshift("SQL")
document.getElementById("rpta1").innerHTML = arr_modernos

/* CASO 16 : Ordenar el arreglo */
arr_modernos.sort()
document.getElementById("rpta1").innerHTML = arr_modernos

/* CASO 17 : Ordenar el arreglo */
arr_modernos.reverse()
document.getElementById("rpta1").innerHTML = arr_modernos

/* CASO 18: generar HTM */
var rpta = []

rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brasil - 3 </li>")
rpta.push("<li> Chile - 1 </li>")
rpta.push("</ol>")
var contenido = rpta.join(' ')

document.getElementById("rpta1").innerHTML = contenido

