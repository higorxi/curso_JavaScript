function calcular(){
    var inicio = document.getElementById('number_start').value;
    var fim = document.getElementById('number_finish').value;
    var passo = document.getElementById('number_steps').value;
    var resultado = document.getElementById('res');

    resultado.innerHTML = '';

    if (inicio <= fim && passo > 0) {
        while (inicio <= fim) {
        resultado.innerHTML += inicio + ' ';
        inicio = Number(inicio) + Number(passo);
    }
    }else {
        resultado.innerHTML = 'Valores inválidos. Certifique-se de que o início seja menor ou igual ao fim e o passo seja maior que zero.';
        resultado.style.background = 'red';
    }
    
}
