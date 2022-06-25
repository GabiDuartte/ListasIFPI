const prompt = require('prompt-sync')()

function main(){
const frase = prompt('Frase: ')

const frasesemespaco = frase.replace(/\s+/g, '')

console.log(frasesemespaco)
}
main()