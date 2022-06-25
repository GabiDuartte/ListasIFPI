const prompt = require('prompt-sync')()

function main(){

    const r = Number(prompt('Razão da PA: '))
    let n1 = Number(prompt('NUM 1 da PA: '))
    let t = Number(prompt('Quantidade de termos da PA: '))

    let termo
    let c = 0

    while (!(t === c)){
        n1 = n1 + r
        termo = n1
        console.log(termo)
        c++
    }
console.log('Termos da PA: ', termo)
}

main()