const nombres = document.getElementById ("nombres")
const correo = document.getElementById ("correo")
const comentarios = document.getElementById ("comentarios")
const form = document.getElementById ("form")
const container = document.getElementById ("container")

form.addEventListener ("submit", e=>{
    e.preventDefault ()
    let container = ""
    let regexCorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        container +=`El nombre no es valido` <br>

    if (!regexCorreo.test(email.value))
        container +=`El nombre no es valido` <br>
       
    }
})