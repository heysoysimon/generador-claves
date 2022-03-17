
 const TextosClave = Math.random().toString(36).substring(2)



// funciones y eventos

const generarClave = (numeros,length) =>{
let contraseña = ""

for(let x = 0; x < length; x++){
    let clave= Math.floor(Math.random()*numeros.length)
    contraseña += numeros.charAt(clave)
    // contraseña += letras.charAt(textosClave)
    
}
return contraseña
}

function mostrarClave(){
    
let length =parseInt(longitud.value)

let numeros ="0123456789QWERTYUIOPASDFGHJKLÑZXCVBNM"


// modifica el DOM 
document.getElementById('clave').innerHTML =
 `<div class="creacion">
 <h3>${generarClave(numeros,length) }</h3>
 </div>`
}
