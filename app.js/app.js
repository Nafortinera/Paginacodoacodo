const nombres = document.getElementById ("nombres")
const correo = document.getElementById ("correo")
const comentarios = document.getElementById ("comentarios")
const form = document.getElementById ("form")
const row = document.getElementById ("row")

form.addEventListener ("submit", e=>{
    e.preventDefault ()
    let row = ""
    let regexCorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombres.value.length <6){
        row +=`El nombre no es valido` <br>
    }

    console.log (regexCorreo.test(correo.value))
    if (regexCorreo.test(correo.value)){
       
       
    }
})