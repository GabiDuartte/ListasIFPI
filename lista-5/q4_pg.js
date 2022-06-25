const prompt = require('prompt-sync')()

function main(){
    
    var A0 = Number(prompt('Valor inicial da PG: '))
    var limite = Number(prompt('Limite da PG: '))
    var r = Number(prompt('Razão da PG: '))
    let menor = 0

    for(let i = 0; menor<limite ;i++){
        menor = A0*(Math.pow(r, i - 1))
        console.log('Menor: ', menor)
    }
}
main()