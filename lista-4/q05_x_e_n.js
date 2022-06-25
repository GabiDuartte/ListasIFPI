const prompt = require('prompt-sync')()

function main(){
    const x = Number(prompt('Num1: '))
    const n = Number(prompt('Num2: '))

    let d = x / n
    let anterior = d
    
    while(anterior == d){
        anterior++
        if(n == 2){
            console.log('Programa Encerrado')
        }
    }
    
    console.log('Divisão: ', d)
    console.log('Valor do num1: ', anterior)
}
main()