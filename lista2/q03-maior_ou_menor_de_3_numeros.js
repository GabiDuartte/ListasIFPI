const prompt = require('prompt-sync')()

function main(){
    const num1 = Number(prompt('num1: '))
    const num2 = Number(prompt('num2: '))
    const num3 = Number(prompt('num3: '))

    let maior
    if(num1 > num2 && num1 > num3 ){
       maior = num1
    } else if(num2 > num1 && num2 > num3){
      maior = num2
    }else{
      maior = num3  
    }
    console.log('Maior: ', maior)

}
main()