const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Quant de elementos de A: '))
    const n1 = Number(prompt('Quant de elementos de B: '))

    const vA = Array(n)
    const vB = Array(n1)
     
    let par = 0

    for(let i = 0; i<n; i++){
        vA[1] = Number(prompt(`Elementos de A: ${i}: `))

        if(vA[i] % 2 == 0){
            par = i
            console.log('Par')
        }else{
            console.log('Impar')
        }
    }
        for(let j = 0; j<n1; j++){
        vB[j] = Number(prompt(`Elementos de B:  ${j}:  `))
        if(vB[j] % 2 == 0){
            console.log('Par')
        }else{
            console.log('Impar')
        }
        
    }
    }
    
main()