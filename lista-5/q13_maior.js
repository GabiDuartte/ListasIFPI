const prompt = require('prompt-sync')()

function main(){

    var n = Number(prompt('N: '))
    let n1 = 0
    let maior = 0

    for(let i=1; i<n+1; i++){
        n1 = Number(prompt(`Informe o número ${i} da lista: `))

        if(n>maior){
            maior = n
        }
    }
    console.log('O maior número é: ',maior)
}
main()