const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Quant elementos: '))

    const vA = Array(n)

    for(let i = 0; i<n; i++){
        vA[i] = Number(prompt(`Elemento ${i}: `))
    }
    if(e_repetido(vA)){
        console.log('Com elementos repetididos')
    }else{
        console.log('Sem elementos repetidos')
    }
}
function e_repetido(vetor){
    let e
    for(let i = 0; i<vetor.length; i++){
        e = vetor[i]
        c = 0
        for(let j = 0; j<vetor.length; j++){
            if(e == vetor[j]){
                c++
            }
        }
        if(c > 1){
            return true
        }else{
            return false
        }
    }
}
main()