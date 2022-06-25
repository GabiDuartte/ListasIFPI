const prompt = require('prompt-sync')()

function main(){
    const f = prompt('Numero por escrito: ')
    const n = Number(prompt('Digite um numero: '))

    const s = f.replace(n)

    console.log('o numero ', n, ' escrito e ', s)

}
main()