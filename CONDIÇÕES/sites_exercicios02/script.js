function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    var sexo = document.getElementsByName('radsex')
    var img = document.getElementById('img')
    if(nascimento == 0 || nascimento > ano){
        resultado.textContent = 'VERIFIQUE OS DADOS';
        resultado.style.background = 'red'
        resultado.style.color = 'white'
    }else {
        var idade = ano - Number(nascimento.value)
        if(sexo[0].checked){
            sexo = 'Masculino'
            if(idade >= 1 || idade <= 11){

            }else if(idade >=12 || idade <= 18){
        
            }else if(idade >= 19 || idade <= 64){
        
            }else{
                
            }
        }else if(sexo[2].checked){
            sexo = 'não informado'
        }else{
            sexo = 'Feminino'
            if(idade >= 1 || idade <= 11){

            }else if(idade >=12 || idade <= 18){
        
            }else if(idade >= 19 || idade <= 64){
        
            }else{
                
            }
        }
        resultado.innerHTML = `Sua idade é <strong>${idade}</strong> e você é do sexo <strong>${sexo}</strong>`
    }
}