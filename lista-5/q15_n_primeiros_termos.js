const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    var n1 = 0

    console.log('Sequência: ')

    for (let i=1; i <= n; i++) {
        n1 = n1+i 
        console.log(n1)
    }
}
main()