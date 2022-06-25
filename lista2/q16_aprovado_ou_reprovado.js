const prompt = require('prompt-sync')()


function main(){

    const nota_1 = Number(prompt('Nota 1: '))
    const nota_2 = Number(prompt('Nota 2: '))
    const media = (nota_1 + nota_2) / 2

    if(media >= 7){
        console.log('APROVADO')
    }else if(media < 7 && media >= 4){
        console.log('Prova final')
        const notafinal = Number(prompt('Noata final: '))
    const media_final = (notafinal + media)/2
     if(media_final >= 5){
        console.log('APROVADO')
    }else{
        console.log('REPROVADO')
    }
    }else{
        console.log('Reprovado')
    }
    
}

main()