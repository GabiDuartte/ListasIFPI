const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Quant. elementos: '))

    const v = Array(n)

    for(let i = 0; i<n; i++){
        v[i] = Number(prompt(`Elemento ${i}: `))
    }
    let maior = 0
    let menor = 0

    for(let i = 0; i<n; i++){
        if(v[i] > v[maior]){
            maior = i
        }else if(v[i] < v[menor]){
            menor = i
        }
    }
    console.log(`Maior ${v[maior]} (i: ${maior} )`)
    console.log(`Menor ${v[menor]} (i: ${menor}) `)
}
main()