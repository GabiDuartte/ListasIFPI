const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('Digite um numero: '))
    let m = 1

    for(let i = 1; i <= 10; i++){
            m = n * i
    }
    console.log('A Tabuada vai ate : ',m)    
    }

main()