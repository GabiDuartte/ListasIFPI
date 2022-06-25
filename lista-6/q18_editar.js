const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Frase: ')
    const s = frase.substring(10)
    const r = prompt('Nova frase: ')
    const t = s + r

    console.log('Substituindo: ', t)
}
main()