const prompt = require('prompt-sync')()

function main(){

    let n1 = Number(prompt('Num1: '))
    let n2 = Number(prompt('Num2: '))

    let q = 0
    let r = 0
    let c = 0

    while(!(n1 == 0)){
        c++
        
        if(n1 >= n2){
            n1 = n1 - n2
            q++
            r = n1
        }else{
            n1 = 0
        }
    }
    console.log(`Quociente = ${q}`)
    console.log(`Resto ${r}`)
}

main()