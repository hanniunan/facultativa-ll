


var a = [];
var dato = document.getElementById('dato');
var boton = document.getElementById('boton');
var listar = document.getElementById('listar');

boton.addEventListener('click',agregarDato);

function agregarDato() {
    a.push(dato.value);
    visualizar();
    
}

function visualizar() {

    var t='';

    for (var index = 0; index < a.length; index++) {
        t+=`<li class="left-align">${a[index]}
        <div class="right">
          <i class="material-icons blue-text">create</i>
          <i class="material-icons red-text" onclick="borrar(${index})">delete</i>
        </div>              
        </li>`;
    }
    listar.innerHTML = t;
}

function borrar(i) {

    if (confirm('Desea eliminar?')) {
        a.splice(i,1);
    }
    visualizar();
    
}
