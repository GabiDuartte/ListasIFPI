const prompt = require('prompt-sync')()

function main(){
    const n =  Number(prompt('Quantidade de elementos: '))

    let vA = new Array(n)
    
   
    for(let i = 0; i<n; i++){
        vA[i] = Number(prompt(`Elementos ${i}: `))
    }
    let maior = 0
    let menor = 0
    for(let i = 0; i<n; i++){
        if(vA[i] > maior){
            maior = i
        }else if(vA[i] < menor){
            menor = i
        }
    }
    console.log(vA)
    console.log('Ordem: ', menor, maior)    
}
main()