const prompt = require('prompt-sync')()

function main(){
    let n = Number(prompt('Valor do número: '))
    let f = Number(prompt('Final: '))
    let d = 0
    let resto = 0
    while (!(n ==  f ) ){
        n++
        if (d == n){
            resto = n % d
        }
        if(resto == 0){
            console.log('divisor')
        }
        d++
        console.log('Número: ', n , 'Divisores: ', d)
        }
    }
main()