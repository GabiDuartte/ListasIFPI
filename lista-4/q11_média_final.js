const prompt = require('prompt-sync')()

function main(){
    let matricula = Number(prompt('matricula: '))
    
    let aprovado = 0
    let reprovado = 0
    let mf = 0

    while (matricula >= 0  ){ 
        let n1 = Number(prompt('Nota 1: '))
        let n2 = Number(prompt('Nota 2: '))
        let n3 = Number(prompt('Nota 3: '))
        
        mf = 2*n1 + 3*n2 + (5*n3)/10

         if (mf >= 7){
             aprovado++
             console.log('Aprovado')
        } else if(mf < 7) {
             reprovado++
             console.log('Reprovado')
    }
    matricula = Number(prompt('Matricula: '))
}
console.log('Aprovados: ', aprovado)
console.log('Reprovados: ', reprovado)
console.log('Fim')
}
main()