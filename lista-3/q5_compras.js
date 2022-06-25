const prompt = require('prompt-sync')()

function main(){
    
    const v1 = Number(prompt('Valor 1 : '))
    const v2 = Number(prompt('Valor 2: '))
    const v3 = Number(prompt('Valor 3: '))

    let barato
    if( v1 < v2 && v1 < v3){
       barato = v1
    }else if(v2 < v1 && v2 < v3){
        barato = v2
    }else{
        barato = v3
    }
    console.log('O mais em conta e: ', barato)

}
main()