
var datos = [];

var formulario= document.getElementById( 'formulario');

var tabla= document.getElementById('tabla');

formulario.addEventListener('submit', agregar);

 function agregar(e){
     
    e.preventDefault();


     datos.push ({
        nombre:e.target.nombres.value, 
        apellido:e.target.apellidos.value, 
        correo:e.target.correo.value, 
        celular:e.target.celular.value
        
     });

     console.log(datos);

     visualizar();
 } 

 function visualizar (){

    var t ='';

    for ( var index= 0; index < datos.length; index++ ){
        t+=` <tr>
      <td>${datos[index].nombre}</td>
     <td>${datos[index].apellido}</td>
     <td>${datos[index].correo}</td>
    <td>${datos[index].celular}</td>
       <td><i class="material-icons red-text">delete</i></td>
    </tr>`;
 }

 tabla.innerHTML = t;
 }        