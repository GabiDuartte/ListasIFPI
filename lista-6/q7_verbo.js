const prompt = require('prompt-sync')()

function main(){
    const f = prompt('Digite um verbo com 6 digitos terminado em ER: ')
    
    const m = f.substring(0,4)
    const r = f.substring(5,6) + "o"
    console.log('No presente: ', m + r)
}
main()