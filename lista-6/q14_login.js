const prompt = require('prompt-sync')()

function main(){
    console.log("Digite 0 para parar")
    let r = prompt("q parar s/n:  ")
    let n = prompt('Nome: ')

    while(r != 's' ){
        r = prompt('Que parar ? ')
        n = prompt('Nome: ')
        let l = n.charAt(0)
        console.log(l)
    }
}
main()