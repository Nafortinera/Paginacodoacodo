const nombre = document.getElementById ("nombre")
const email = document.getElementById ("email")
const comentarios = document.getElementById ("comentarios")
const form = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")

form.addEventListener ("submit", e=>{
    e.preventDefault ()
    let warnings = ""
    let entrar = false
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML ""
    if(nombre.value.length <6){
        warnings +=`El nombre no es valido <br>`
        entrar = true
    }

    
    if (!regexEmail.test(email.value)){
        warnings +=`El correo no es valido <br>`
        entrar = true
       
    }
    if (comentarios.value.length<50){
        entrar = true
    
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }

})