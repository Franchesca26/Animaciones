
BotonAnimacion
document.getElementById('BotonAnimacion').addEventListener('click',function(){
    //Obtener la pelota
    let pelota=document.getElementById('pelota')
    console.log("pelota", pelota)
    //Remover la animacion actual si existe
    pelota.style.animation='none'
    setTimeout(function(){
        pelota.style.animation='rebote 2s ease-in-out forwards'
    },100)
});