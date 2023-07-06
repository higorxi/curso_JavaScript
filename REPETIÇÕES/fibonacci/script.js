function multiplicar(){
    let numero = Number(document.getElementById('number').value);
    let resultado = document.getElementById('resultado');
    let fibonacci = ''

    if(numero <= 1){
        resultado.innerHTML = [0,1]
    }
        let fib = [0,1]

    for(let n = 2; n <= numero; n++){
        fib[n] = fib[n-1] + fib[n-2]
    }
    resultado.innerHTML = fib.join(', ') + '</br>' + '<a href=https://www.significados.com.br/sequencia-de-fibonacci/>O que é Fibonacci?</a>'
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