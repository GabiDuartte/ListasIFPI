const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt('Num1: '))
    const n2 = Number(prompt('Num2: '))

    let n = 1
    while(!(n%n1 == 0 && n%n2 == 0)){
        n = n + 1
    }
    console.log('MDC: ', n)
}
main()