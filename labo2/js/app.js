var  dato1 =document.getElementById("dato1");
var  dato2 =document.getElementById("dato2");
var  suma =document.getElementById("suma");//boton de suma - evento click 
var  resul =document.getElementById("resul");
var resultado;

suma.addEventListener("click",sumar);

function sumar (){
    resultado =Number(dato1.value)+ Number(dato2.value); 
    resul.innerHTML=  resultado;
    dato1.value = "";
    dato2.value = "";
    dato1.focus();
    }