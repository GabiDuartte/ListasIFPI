const prompt = require('prompt-sync')()

function main(){
    const n =  Number(prompt('Quantidade de elementos: '))

    const vA = Array(n)
    const vB = Array(n)

    for(let i = 0; i<n; i++){
        vA[1] = Number(prompt(`Elementos ${i}: `))
    }
    let j = vB.length - 1
    for(item of vA){
        vB[j] = item
        j--
    }
    console.log(vA)
    console.log(vB)
}
main()