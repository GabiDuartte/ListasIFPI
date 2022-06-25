const prompt = require('prompt-sync')()

function main(){
    let A = Number(prompt('Num1: '))
    let B = Number(prompt('Num2: '))
    let n_vezes = B
    let A2 = A

    while(!(n_vezes == 1)){
        A = A2 + A
        n_vezes--
    }
    console.log("Resultado:", A)
}
main()