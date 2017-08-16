var  dato1 =document.getElementById("dato1");
var  dato2 =document.getElementById("dato2");
var  suma =document.getElementById("suma");//boton de suma - evento click 
var  resta =document.getElementById("resta");//boton de suma - evento click 
var  multiplica =document.getElementById("multiplicacion");//boton de suma - evento click 
var  divide =document.getElementById("division");//boton de suma - evento click 
var  resul =document.getElementById("resul");
var resultado;

suma.addEventListener("click",sumar);
resta.addEventListener("click",restar);
multiplica.addEventListener("click",multiplicar);

divide.addEventListener("click",divide);



function sumar (){
    resultado =Number(dato1.value)+ Number(dato2.value); 
    resul.innerHTML=  resultado;
    dato1.value = "";
    dato2.value = "";
    dato1.focus();
    }

    
function restar (){
    resultado =Number(dato1.value) - Number(dato2.value); 
    resul.innerHTML=  resultado;
    dato1.value = "";
    dato2.value = "";
    dato1.focus();
    }

    
function multiplicar(){
    resultado =Number(dato1.value)* Number(dato2.value); 
    resul.innerHTML=  resultado;
    dato1.value = "";
    dato2.value = "";
    dato1.focus();
    }

    
function dividir (){
    resultado =Number(dato1.value)/Number(dato2.value); 
    resul.innerHTML=  resultado.toFixed;//para dejarlo redodndeado a un punto decimal
    dato1.value = "";
    dato2.value = "";
    dato1.focus();
    }
