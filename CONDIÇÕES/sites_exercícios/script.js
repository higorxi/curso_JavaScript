
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora_atual = data.getHours()
    var minuto_atual = data.getMinutes()
    var segundo_atual = data.getSeconds()
    msg.innerHTML = `Agora são ${hora_atual} horas ${minuto_atual} minutos e ${segundo_atual} segundos.`

    if(hora_atual >= 6 && hora_atual < 12){
        img.src = 'sol.png'
        document.body.style.background = '#ed781b'
       }else if(hora_atual >= 12 && hora_atual < 18){
        img.src = 'oceano.png' 
        document.body.style.background = '#ed781b'
       }else if(hora_atual >= 18 && hora_atual < 23){
        img.src = 'lua.png'
        document.body.style.background = '#62788e'
       }else{
        img.src = 'noite.png'
        document.body.style.background = '#415870'
       }
}
