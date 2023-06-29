var agora = new Date()
var horas = agora.getHours()
console.log(`São exatamente ${horas} horas.`)
    if (12 > horas && horas>=6){
        console.log('Está de manhã')
        }else if (18 > horas && horas >= 12){    
        console.log('Está de tarde')   
        }else{
        console.log('Está de noite')
    }