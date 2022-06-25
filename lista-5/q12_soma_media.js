const prompt = require('prompt-sync')()

function main(){

    let n = Number(prompt('N: '))
    var lista = Number(prompt('Quantidade de numeros na lista: '))
    let s = 0
    let m = 0

    for(let i=1; i<lista; i++){
        n = Number(prompt(`Informe o número ${i} da lista: `))
        s = s + n
    }
    m = s/lista
    
    console.log('Soma: ', s)
    console.log('Media: ', m)
}
main()