const nombres = document.getElementById ("nombres")
const correo = document.getElementById ("correo")
const comentarios = document.getElementById ("comentarios")
const form = document.getElementById ("form")
const container = document.getElementById ("row")

form.addEventListener ("submit", e=>{
    e.preventDefault ()
    let container = ""
    let enviar = false
    let regexCorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombres.value.length <6){
        container +=`El nombre no es valido` <br>
        enviar = true
    }

    console.log (regexCorreo.test(correo.value))
    if (!regexCorreo.test(correo.value)){
        container +=`El correo no es valido` <br>
        enviar = true
       
    }
    if (comentarios.value.length<100){
        enviar = true
    
    }
    if (enviar){
        parrafo.innerHTML = ""
        container
    }

})