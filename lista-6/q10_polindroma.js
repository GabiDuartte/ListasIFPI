const prompt = require('prompt-sync')()

function main(){
    let p = prompt('Palavra: ')
    let inverter = p.split('').reverse().join('')

    if(inverter == p){
        console.log("É palindroma")
    }else{
        console.log("Não é palindroma")
    }

    console.log(inverter)
}
main()