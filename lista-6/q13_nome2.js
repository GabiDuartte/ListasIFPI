const prompt = require('prompt-sync')()

function main(){
    let n = prompt('Nome: ');
    let s = prompt('Sobrenome: ');
    let u = prompt('Ultimo nome: ');
    
    let i = prompt('inicial do sobrenome: ')
    let i2 = prompt('inicial do nome: ')

    console.log(u, ",",i,".",i2 , "..")

}
main()
