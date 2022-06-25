const prompt = require('prompt-sync')()

function main(){
    let nome = prompt('Nome: ')
    let s = prompt('Sobrenome: ')
    let u = prompt('Ultimo: ')

    const o = new Intl.Collator(u, s, nome)
    console.log(u , '/', s, '/', nome)
}
main()