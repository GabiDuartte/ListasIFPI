const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Frase: ')

    for(const char of frase){
        console.log(char.repeat(2))
    }  

}
main()