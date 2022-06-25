const prompt = require('prompt-sync')()

function main(){
    const n =  Number(prompt('Quantidade de elementos : '))

    const vA = Array(n)
    const vB = Array(n)
    let vC = 0
    let i = 0

    for(let i = 0; i<n; i++){
            vA[i] = Number(prompt(`Elementos de A:  ${i}: `))
            vB[i] = Number(prompt(`Elementos de B:  ${i}: `))
    }
    for(let i = 0; i<n; i++){
            vC = vA[i], '+', vB[i]
            console.log('Uniao: ', vA[i], '', vB[i])
    }
    for(let i = 0; i<n; i++){
        if(vA[i] == vB[i]){
                i++
                console.log('INterseções: ', i)
            } 
    }  
}
main()