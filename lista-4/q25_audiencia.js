const prompt = require('prompt-sync')()

function main(){
    let p = Number(prompt('Canal mais assistido: '))

    let c3 = 0
    let c2 = 0
    let c4 = 0
    let c5 = 0
    let c7 = 0
    let c10 = 0
    let total = 0
    console.log('Digite "0" para encerrar')
    while(p != 0){
        p = Number(prompt("Qual o seu canal mais assistido?(2/4/5/7/10): "))
        if(p == 2){
            c2++
        }else if(p == 4){
            c4++
        }else if(p == 5){
            c5++
        }else if(p == 7){
            c7++
        }else if(p == 10){
            c10++
        }else if(p == 3){
            c3++
        }else if(p == 0){
            console.log("Fim")
        }else{
            console.log("Invalido")
        } 
    }
    let pc2 = (100*c2)/total
    let pc3 = (100*c3)/total
    let pc4 = (100*c4)/total
    let pc5 = (100*c5)/total
    let pc7 = (100*c7)/total
    let pc10 = (100*c10)/total
    console.log('Assistem o canal 2: ', c2, ' Porcentagem: ', pc2)
    console.log('Assitem o canal 3: ', c3, ' Porcentagem: ', pc3)
    console.log('Assitem o canal 4: ', c4, ' Porcentagem: ', pc4)
    console.log('Assistem o canal 5: ', c5, ' Porcentagem: ', pc5)
    console.log('Assistem o canal 7: ', c7, ' Porcentagem: ', pc7)
    console.log('Assistem o canal 10: ', c7, ' Porcentagem: ', pc10)
}
main()