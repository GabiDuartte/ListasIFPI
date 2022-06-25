const prompt = require('prompt-sync')()

function main(){

    const r = Number(prompt('Razão da PG: '))
    let n1 = Number(prompt('Num 1 da PG: '))
    let t = Number(prompt('Quantidade de termos da PG: '))

    let termo
    let c = 0
    
    while(!(t === c)){
        n1 = n1 * r
        termo = n1
        console.log(termo)
        c++
    }
    console.log('Termos da PG: ', termo)
}

main()