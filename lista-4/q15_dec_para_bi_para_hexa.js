const prompt = require('prompt-sync')()

function main(){
    
    const dec = Number(prompt("Informe um numero: "))
    const decpb = Number(prompt('Digite 1 para converter para binario'))
    const decph = Number(prompt('Digite 2 para converter para hexagonal'))

    let bin = num_dec.toString(2)
    let hex = num_dec.toString(16)
    
    while(dec == decpb || dec == '1'){
        if(dec > 255){
           console.log('Invalido')
        }else{
            console.log('Decimal para binario: ', bin)
        }
    while(dec == decph || dec == '2'){
        if(dec > 255){
            console.log('Invalido')
        }else{
            console.log('Decimal para hexadecimal: ', hex)
        }
    }
    }
}
main()