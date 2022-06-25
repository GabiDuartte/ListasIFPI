const prompt = require('prompt-sync')()

function main(){
    let senha = prompt("Senha em letras (4): ")
    let s = senha.replace(senha, "*****")

console.log(s)
}
main()