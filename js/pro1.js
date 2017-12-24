/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener('DOMContentLoaded', function(){
    console.log('Estoy listo');
});



var boton = document.getElementById('btnEnviar');

boton.addEventListener('click', function(){
    
    toogle2(this, 'btn-success');

});




function toogle2(elemento, clase)
{
    if(elemento.classList.contains(clase))
        elemento.classList.remove(clase);
    else
        elemento.classList.add(clase);
}


var div = document.querySelector('div'),
    estilos = getComputedStyle(div);

console.log(div);
console.log(estilos.width);

div.style.cssText = 'background-color:aqua; border:solid 1px #000; height:350px;';
