const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const emailco = document.getElementById("emailt");
const general = document.getElementById("consulta_general");
const soporte = document.getElementById("solicitud_soporte");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkboxx");

// Parrafos
var firspa = document.getElementById("firspa");
var lastpa = document.getElementById("lastpa");
var emailpa = document.getElementById("emailpa");
var radiopa = document.getElementById("radiopa");
var messagepa = document.getElementById("messagepa");
var checkpa = document.getElementById("checkpa");

var boton = document.getElementById("boton");
function form(event){
    event.preventDefault();
    var name1 = firstname.value;
    var name2 = lastname.value;
    var email1= emailco.value;
    var generale = general.checked;
    var soportes = soporte.checked;
    var messsages = message.value;
    var checkboxs = checkbox.checked;

    let mensaje = true

    if(name1 == ""){
        console.log(name1);
        firspa.classList.remove("error");
        mensaje = false;
    }else{
        console.log(name1);
        firspa.classList.add("error");
    }

    if(name2 == ""){
        console.log(name2);
        lastpa.classList.remove("error");
        mensaje = false;
    }else{
        console.log(name2);
        lastpa.classList.add("error");
    }

    if(email1 == ""){
        console.log(email1);
        emailpa.classList.remove("error");
        mensaje = false;
    }else{
        console.log(email1);
        emailpa.classList.add("error");
    }

    if (generale == "" && soportes == "") {
        console.log(generale);
        radiopa.classList.remove("error");
        mensaje = false;
    } else {
        console.log(generale);
        radiopa.classList.add("error");
        
    }

    if(messsages == ""){
        console.log(messsages);
        messagepa.classList.remove("error");
        mensaje = false;
    }else{
        console.log(messsages);
        messagepa.classList.add("error");
    }

    if(checkboxs == ""){
        console.log(checkboxs);
        checkpa.classList.remove("error");
        mensaje = false;
    }else{
        console.log(checkboxs);
        checkpa.classList.add("error");
    }
    
    console.log(mensaje)
    if (mensaje == true){
        window.alert(
            "Message Sent! ","Thanks for completing the form. We'll be in touch soon!");
    }
}

boton.addEventListener("click" , form);