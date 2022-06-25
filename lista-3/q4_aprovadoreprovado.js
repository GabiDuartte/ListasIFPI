const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt('Nota 1: '))
    const n2 = Number(prompt('Nota 2: '))

    const m = (n1+n2)/2
    if(m >= 7){
        console.log('APROVADO')
    }else if(m = 10){
        console.log('Aprovado com distinçao')
    }else{
        ('Reprovado')
    }

}
main()