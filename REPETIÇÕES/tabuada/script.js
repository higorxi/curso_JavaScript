function multiplicar(){
    let numero = Number(document.getElementById('number').value);
    let resultado = document.getElementById('resultado');
    let multiplicação = ''
    for(let n = 0; n <= 10; n++){
        multiplicação += numero + "x" + n + '=' + numero*n + '</br>'
        resultado.innerHTML = multiplicação
    }
    aparecer()
}

function aparecer(){
    let resultado = document.getElementById('resultado')
    resultado.style.display = 'block'
}

function verificarKey(e){
    if(e.onkeypress.arguments[0].code === 'Enter'){
        multiplicar()
    }else{
        
    }
}