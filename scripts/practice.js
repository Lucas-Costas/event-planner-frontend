function sendData() {
    checkNameFormat();
}

function checkNameFormat() {

    var tagNombre = document.getElementById("nombre");
    var contenido = tagNombre.value;

    if (estaVacioOBlanco(contenido)) {
        alert("El nombre es invalido");
    }else{
        alert("Se envió la información");
    }
}

function estaVacioOBlanco(contenidoAEvaluar){
    contenidoAEvaluar = contenidoAEvaluar.trim();
    return contenidoAEvaluar === "" || contenidoAEvaluar === null || contenidoAEvaluar === undefined;
}

