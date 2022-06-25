const prompt = require('prompt-sync')()

function main(){
    
    let f = prompt('Frase: ')
    let t = f.length

    console.log(t)
}
main()