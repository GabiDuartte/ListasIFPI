const prompt = require('prompt-sync')()

function main(){
    let a = Number(prompt('Número a: '))
    let b = Number(prompt('Número b: '))

    let n = 1
    
       while(!(n % a == 0 && n % b == 0)){
            n++
}
    console.log('MMc: ', n)
}
main()