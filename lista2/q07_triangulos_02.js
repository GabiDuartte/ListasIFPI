const prompt = require('prompt-sync')()

function main(){
    const lado1 = Number(prompt('Lado 1: '))
    const lado2 = Number(prompt('Lado 2: '))
    const lado3 = Number(prompt('Lado 3: '))

    if(etriang(lado1, lado2, lado3)){
       console.log('E triangulo') 

       if(lado1 == lado2 && lado2 == lado3){
          console.log('E equilatero') 
       }else if(lado1 == lado2 && lado2 != lado3 ){
           console.log('E isoceles')
       }else if(lado2 == lado3 && lado3 != lado1){
           console.log('E isoceles')
       }else if(lado1 == lado3 && lado2 != lado3){
           console.log('E isoceles')
       }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
           console.log('E escaleno')
       }else{
           console.log('Nao e triangulo')
       }
    }
    function etriang(l1, l2, l3){
        if((l1 + l2)> l3){
            return true
        }else if((l2 + l3)> l1){
            return true
        }else if((l1 + l3)> l2){
            return true
        }else{
            return false
        }
    }

}
main()