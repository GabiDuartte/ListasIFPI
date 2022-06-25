const prompt = require('prompt-sync')()

function main(){
        const n1 = Number(prompt('Num1: '))
        const n2 = Number(prompt('Num2: '))
        const n3 = Number(prompt('Num3: '))
        const n4 = Number(prompt('Num4: '))
        const n5 = Number(prompt('Num5: '))

        let maior, menor
        if(n1 > n2 && n1> n3 && n1 > n4 && n1 > n5){
            maior = n1
            if(n2 < n3 && n2 < n4 && n2 < n5){
                menor = n2
            }else if(n3 < n2 && n3 < n4 && n3 < n5){
                menor = n3
            }else if(n4 < n2 && n4 < n3 && n4 < n5){
                menor = n4
            }else{
                menor = n5
            }
        }else{
            menor = n1
            if(n2 > n3 && n2 > n4 && n2 > n5){
                maior = n2
            }else if(n3>n2 && n3 > n4 && n3 > n5){
                maior = n3
            }else if(n4 > n2 && n4 > n3 && n4 > n5){
                maior = n4
            }else{
                maior = n5
            }
        }
        console.log('Maior: ', maior)
        console.log('Menor: ', menor)
}
main()