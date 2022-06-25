const prompt = require('prompt-sync')()

function main(){

    var n = Number(prompt('N: '))
    let N = n

    for(let i = 0; i <= n; i++ ){
    console.log(i)
    N += N + 1
    }
    console.log('Valor de N: ', N)
}
main()