
function sumar() {
    let op1 = document.getElementById("id1").value  // obtengo el nodo
    let op2 = document.getElementById("id2").value

    // devuelve una cadena return op1 + op2
    
    let valor = parseInt(op1) + parseInt(op2)

    document.getElementById("rpta").innerHTML = valor
}

function resta() {
    let op1 = document.getElementById("id1").value  // obtengo el nodo
    let op2 = document.getElementById("id2").value

    // devuelve una cadena return op1 + op2
    
    
    if( parseInt(op1) > parseInt(op2)){
        let valor = parseInt(op1) - parseInt(op2)
        valor1 = valor             
    }else{
        valor1 = parseInt(op1) - parseInt(op2)
    }

    document.getElementById("rpta").innerHTML = valor1
}

function multiplicacion() {
    let op1 = document.getElementById("id1").value  // obtengo el nodo
    let op2 = document.getElementById("id2").value

    // devuelve una cadena return op1 + op2
    
    let valor = parseInt(op1) * parseInt(op2)

    document.getElementById("rpta").innerHTML = valor
}

function division() {
    let op1 = document.getElementById("id1").value  // obtengo el nodo
    let op2 = document.getElementById("id2").value

    // devuelve una cadena return op1 + op2
    
    if( parseInt(op2) > 0){
        let valor = parseInt(op1) / parseInt(op2)
        valor1 = valor             
    }else{
        valor1 = console.log("Error")
    }

    document.getElementById("rpta").innerHTML = valor1
}