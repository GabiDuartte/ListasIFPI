const prompt = require('prompt-sync')()

function main(){
    
    var A0 = Number(prompt('Valor inicial da PA: '))
    var limite = Number(prompt('Limite da PA: '))
    var r = Number(prompt('Razão da PA: '))
    let menor = 0

    for(let i = A0; menor<limite; i++){
        menor = A0+(i-1)*r
        console.log('Menor: ', menor)
    }
}
main()
